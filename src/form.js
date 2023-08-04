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
        const buttonEnterDiv = document.createElement("div");
        buttonEnterDiv.classList.add("buttonEnterDiv");
        divInput.appendChild(buttonEnterDiv);

        const buttonEnterValue = document.createElement("button");
        buttonEnterValue.classList.add("buttonEnterValue");
        buttonEnterValue.textContent="Enter";
        buttonEnterDiv.appendChild(buttonEnterValue);
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

        const countSoloVolunteersInput = document.createElement("input");
        countSoloVolunteersInput.type="number";
        countSoloVolunteersInput.classList.add("countSoloVolunteersInput");
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

        const proba1 = document.createElement("label");
        proba1.textContent="proba";
        soloVolunteersViewDiv.appendChild(proba1);

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

        const countPairVolunteersInput = document.createElement("input");
        countPairVolunteersInput.type="number";
        countPairVolunteersInput.classList.add("countPairVolunteersInput");
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

        const proba2 = document.createElement("label");
        proba2.textContent="proba2";
        pairVolunteersViewDiv.appendChild(proba2);
    }
}