import { Observable, Observer, Subject, Subscription, debounceTime, distinctUntilChanged, filter, from, fromEvent, map, merge, switchMap, take, throttleTime, zip } from "rxjs";
import { Form } from "./form";
import { Person } from "./person";
import { getRandomIndex, getRandomInterval } from "./randomFunc";
import { checkingInput, checkingUsername, satisfiesCondition } from "./error";

const form = new Form(document.body);
form.drawInput();
form.drawSpheres();
form.drawVolunteersView();

const URL = "http://localhost:3000/people";
function getPeople() : Observable<Array<Person>> {
    const people = fetch(URL).then(response=>{
        if(!response.ok)
            throw new Error("Fetching error");
        else
            return response.json();
    }).catch(err=>console.error(err))
    return from(people);
};

getPeople().subscribe((people:Array<Person>)=>{
    people.forEach((person:Person)=>{
        if(person.gender==="M")
        {
            form.addMale(person);
        }
        else
        {
            form.addFemale(person);
        }
    });
});

const usernameInput : HTMLInputElement = document.querySelector(".usernameValue");
fromEvent(usernameInput, "input").pipe(
    debounceTime(600),
    map((ev:InputEvent)=>(<HTMLInputElement>ev.target).value),
    distinctUntilChanged(),
    filter((x:string)=>x.length>=4),
).subscribe((x:string)=>satisfiesCondition(x));

const inputBtn : HTMLButtonElement = document.querySelector(".buttonInputValue");
fromEvent(inputBtn, "click").pipe(
    throttleTime(300),
    //switchMap()
).subscribe(()=>inputPerson());

function inputPerson() {
    const username : string = (<HTMLInputElement>document.querySelector(".usernameValue")).value;
    const firstName : string = (<HTMLInputElement>document.querySelector(".firstNameValue")).value;
    const lastName : string = (<HTMLInputElement>document.querySelector(".lastNameValue")).value;
    const gender : string = (<HTMLInputElement>document.querySelector('input[name="gender"]:checked')).value;
    const correct1 : boolean = checkingInput(username, firstName, lastName, gender);
    const correct2 : boolean = checkingUsername(username, form.males.concat(form.females));
    if(!correct1 || !correct2)
    {
        return;
    }
    const person = new Person(username, firstName, lastName, gender);
    if(gender==="M")
    {
        form.addMale(person);
    }
    else
    {
        form.addFemale(person);
    }
    form.getEmptyInputFields();
}

function firstSphere(ob$: Observable<any>, intervalLength:number) : Observable<Person>  {
    return new Observable((gen)=>{
        const intervalId = setInterval(()=>{
            if (form.males.length === 0) {
                gen.complete();
                clearInterval(intervalId);
                return;
            }
            const randomIndex = getRandomIndex(form.males);
            const randomPerson = form.getMale(randomIndex);

            gen.next(randomPerson)
            form.removeMale(randomIndex);
            
        }, intervalLength);

        ob$.subscribe(() => {
            clearInterval(intervalId);
            gen.complete();
        });
    })/*.pipe(
        takeUntil(ob$) // nece
    )*/
}

function secondSphere(ob$: Observable<any>, intervalLength:number) : Observable<Person> {
    return new Observable((gen)=>{
        const intervalId = setInterval(()=>{
            if (form.females.length === 0) {
                //gen.complete(); // suvisno??
                clearInterval(intervalId);
                return;
            }
            const randomIndex = getRandomIndex(form.females);
            const randomPerson = form.getFemale(randomIndex);

            gen.next(randomPerson)
            form.removeFemale(randomIndex);
            
        }, intervalLength);

        ob$.subscribe(() => {
            clearInterval(intervalId);
            //gen.complete();
        });
    })
}

function createObserver(subject$: Subject<any>) : Observer<any>{
    return {
        next: ()=> {

        },
        error: (o) => {
            console.error("Error:", o);
        },
        complete: () => {
            subject$.next(1);
        }
    }  
};

// solo volunteers
function genSoloVolunteers(){
    const genSoloVolunteersBtn : HTMLButtonElement= document.querySelector(".genSoloVolunteersBtn");
    genSoloVolunteersBtn.onclick=() : Subscription =>{
        let border : number = parseInt((<HTMLInputElement>document.querySelector(".countSoloVolunteersInput")).value);
        const controlFlow$ = new Subject();
        return merge(firstSphere(controlFlow$, getRandomInterval()), secondSphere(controlFlow$, getRandomInterval())).pipe(
            map((person:Person) => `${person.firstName} (${person.username}) ${person.lastName}`),
            switchMap((x:string)=>updateSoloVolView(x)),
            take(border)
        ).subscribe(createObserver(controlFlow$));
    };
};
genSoloVolunteers();

// pair volunteers
function genPairVolunteers() {
    const genPairVolunteersBtn : HTMLButtonElement= document.querySelector(".genPairVolunteersBtn");
    genPairVolunteersBtn.onclick=() : Subscription=>{
        let border = form.males.length < form.females.length ? form.males.length : form.females.length;
        const countPairVolunteersInput : number = parseInt((<HTMLInputElement>document.querySelector(".countPairVolunteersInput")).value);
        border = countPairVolunteersInput < border ? countPairVolunteersInput : border;
        const controlFlow$ = new Subject();
        return zip([firstSphere(controlFlow$, 500), secondSphere(controlFlow$, 500)]).pipe(
            map((pair:[Person, Person])=> `${pair[0].username} - ${pair[1].username}`),
            switchMap((x:string)=>updatePairVolView(x)),
            take(border)
        ).subscribe(createObserver(controlFlow$));
    };
};
genPairVolunteers();

function updateSoloVolView(text: string) : Observable<any> {
    form.addSoloVolView(text);
    return from([1]);
}

function updatePairVolView(text: string) : Observable<any> {
    form.addPairVolView(text);
    return from([1]);
}
