import { Komenatrz } from "./Komenatrz";

export class Artykul {
    private _id: number;
    private _tytul: string;
    private _tresc: string;
    private _dataUtworzenia: Date;
    private _komenatrze: Komenatrz[] = [];

    constructor(tytul: string, tresc: string){
        if(!tytul.trim()) throw new Error("Pole tytul nie mozebyc puste");

        this._id=Math.floor(Math.random()*10000);
        this._tytul=tytul;
        this._tresc=tresc;
        this._dataUtworzenia = new Date();
    }

    get tytul(): string{
        return this._tytul;
    }
    get tresc(): string{
        return this._tresc;
    }

    dodajKomenatrz(komentarz: Komenatrz): void{
        this._komenatrze.push(komentarz);
    }

    pobierzKomenatarze(): Komenatrz[]{
        return this._komenatrze;
    }
}