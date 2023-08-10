import { Observable, Observer, Subject, Subscription, debounceTime, distinctUntilChanged, filter, from, fromEvent, map, merge, switchMap, take, throttleTime, zip } from "rxjs";
import { Form } from "./form";
import { Person } from "./person";
import { getRandomIndex, getRandomInterval } from "./randomFunc";
import { checkingInput, checkingUsername, satisfiesCondition } from "./error";

const form = new Form(document.body);
form.drawInput();
form.drawUsernameError();
form.drawSpheres();
form.drawVolunteersView();

const firstSphereNumber : HTMLLabelElement= document.querySelector(".firstSphereLabel");
const secondSphereNumber : HTMLLabelElement= document.querySelector(".secondSphereLabel");

let maleArray:Array<Person> = [];
let femaleArray:Array<Person> = [];
let numSoloVolGenerater = 1;
let numPairVolGenerater = 1;

const URL = "http://localhost:3000/people";
function getPeople() : Observable<Array<Person>> {
    const people = fetch(URL).then(response=>{
        if(!response.ok)
            throw new Error("Error");
        else
            return response.json();
    }).catch(err=>console.error(err))
    return from(people);
};

getPeople().subscribe({
    next: (o:Array<Person>)=>{
        o.forEach((person:Person)=>{
            if(person.gender==="M")
                maleArray.push(person);
            else
                femaleArray.push(person);
        });
    },
    complete() {
        form.updateFirstSphere(maleArray.length);
        form.updateSecondSphere(femaleArray.length);
    },
});

const usernameInput : HTMLInputElement = document.querySelector(".usernameValue");
fromEvent(usernameInput, "input").pipe(
    debounceTime(600),
    map((ev:InputEvent)=>(<HTMLInputElement>ev.target).value),
    distinctUntilChanged(),
    //filter((x:string)=>x.length>=3),
).subscribe((x:string)=>satisfiesCondition(x));

function inputBtnEvent() {
    const inputBtn = document.querySelector(".buttonInputValue");
    fromEvent(inputBtn, "click").pipe(
        throttleTime(300),
        //switchMap()
    ).subscribe(()=>inputPerson());
}
inputBtnEvent();

function inputPerson() {
    const username : string = (<HTMLInputElement>document.querySelector(".usernameValue")).value;
    const firstName : string = (<HTMLInputElement>document.querySelector(".firstNameValue")).value;
    const lastName : string = (<HTMLInputElement>document.querySelector(".lastNameValue")).value;
    const gender : string = (<HTMLInputElement>document.querySelector('input[name="gender"]:checked')).value;
    const correct1 : boolean = checkingInput(username, firstName, lastName, gender);
    const correct2 : boolean = checkingUsername(username, maleArray.concat(femaleArray));
    if(!correct1 || !correct2)
    {
        return;
    }
    const person = new Person(username, firstName, lastName, gender);
    if(gender==="M")
    {
        maleArray.push(person);
        form.updateFirstSphere(maleArray.length);
    }
    else
    {
        femaleArray.push(person);
        form.updateSecondSphere(femaleArray.length);
    }
    form.getEmptyInputFields();
}

function firstSphere(ob$: Observable<any>, interval:number) : Observable<Person>  {
    return new Observable((gen)=>{
        const intervalId = setInterval(()=>{
            if (maleArray.length === 0) {
                gen.complete();
                clearInterval(intervalId);
                return;
            }
            const randomIndex = getRandomIndex(maleArray);
            const randomPerson = maleArray[randomIndex];

            gen.next(randomPerson)
            maleArray.splice(randomIndex, 1);
            firstSphereNumber.textContent=`${maleArray.length}`;
            
        }, interval);

        ob$.subscribe(() => {
            clearInterval(intervalId);
            gen.complete();
        });
    })/*.pipe(
        takeUntil(ob$) // nece
    )*/
}

function secondSphere(ob$: Observable<any>, interval:number) : Observable<Person> {
    return new Observable((gen)=>{
        const intervalId = setInterval(()=>{
            if (femaleArray.length === 0) {
                gen.complete();
                clearInterval(intervalId);
                return;
            }
            const randomIndex = getRandomIndex(femaleArray);
            const randomPerson = femaleArray[randomIndex];

            gen.next(randomPerson)
            femaleArray.splice(randomIndex, 1);
            secondSphereNumber.textContent=`${femaleArray.length}`;
            
        }, interval);

        ob$.subscribe(() => {
            clearInterval(intervalId);
            gen.complete();
        });
    })
}

function createObserver(subject$: Subject<any>) : Observer<any>{
    return {
        next: (o)=> {
            //console.log(o);
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
            map((x:Person) => `${numSoloVolGenerater++}. ${x.firstName} (${x.username}) ${x.lastName}`),
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
        let border = maleArray.length < femaleArray.length ? maleArray.length : femaleArray.length;
        const countPairVolunteersInput : number = parseInt((<HTMLInputElement>document.querySelector(".countPairVolunteersInput")).value);
        border = countPairVolunteersInput < border ? countPairVolunteersInput : border;
        const controlFlow$ = new Subject();
        return zip([firstSphere(controlFlow$, 500), secondSphere(controlFlow$, 500)]).pipe(
            map((pair:[Person, Person])=> `${numPairVolGenerater++}. par: ${pair[0].username} - ${pair[1].username}`),
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
