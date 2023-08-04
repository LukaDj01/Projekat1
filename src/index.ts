import { Observable, Observer, Subject, Subscription, filter, from, interval, map, merge, of, pairwise, take, takeUntil, zip } from "rxjs";
import { Form } from "./form";
import { Person } from "./person";
import { getRandomIndex, getRandomInterval } from "./randomFunc";

const form = new Form(document.body);
form.drawInput();
form.drawSpheres();
form.drawVolunteersView();

const firstSphereNumber : HTMLLabelElement= document.querySelector(".firstSphereLabel");
const secondSphereNumber : HTMLLabelElement= document.querySelector(".secondSphereLabel");

let maleArray:Array<Person> = [];
let femaleArray:Array<Person> = [];
maleArray.push(new Person("Nikola123", "Nikola", "Jovanovic", "M"));
maleArray.push(new Person("Kalu0", "Luka0", "Djordjevic", "M"));
maleArray.push(new Person("Kalu1", "Luka1", "Djordjevic", "M"));
maleArray.push(new Person("Kalu2", "Luka2", "Djordjevic", "M"));
maleArray.push(new Person("Kalu3", "Luka3", "Djordjevic", "M"));
femaleArray.push(new Person("Sara0", "Sara0", "Jovanovic", "F"));
femaleArray.push(new Person("Sara1", "Sara1", "Jovanovic", "F"));
femaleArray.push(new Person("Sara2", "Sara2", "Jovanovic", "F"));

firstSphereNumber.textContent=`${maleArray.length}`;
secondSphereNumber.textContent=`${femaleArray.length}`;

function firstSphere(ob$: Observable<any>) {
    return new Observable((gen)=>{
        const intervalId = setInterval(()=>{
            if (maleArray.length === 0) {
                gen.complete();
                clearInterval(intervalId);
                return;
            }
            const randomIndex = getRandomIndex(maleArray);
            const randomValue = maleArray[randomIndex];

            gen.next(randomValue)
            maleArray.splice(randomIndex, 1);
            firstSphereNumber.textContent=`${maleArray.length}`;
            
        }, 600); //getRandomInterval()

        ob$.subscribe(() => {
            clearInterval(intervalId);
            gen.complete();
        });
    })/*.pipe(
        takeUntil(ob$) // nece
    )*/
}

function secondSphere(ob$: Observable<any>) {
    return new Observable((gen)=>{
        const intervalId = setInterval(()=>{
            if (femaleArray.length === 0) {
                gen.complete();
                clearInterval(intervalId);
                return;
            }
            const randomIndex = getRandomIndex(femaleArray);
            const randomValue = femaleArray[randomIndex];

            gen.next(randomValue)
            femaleArray.splice(randomIndex, 1);
            secondSphereNumber.textContent=`${femaleArray.length}`;
            
        }, 400); //getRandomInterval()

        ob$.subscribe(() => {
            clearInterval(intervalId);
            gen.complete();
        });
    })
}

// solo volunteers
function genSoloVolunteers() {
    const genSoloVolunteersBtn : HTMLButtonElement= document.querySelector(".genSoloVolunteersBtn");
    genSoloVolunteersBtn.onclick=()=>{
        let num = 1;
        let border = 5;
        const controlFlow$ = new Subject();
        return merge(firstSphere(controlFlow$), secondSphere(controlFlow$)).pipe(
            map((x:Person) => `${num++}. ${x.firstName} (${x.username}) ${x.lastName}`),
            take(border)
        ).subscribe(
            {
                next: (o:string)=> {
                    console.log(o)
                },
                complete: () => {
                    controlFlow$.next(1);
                }
            }
        );
    };
};
genSoloVolunteers();

// pair volunteers
function genPairVolunteers() {
    const genPairVolunteersBtn : HTMLButtonElement= document.querySelector(".genPairVolunteersBtn");
    genPairVolunteersBtn.onclick=()=>{
        let num = 1;
        let border = maleArray.length < femaleArray.length ? maleArray.length : femaleArray.length;
        const controlFlow$ = new Subject();
        return zip([firstSphere(controlFlow$), secondSphere(controlFlow$)]).pipe(
            map((pair:[Person, Person])=> `${num++}. par: ${pair[0].username} - ${pair[1].username}`),
            take(border)
        ).subscribe(
            {
                next: (o:string)=> {
                    console.log(o)
                },
                complete: () => {
                    controlFlow$.next(1);
                }
            }
        );
    };
};
genPairVolunteers();



/*const arrayValues = [1, 2, 3, 4, 5, 6];

// Funkcija koja generiše nasumičan indeks iz niza
function getRandomIndex() {
  return Math.floor(Math.random() * arrayValues.length);
}

// Observable koji emituje brojeve redom: 0, 1, 2, ...
const source$ = interval(200).pipe(
  take(arrayValues.length)
);

// Pratimo Observable i ispisujemo nasumične vrednosti na ekran
const subscription = source$.subscribe(() => {
  if (arrayValues.length === 0) {
    console.log("Nema više elemenata.");
    subscription.unsubscribe(); // Prekidamo pretplatu kada nema više elemenata u nizu
    return;
  }

  const randomIndex = getRandomIndex();
  const randomValue = arrayValues[randomIndex];

  // Izbacujemo pročitanu vrednost iz niza
  arrayValues.splice(randomIndex, 1);

  console.log(randomValue);
});*/


/*from(persons).pipe(
    filter((person:Person)=>person.gender==="M"),
).subscribe(o=>{
    male.push(o);
    firstSphereNumber.textContent = `${male.length}`
});


from(persons).pipe(
    filter((person:Person)=>person.gender==="F")
).subscribe(o=>{
    female.push(o);
    secondSphereNumber.textContent = `${female.length}`
});


function action1() : Subscription{
    return zip([number1$,number2$]).pipe(
    ).subscribe(i=>{    
        console.log(i);
    });
}
/*function action12(){
    return new Observable((niz1, niz2)=>{
        setInterval(()=>{
        },3000);
    }).pipe
}*//*

actBtn1.addEventListener("click", ()=> {
   const subAct1 : Subscription = action1();
   actBtn11.onclick = ()=>subAct1.unsubscribe();
});*/
