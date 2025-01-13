import { Blog } from "./Blog";
import { Artykul } from "./Artykul";
import { Autor } from "./Autor";
import { Komenatrz } from "./Komenatrz";

const autor = new Autor("Jan", "Kowalski", "jan.kowalski@example.com");
const blog = new Blog("Mój blog", autor);

const artykul = new Artykul("Pierwszy artykul", "To jest tresc artykulu");
const komentarz = new Komenatrz("Swietny artykul","Uzytkownik1");

artykul.dodajKomenatrz(komentarz);
blog.dodajArtykul(artykul);

console.log(blog.pobierzTytulyArtykulow());