import './App.css';
import c1 from "./img/c1.jpg";
import c2 from "./img/c2.jpg";
import c3 from "./img/c3.jpg";
import c4 from "./img/c4.jpg";
import c5 from "./img/c5.jpg";
import f1 from "./img/f1.jpg";
import f2 from "./img/f2.jpg";
import f3 from "./img/f3.jpg";
import f4 from "./img/f4.jpg";
import f5 from "./img/f5.jpg";
import z1 from "./img/z1.jpg";
import z2 from "./img/z2.jpg";
import z3 from "./img/z3.jpg";
import z4 from "./img/z4.jpg";
import z5 from "./img/z5.jpg";
import fioletowy from "./img/fioletowy.jpg";
import czerwony from "./img/czerwony.jpg";
import zloty from "./img/zloty.jpg";
import wszystkie from "./img/wszystkie.jpg";
import LakierCell from './lakierCell';
import { useState } from 'react';

const produkty = [{plik:f1,odcien:"fioletowy",nazwa:"No Risk No story",cena:27.29,reklama:"Oszczedzasz 33%"}, 
{plik:f2,odcien:"fioletowy",nazwa:"Moony Whispers",cena:38.99,reklama:"Mój wybór Kasia Kot"},
{plik:f3,odcien:"fioletowy",nazwa:"Midnight Love",cena:27.99,reklama:"XMAS Trend"},
{plik:f4,odcien:"fioletowy",nazwa:"New Bridge",cena:32.99,reklama:"Efekt Flash"},
{plik:f5,odcien:"fioletowy",nazwa:"Top Glow Violet",cena:29.99,reklama:"oszczedzasz 26% "},
{plik:c1,odcien:"czerwony",nazwa:"Alizee",cena:27.29,reklama:"Oszczędzasz 31%"},
{plik:c2,odcien:"czerwony",nazwa:"Mysterious Tale",cena:32.99,reklama:"GET THE LOOK"},
{plik:c3,odcien:"czerwony",nazwa:"Aloha Mood",cena:38.99,reklama:"Mój wybór - Sara James"},
{plik:c4,odcien:"czerwony",nazwa:"Fiery Flamenco",cena:33.99,reklama:"XMAS Trend"},
{plik:c5,odcien:"czerwony",nazwa:"Pure Currant",cena:4.99,reklama:"PROMOCJA"},
{plik:z1,odcien:"złoty",nazwa:"Top Glow Gold",cena:29.99,reklama:"XMAS Trend"},
{plik:z2,odcien:"złoty",nazwa:"Sparkling Kiss",cena:27.99,reklama:"XMAS Trend"},
{plik:z3,odcien:"złoty",nazwa:"g-INCREDIBLE",cena:25.99,reklama:"MANI & PEDI w 20 min!"},
{plik:z4,odcien:"złoty",nazwa:"White Sparkle",cena:9.99,reklama:"Oszczedzasz 76%"},
{plik:z5,odcien:"złoty",nazwa:"Glow Twinkle",cena:39.99,reklama:"XMAS Trend"}];


function App() {
  const [kolor, setKolor] = useState("wszystko");
  const [koszyk, setKoszyk] = useState(0);

  return (
    <div className="App">
        <h1 style={{textAlign:'center'}}>grafiki i inspiracja ze strony: NEONAIL.PL</h1>
        <div id="lakierLista">
        <p style={{textAlign:'center', marginBottom:0}}>wybierz odcień</p>
        <p id="koszykP">W koszyku: {koszyk}</p>
        <button className='wyborKolor'><img src={fioletowy} onClick={() => { setKolor("fioletowy"); }}/></button>
        <button className='wyborKolor'><img src={czerwony} onClick={() => { setKolor("czerwony"); }}/></button>
        <button className='wyborKolor'><img src={zloty} onClick={() => { setKolor("złoty"); }}/></button>
        <button className='wyborKolor'><img src={wszystkie} onClick={() => { setKolor("wszystko"); }}/></button>
        {produkty.map((p) => <div>
          {p.odcien === kolor && <LakierCell produkt={p} koszyk={koszyk} setKoszyk={setKoszyk}/>}
          {kolor === "wszystko" && <LakierCell produkt={p} koszyk={koszyk} setKoszyk={setKoszyk}/>}
        </div>)}
      </div>
    </div>
  );
}

export default App;
