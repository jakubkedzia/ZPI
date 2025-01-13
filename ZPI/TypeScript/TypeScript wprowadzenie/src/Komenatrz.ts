export class Komenatrz{
    private _tresc: string;
    private _data: Date;
    private _odpowiedzi: Komenatrz [] = [];
    private _nick: string;


    constructor(tresc: string, nick: string){
        this._tresc=tresc;
        this._nick=nick;
        this._data = new Date();
    }

    get tresc():string{
        return this._tresc;
    }
    get nick():string{
        return this._nick;
    }
    get data():Date{
        return this._data;
    }

    dodajOdpowiedz(odpowiedz: Komenatrz): void{
        this._odpowiedzi.push(odpowiedz);
    }

    pobierzOdpowiedz(): Komenatrz[]{
        return this._odpowiedzi;
    }
}

