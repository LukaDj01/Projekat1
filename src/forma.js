export class Forma{
    constructor(host){
        this.host=host;
    }

    crtajUnos(){
        const divUnos = document.createElement("div");
        divUnos.classList.add("divUnos");
        this.host.appendChild(divUnos);

        // Jedinstveno ime
        const jImeDiv = document.createElement("div");
        jImeDiv.classList.add("jImeDiv");
        divUnos.appendChild(jImeDiv);

        const jImeLabela = document.createElement("label");
        jImeLabela.classList.add("jImeLabela");
        jImeLabela.textContent="Jedinstveno ime: ";
        jImeDiv.appendChild(jImeLabela);

        const jImeVrednost = document.createElement("input");
        jImeVrednost.classList.add("jImeVrednost");
        jImeDiv.appendChild(jImeVrednost);

        // Ime
        const imeDiv = document.createElement("div");
        imeDiv.classList.add("imeDiv");
        divUnos.appendChild(imeDiv);

        const imeLabela = document.createElement("label");
        imeLabela.classList.add("imeLabela");
        imeLabela.textContent="Ime: ";
        imeDiv.appendChild(imeLabela);

        const imeVrednost = document.createElement("input");
        imeVrednost.classList.add("imeVrednost");
        imeDiv.appendChild(imeVrednost);

        // Prezime
        const prezimeDiv = document.createElement("div");
        prezimeDiv.classList.add("prezimeDiv");
        divUnos.appendChild(prezimeDiv);

        const prezimeLabela = document.createElement("label");
        prezimeLabela.classList.add("prezimeLabela");
        prezimeLabela.textContent="Prezime: ";
        prezimeDiv.appendChild(prezimeLabela);

        const prezimeVrednost = document.createElement("input");
        prezimeVrednost.classList.add("prezimeVrednost");
        prezimeDiv.appendChild(prezimeVrednost);

        // Pol
        const polDiv = document.createElement("div");
        polDiv.classList.add("polDiv");
        divUnos.appendChild(polDiv);

        // pol labela
        const polLabelaDiv = document.createElement("div");
        polLabelaDiv.classList.add("polLabelaDiv");
        polDiv.appendChild(polLabelaDiv);

        const polLabela = document.createElement("label");
        polLabela.classList.add("polLabela");
        polLabela.textContent="Pol: ";
        polLabelaDiv.appendChild(polLabela);

        // pol M i Ž
        const polMiŽDiv = document.createElement("div");
        polMiŽDiv.classList.add("polMiŽDiv");
        polDiv.appendChild(polMiŽDiv);
        
        // pol M
        const polMDiv = document.createElement("div");
        polMDiv.classList.add("polMDiv");
        polMiŽDiv.appendChild(polMDiv);

        const polMLabela = document.createElement("label");
        polMLabela.classList.add("polMLabela");
        polMLabela.textContent="M ";
        polMDiv.appendChild(polMLabela);

        const polMVrednost = document.createElement("input");
        polMVrednost.type="radio";
        polMVrednost.checked="checked";
        polMVrednost.name="pol";
        polMVrednost.classList.add("polMVrednost");
        polMDiv.appendChild(polMVrednost);
        
        // pol Ž
        const polŽDiv = document.createElement("div");
        polŽDiv.classList.add("polŽDiv");
        polMiŽDiv.appendChild(polŽDiv);

        const polŽLabela = document.createElement("label");
        polŽLabela.classList.add("polŽLabela");
        polŽLabela.textContent="Ž ";
        polŽDiv.appendChild(polŽLabela);

        const polŽVrednost = document.createElement("input");
        polŽVrednost.type="radio";
        polŽVrednost.name="pol";
        polŽVrednost.classList.add("polŽVrednost");
        polŽDiv.appendChild(polŽVrednost);

        // Dugme
        const dugmeDiv = document.createElement("div");
        dugmeDiv.classList.add("dugmeDiv");
        divUnos.appendChild(dugmeDiv);

        const dugmeVrednost = document.createElement("button");
        dugmeVrednost.classList.add("dugmeVrednost");
        dugmeVrednost.textContent="Unesi";
        dugmeDiv.appendChild(dugmeVrednost);
    }

    crtajLopte(){
        const divLopte = document.createElement("div");
        divLopte.classList.add("divLopte");
        this.host.appendChild(divLopte);

        // prva
        const prvaLoptaDiv = document.createElement("div");
        prvaLoptaDiv.classList.add("prvaLoptaDiv");
        divLopte.appendChild(prvaLoptaDiv);

        const prvaLoptaLabela = document.createElement("label");
        prvaLoptaLabela.classList.add("prvaLoptaLabela");
        prvaLoptaLabela.textContent="7";
        prvaLoptaDiv.appendChild(prvaLoptaLabela);

        // druga
        const drugaLoptaDiv = document.createElement("div");
        drugaLoptaDiv.classList.add("drugaLoptaDiv");
        divLopte.appendChild(drugaLoptaDiv);

        const drugaLoptaLabela = document.createElement("label");
        drugaLoptaLabela.classList.add("drugaLoptaLabela");
        drugaLoptaLabela.textContent="4";
        drugaLoptaDiv.appendChild(drugaLoptaLabela);
    }
}