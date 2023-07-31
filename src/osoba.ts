export class Osoba{
    jedinstvenoIme: string;
    ime: string;
    prezime: string;
    pol: string;

    constructor(jIme:string, i: string, pr:string, pol:string){
        this.jedinstvenoIme=jIme;
        this.ime=i;
        this.prezime=pr;
        this.pol=pol;
    }

}