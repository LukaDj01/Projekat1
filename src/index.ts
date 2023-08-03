import { Observable, Observer, Subscription, filter, from, interval, map, of, pairwise, take, takeUntil, zip } from "rxjs";
import { Form } from "./form";
import { Person } from "./person";
import { getRandomIndex, getRandomInterval } from "./randomFunc";

const form = new Form(document.body);
form.drawInput();
form.drawSpheres();
form.drawActionButtons();

const firstSphereNumber : HTMLLabelElement= document.querySelector(".firstSphereLabel");
const secondSphereNumber : HTMLLabelElement= document.querySelector(".secondSphereLabel");
const actBtn1 : HTMLButtonElement= document.querySelector(".actBtn1Value");
const actBtn11 : HTMLButtonElement= document.querySelector(".actBtn11Value");


let persons:Array<Person> = [];
let male:Array<Person> = [];
let female:Array<Person> = [];
persons.push(new Person("Nikola123", "Nikola", "Jovanovic", "M"));
persons.push(new Person("Kalu22", "Luka", "Djordjevic", "M"));
persons.push(new Person("Sara111", "Sara", "Jovanovic", "F"));
const niz1:Array<number>=[1,2,3,4,5,6,7];
const niz2:Array<number>=[1,2,3,4,5,6];
const number1$ : Observable<number> = from(niz1);
const number2$ : Observable<number> = from(niz2);

firstSphereNumber.textContent=`${niz1.length}`;
secondSphereNumber.textContent=`${niz2.length}`;

function firstSphere(array: Array<number>) {
    return new Observable((obs)=>{
        setInterval(()=>{
            const randomIndex = getRandomIndex(array);
            const randomValue = array[randomIndex];

            obs.next(randomValue)
            array.splice(randomIndex, 1);
            firstSphereNumber.textContent=`${niz1.length}`;
            
        }, getRandomInterval());
        
    }).pipe(
        take(array.length)
    ).subscribe(o=>console.log("Prva: " + o));
}
firstSphere(niz1);

function secondSphere(array: Array<number>) {
    return new Observable((obs)=>{
        setInterval(()=>{
            const randomIndex = getRandomIndex(array);
            const randomValue = array[randomIndex];

            obs.next(randomValue)
            array.splice(randomIndex, 1);
            secondSphereNumber.textContent=`${niz2.length}`;
            
        }, getRandomInterval());
        
    }).pipe(
        take(array.length)
    ).subscribe(o=>console.log("Druga: " + o));
}
secondSphere(niz2);



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
