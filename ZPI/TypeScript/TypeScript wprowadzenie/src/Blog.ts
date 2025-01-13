import { Artykul } from './Artykul';
import { Autor } from './Autor';

export class Blog {
  private _id: number;
  private _nazwa: string;
  private _autor: Autor;
  private _artykuly: Artykul[] = [];

  constructor(nazwa: string, autor: Autor) {
    if (!nazwa.trim()) throw new Error('Pole "nazwa" nie może być puste.');
    if (!autor) throw new Error('Pole "autor" musi być podane.');

    this._id = Math.floor(Math.random() * 10000); // Generowanie unikalnego ID
    this._nazwa = nazwa;
    this._autor = autor;
  }

  get nazwa(): string {
    return this._nazwa;
  }

  get autor(): Autor {
    return this._autor;
  }

  dodajArtykul(artykul: Artykul): void {
    this._artykuly.push(artykul);
  }

  pobierzTytulyArtykulow(): string[] {
    return this._artykuly.map((artykul) => artykul.tytul);
  }

  pobierzArtykul(tytul: string): Artykul | undefined {
    return this._artykuly.find((artykul) => artykul.tytul === tytul);
  }
}
