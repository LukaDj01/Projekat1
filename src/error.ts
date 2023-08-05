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
    if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(string)){
        addErrorInvalidUsername();
    }
    else
    {
        removeErrorInvalidUsername();
    }
}