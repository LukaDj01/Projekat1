export class Form{
    constructor(host){
        this.host=host;
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

        const usernameValue = document.createElement("input");
        usernameValue.classList.add("usernameValue");
        usernameDiv.appendChild(usernameValue);

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
        genderLabel.textContent="Pol: ";
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

        const genderMValue = document.createElement("input");
        genderMValue.type="radio";
        genderMValue.checked="checked";
        genderMValue.name="gender";
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
        genderFValue.classList.add("genderFValue");
        genderFDiv.appendChild(genderFValue);

        // Button
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("buttonDiv");
        divInput.appendChild(buttonDiv);

        const buttonValue = document.createElement("button");
        buttonValue.classList.add("buttonValue");
        buttonValue.textContent="Enter";
        buttonDiv.appendChild(buttonValue);
    }

    drawSpheres(){
        const spheresDiv = document.createElement("div");
        spheresDiv.classList.add("spheresDiv");
        this.host.appendChild(spheresDiv);

        // first
        const firstSphereDiv = document.createElement("div");
        firstSphereDiv.classList.add("firstSphereDiv");
        spheresDiv.appendChild(firstSphereDiv);

        const firstSphereLabel = document.createElement("label");
        firstSphereLabel.classList.add("firstSphereLabel");
        firstSphereLabel.textContent="";
        firstSphereDiv.appendChild(firstSphereLabel);

        // second
        const secondSphereDiv = document.createElement("div");
        secondSphereDiv.classList.add("secondSphereDiv");
        spheresDiv.appendChild(secondSphereDiv);

        const secondSphereLabel = document.createElement("label");
        secondSphereLabel.classList.add("secondSphereLabel");
        secondSphereLabel.textContent="";
        secondSphereDiv.appendChild(secondSphereLabel);
    }

    drawActionButtons(){
        const actBtnDiv = document.createElement("div");
        actBtnDiv.classList.add("actBtnDiv");
        this.host.appendChild(actBtnDiv);

        // Button
        const actBtn1Div = document.createElement("div");
        actBtn1Div.classList.add("actBtn1Div");
        actBtnDiv.appendChild(actBtn1Div);

        const actBtn1Value = document.createElement("button");
        actBtn1Value.classList.add("actBtn1Value");
        actBtn1Value.textContent="Action 1";
        actBtn1Div.appendChild(actBtn1Value);

        // Button
        const actBtn11Div = document.createElement("div");
        actBtn11Div.classList.add("actBtn11Div");
        actBtnDiv.appendChild(actBtn11Div);

        const actBtn11Value = document.createElement("button");
        actBtn11Value.classList.add("actBtn11Value");
        actBtn11Value.textContent="Action 11";
        actBtn11Div.appendChild(actBtn11Value);
    }
}