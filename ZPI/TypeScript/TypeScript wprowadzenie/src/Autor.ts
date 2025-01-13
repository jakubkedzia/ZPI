export class Autor{
    private _id:number;
    private _imie: string;
    private _nazwisko: string;
    private _email: string;

    constructor(imie: string, nazwisko: string, email: string){
        if(!imie.trim()) throw new Error("Pole imie nie moze byc puste");
        if(!nazwisko.trim()) throw new Error("Pole nazwisko nie moze byc puste");
        if(!this.isValidEmail(email)) throw new Error("Nieprawidłowy adres email");
        
        this._id = Math.floor(Math.random()*1000);
        this._imie=imie;
        this._nazwisko=nazwisko;
        this._email=email;
    }

    private isValidEmail(email: string){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    get imie(): string{
        return this._imie;
    }
    get nazwisko(): string{
        return this._nazwisko;
    }
    get email(): string{
        return this._email;
    }
}

