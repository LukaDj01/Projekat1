import { Person } from "./person";

export class Form{
    host : HTMLElement ;
    males : Array<Person>;
    females : Array<Person>;
    constructor(host : HTMLElement ){
        this.host=host;
        this.males=[];
        this.females=[];
    }

    drawInput(){
        const divInput = document.createElement("div");
        divInput.classList.add("divInput");
        this.host.appendChild(divInput);

        // Username
        const usernameDiv = document.createElement("div");
        usernameDiv.classList.add("usernameDiv");
        divInput.appendChild(usernameDiv);

        const usernameLabel = document.createElement("label");
        usernameLabel.classList.add("usernameLabel");
        usernameLabel.textContent="Username: ";
        usernameDiv.appendChild(usernameLabel);

        const usernameValueDiv = document.createElement("div");
        usernameValueDiv.classList.add("usernameValueDiv");
        usernameDiv.appendChild(usernameValueDiv);

        const usernameValue = document.createElement("input");
        usernameValue.classList.add("usernameValue");
        usernameValueDiv.appendChild(usernameValue);

        // First name
        const firstNameDiv = document.createElement("div");
        firstNameDiv.classList.add("firstNameDiv");
        divInput.appendChild(firstNameDiv);

        const firstNameLabel = document.createElement("label");
        firstNameLabel.classList.add("firstNameLabel");
        firstNameLabel.textContent="Frist name: ";
        firstNameDiv.appendChild(firstNameLabel);

        const firstNameValue = document.createElement("input");
        firstNameValue.classList.add("firstNameValue");
        firstNameDiv.appendChild(firstNameValue);

        // Last name
        const lastNameDiv = document.createElement("div");
        lastNameDiv.classList.add("lastNameDiv");
        divInput.appendChild(lastNameDiv);

        const lastNameLabel = document.createElement("label");
        lastNameLabel.classList.add("lastNameLabel");
        lastNameLabel.textContent="Last name: ";
        lastNameDiv.appendChild(lastNameLabel);

        const lastNameValue = document.createElement("input");
        lastNameValue.classList.add("lastNameValue");
        lastNameDiv.appendChild(lastNameValue);

        // Gender
        const genderDiv = document.createElement("div");
        genderDiv.classList.add("genderDiv");
        divInput.appendChild(genderDiv);

        // gender label
        const genderLabelDiv = document.createElement("div");
        genderLabelDiv.classList.add("genderLabelDiv");
        genderDiv.appendChild(genderLabelDiv);

        const genderLabel = document.createElement("label");
        genderLabel.classList.add("genderLabel");
        genderLabel.textContent="Gender: ";
        genderLabelDiv.appendChild(genderLabel);

        // gender M & F
        const genderMFDiv = document.createElement("div");
        genderMFDiv.classList.add("genderMFDiv");
        genderDiv.appendChild(genderMFDiv);
        
        // gender M
        const genderMDiv = document.createElement("div");
        genderMDiv.classList.add("genderMDiv");
        genderMFDiv.appendChild(genderMDiv);

        const genderMLabel = document.createElement("label");
        genderMLabel.classList.add("genderMLabel");
        genderMLabel.textContent="M ";
        genderMDiv.appendChild(genderMLabel);

        const genderMValue : HTMLInputElement = document.createElement("input");
        genderMValue.type="radio";
        genderMValue.checked=true;
        genderMValue.name="gender";
        genderMValue.value="M";
        genderMValue.classList.add("genderMValue");
        genderMDiv.appendChild(genderMValue);
        
        // gender F
        const genderFDiv = document.createElement("div");
        genderFDiv.classList.add("genderFDiv");
        genderMFDiv.appendChild(genderFDiv);

        const genderFLabel = document.createElement("label");
        genderFLabel.classList.add("genderFLabel");
        genderFLabel.textContent="F ";
        genderFDiv.appendChild(genderFLabel);

        const genderFValue = document.createElement("input");
        genderFValue.type="radio";
        genderFValue.name="gender";
        genderFValue.value="F";
        genderFValue.classList.add("genderFValue");
        genderFDiv.appendChild(genderFValue);

        // Button
        const buttonInputDiv = document.createElement("div");
        buttonInputDiv.classList.add("buttonInputDiv");
        divInput.appendChild(buttonInputDiv);

        const buttonInputValue = document.createElement("button");
        buttonInputValue.classList.add("buttonInputValue");
        buttonInputValue.textContent="Input";
        buttonInputDiv.appendChild(buttonInputValue);

        // error
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("errorDiv");
        divInput.appendChild(errorDiv);
    }

    drawSpheres(){
        const spheresDiv = document.createElement("div");
        spheresDiv.classList.add("spheresDiv");
        this.host.appendChild(spheresDiv);

        // males view
        const malesViewDiv = document.createElement("div");
        malesViewDiv.classList.add("malesViewDiv");
        spheresDiv.appendChild(malesViewDiv);

        /*let div;
        let label;
        div = document.createElement("div");
        div.classList.add("males");
        malesViewDiv.appendChild(div);

        label = document.createElement("label");
        label.textContent=`Luka (Kalu01#ss) Djordjevic`;
        div.appendChild(label);*/

        // first sphere
        const firstSphereDiv = document.createElement("div");
        firstSphereDiv.classList.add("firstSphereDiv");
        spheresDiv.appendChild(firstSphereDiv);

        const firstSphereLabel = document.createElement("label");
        firstSphereLabel.classList.add("firstSphereLabel");
        firstSphereLabel.textContent="";
        firstSphereDiv.appendChild(firstSphereLabel);

        // second sphere
        const secondSphereDiv = document.createElement("div");
        secondSphereDiv.classList.add("secondSphereDiv");
        spheresDiv.appendChild(secondSphereDiv);

        const secondSphereLabel = document.createElement("label");
        secondSphereLabel.classList.add("secondSphereLabel");
        secondSphereLabel.textContent="";
        secondSphereDiv.appendChild(secondSphereLabel);

        // females view
        const femalesViewDiv = document.createElement("div");
        femalesViewDiv.classList.add("femalesViewDiv");
        spheresDiv.appendChild(femalesViewDiv);
    }

    /*drawActionButtons(){
        const actBtnDiv = document.createElement("div");
        actBtnDiv.classList.add("actBtnDiv");
        this.host.appendChild(actBtnDiv);

        // Button genSoloVol
        const genSoloVolunteersDiv = document.createElement("div");
        genSoloVolunteersDiv.classList.add("genSoloVolunteersDiv");
        actBtnDiv.appendChild(genSoloVolunteersDiv);

        const genSoloVolunteersBtn = document.createElement("button");
        genSoloVolunteersBtn.classList.add("genSoloVolunteersBtn");
        genSoloVolunteersBtn.textContent="Action 1";
        genSoloVolunteersDiv.appendChild(genSoloVolunteersBtn);

        // Button genPair
        const genPairVolunteersDiv = document.createElement("div");
        genPairVolunteersDiv.classList.add("genPairVolunteersDiv");
        actBtnDiv.appendChild(genPairVolunteersDiv);

        const genPairVolunteersBtn = document.createElement("button");
        genPairVolunteersBtn.classList.add("genPairVolunteersBtn");
        genPairVolunteersBtn.textContent="Action 11";
        genPairVolunteersDiv.appendChild(genPairVolunteersBtn);
    }*/

    drawVolunteersView(){
        const volunteersViewDiv = document.createElement("div");
        volunteersViewDiv.classList.add("volunteersViewDiv");
        this.host.appendChild(volunteersViewDiv);

        // solo volunteers
        const soloVolunteersDiv = document.createElement("div");
        soloVolunteersDiv.classList.add("soloVolunteersDiv");
        volunteersViewDiv.appendChild(soloVolunteersDiv);

        // genPair
        const genSoloVolunteersDiv = document.createElement("div");
        genSoloVolunteersDiv.classList.add("genSoloVolunteersDiv");
        soloVolunteersDiv.appendChild(genSoloVolunteersDiv);

        const countSoloVolunteersDiv = document.createElement("div");
        countSoloVolunteersDiv.classList.add("countSoloVolunteersDiv");
        genSoloVolunteersDiv.appendChild(countSoloVolunteersDiv);

        const countSoloVolunteersLabel = document.createElement("label");
        countSoloVolunteersLabel.classList.add("countSoloVolunteersLabel");
        countSoloVolunteersLabel.textContent="Number: ";
        countSoloVolunteersDiv.appendChild(countSoloVolunteersLabel);

        const countSoloVolunteersInput : HTMLInputElement = document.createElement("input");
        countSoloVolunteersInput.type="number";
        countSoloVolunteersInput.classList.add("countSoloVolunteersInput");
        countSoloVolunteersInput.value=`${0}`;
        countSoloVolunteersDiv.appendChild(countSoloVolunteersInput);

        // pair button
        const genSoloVolunteersBtn = document.createElement("button");
        genSoloVolunteersBtn.classList.add("genSoloVolunteersBtn");
        genSoloVolunteersBtn.textContent="Solo Volunteer";
        genSoloVolunteersDiv.appendChild(genSoloVolunteersBtn);

        // solo view
        const soloVolunteersViewDiv = document.createElement("div");
        soloVolunteersViewDiv.classList.add("soloVolunteersViewDiv");
        soloVolunteersDiv.appendChild(soloVolunteersViewDiv);

        // pair volunteers
        const pairVolunteersDiv = document.createElement("div");
        pairVolunteersDiv.classList.add("pairVolunteersDiv");
        volunteersViewDiv.appendChild(pairVolunteersDiv);

        // genPair
        const genPairVolunteersDiv = document.createElement("div");
        genPairVolunteersDiv.classList.add("genPairVolunteersDiv");
        pairVolunteersDiv.appendChild(genPairVolunteersDiv);

        const countPairVolunteersDiv = document.createElement("div");
        countPairVolunteersDiv.classList.add("countPairVolunteersDiv");
        genPairVolunteersDiv.appendChild(countPairVolunteersDiv);

        const countPairVolunteersLabel = document.createElement("label");
        countPairVolunteersLabel.classList.add("countPairVolunteersLabel");
        countPairVolunteersLabel.textContent="Number: ";
        countPairVolunteersDiv.appendChild(countPairVolunteersLabel);

        const countPairVolunteersInput : HTMLInputElement = document.createElement("input");
        countPairVolunteersInput.type="number";
        countPairVolunteersInput.classList.add("countPairVolunteersInput");
        countPairVolunteersInput.value=`${0}`;
        countPairVolunteersDiv.appendChild(countPairVolunteersInput);

        // pair button
        const genPairVolunteersBtn = document.createElement("button");
        genPairVolunteersBtn.classList.add("genPairVolunteersBtn");
        genPairVolunteersBtn.textContent="Pair Volunteer";
        genPairVolunteersDiv.appendChild(genPairVolunteersBtn);

        // pair view
        const pairVolunteersViewDiv = document.createElement("div");
        pairVolunteersViewDiv.classList.add("pairVolunteersViewDiv");
        pairVolunteersDiv.appendChild(pairVolunteersViewDiv);
    }

    drawUsernameError(){
        const usernameValueDiv = document.querySelector(".usernameValueDiv");

        const errorInvalidUsername = document.createElement("div");
        errorInvalidUsername.classList.add("errorInvalidUsername");
        usernameValueDiv.appendChild(errorInvalidUsername);

        const div1 = document.createElement("div");
        div1.style.fontSize=".875em";
        div1.textContent="Invalid username!";
        errorInvalidUsername.appendChild(div1);

        const div2 = document.createElement("div");
        div2.style.fontSize=".700em";
        div2.textContent="Username must contain: ";
        errorInvalidUsername.appendChild(div2);

        const div3 = document.createElement("div");
        div3.style.fontSize=".700em";
        div3.style.paddingLeft="10%";
        div3.textContent="1) At least 8 characters";
        errorInvalidUsername.appendChild(div3);

        const div4 = document.createElement("div");
        div4.style.fontSize=".700em";
        div4.style.paddingLeft="10%";
        div4.textContent="2) At least 1 capital character";
        errorInvalidUsername.appendChild(div4);

        const div5 = document.createElement("div");
        div5.style.fontSize=".700em";
        div5.style.paddingLeft="10%";
        div5.textContent="3) At least 1 special character";
        errorInvalidUsername.appendChild(div5);

        const div6 = document.createElement("div");
        div6.style.fontSize=".700em";
        div6.style.paddingLeft="10%";
        div6.textContent="4) At least 1 number";
        errorInvalidUsername.appendChild(div6);
    }

    getEmptyInputFields(){
        const username : HTMLInputElement = document.querySelector(".usernameValue");
        const firstName : HTMLInputElement = document.querySelector(".firstNameValue");
        const lastName : HTMLInputElement = document.querySelector(".lastNameValue");
        username.value="";
        firstName.value="";
        lastName.value="";
    }

    addSoloVolView(text : string){
        const soloVolunteersViewDiv = document.querySelector(".soloVolunteersViewDiv");

        const div = document.createElement("div");
        div.classList.add("volunteers");
        soloVolunteersViewDiv.appendChild(div);

        const label = document.createElement("label");
        label.textContent=`${text}`;
        div.appendChild(label);
    }

    addPairVolView(text : string){
        const pairVolunteersViewDiv = document.querySelector(".pairVolunteersViewDiv");

        const div = document.createElement("div");
        div.classList.add("volunteers");
        pairVolunteersViewDiv.appendChild(div);

        const label = document.createElement("label");
        label.textContent=`${text}`;
        div.appendChild(label);
    }

    addMale(male: Person){
        this.males.push(male);
    }

    removeMale(index : number){
        this.males.splice(index, 1);
        this.updateMaleView();
    }

    addFemale(female: Person){
        this.females.push(female);
    }

    removeFemale(index : number){
        this.females.splice(index, 1);
        this.updateFemaleView();
    }

    updateFirstSphere(){
        const firstSphereNumber = document.querySelector(".firstSphereLabel");
        firstSphereNumber.textContent=`${this.males.length}`;
    }

    updateSecondSphere(){
        const secondSphereNumber = document.querySelector(".secondSphereLabel");
        secondSphereNumber.textContent=`${this.females.length}`;
    }

    updateMaleView(){
        const malesViewDiv = document.querySelector(".malesViewDiv");
        while(malesViewDiv.childElementCount)
        {
            malesViewDiv.removeChild(malesViewDiv.lastChild);
        }

        this.males.forEach((male:Person)=>{
            const text = `${male.firstName} (${male.username}) ${male.lastName}`;

            const div = document.createElement("div");
            div.classList.add("males");
            malesViewDiv.appendChild(div);
    
            const label = document.createElement("label");
            label.textContent=`${text}`;
            div.appendChild(label);
        })
        
    }

    updateFemaleView(){
        const femalesViewDiv = document.querySelector(".femalesViewDiv");
        while(femalesViewDiv.childElementCount)
        {
            femalesViewDiv.removeChild(femalesViewDiv.lastChild);
        }

        this.females.forEach((female:Person)=>{
            const text = `${female.firstName} (${female.username}) ${female.lastName}`;

            const div = document.createElement("div");
            div.classList.add("females");
            femalesViewDiv.appendChild(div);

            const label = document.createElement("label");
            label.textContent=`${text}`;
            div.appendChild(label);
        })
    }
}
