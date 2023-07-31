import { Observable, Subscription, filter, from, map, of, pairwise, takeUntil, zip } from "rxjs";
import { Form } from "./form";
import { Person } from "./person";

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


from(persons).pipe(
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
}*/

actBtn1.addEventListener("click", ()=> {
   const subAct1 : Subscription = action1();
   actBtn11.onclick = ()=>subAct1.unsubscribe();
});
