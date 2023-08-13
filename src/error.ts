import { Person } from "./person";

function addErrorInvalidUsername() {
    const username = document.querySelector(".usernameValue");
    const errorInvalidUsername = document.querySelector(".errorInvalidUsername");
    username.classList.add('error');
    errorInvalidUsername.classList.add('error');
}

function removeErrorInvalidUsername(){
    const username = document.querySelector(".usernameValue");
    const errorInvalidUsername = document.querySelector(".errorInvalidUsername");
    errorInvalidUsername.classList.remove('error');
    username.classList.remove('error');
}

export function satisfiesCondition(string:string) {
    if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(string) && string!==""){
        addErrorInvalidUsername();
    }
    else
    {
        removeErrorInvalidUsername();
    }
}

function addErrorInvalidInput() {
    const errorDiv = document.querySelector(".errorDiv");

    const errorText = document.createElement("div");
    errorText.classList.add("errorText");
    errorText.textContent="Invalid input!";
    errorDiv.appendChild(errorText);
}

function removeErrorInvalidInput() {
    const errorDiv = document.querySelector(".errorDiv");
    if (errorDiv.childElementCount!==0)
        errorDiv.removeChild(errorDiv.lastChild);
}

export function checkingInput(username: string, firstName: string, lastName:string, gender:string) : boolean {
    if(username==="" || firstName==="" || lastName==="" || gender==="")
    {
        removeErrorInvalidInput()
        addErrorInvalidInput();
        return false;
    }
    else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(username))
    {
        removeErrorInvalidInput()
        addErrorInvalidInput();
        return false;
    }
    else
    {
        removeErrorInvalidInput();
        return true;
    }
}

function addErrorNotUniqueUsername() {
    const errorDiv = document.querySelector(".errorDiv");

    const errorText = document.createElement("div");
    errorText.classList.add("errorText");
    errorText.textContent="That username already exist!";
    errorDiv.appendChild(errorText);
}

/*function removeErrorNotUniqueUsername() {
    const errorDiv = document.querySelector(".errorDiv");
    if (errorDiv.childElementCount!==0)
        errorDiv.removeChild(errorDiv.lastChild);
}*/

export function checkingUsername(username: string, people : Array<Person>) : boolean {
    let i : boolean = true;
    people.forEach((person:Person)=>{
        if(person.username===username)
        {
            removeErrorInvalidInput()
            addErrorNotUniqueUsername();
            i = false;
        }
    });
    return i;
}
