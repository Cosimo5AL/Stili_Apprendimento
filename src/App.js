import { useEffect, useState } from "react";
import "./App.css";
import Domanda from "./components/domanda/Domanda";

function App() {
  //---------- States ----------
  const testiDomande = []; // array statico delle domande
  const [domande, setDomande] = useState([]); // array che gestisce lo stato della pagina


  /* 
    metodo di react che, in caso nelle quadre ci siano degli stati, 
    rilancia il codice al suo interno ogni volta che questi cambiano valore. 
    Se è vuoto, come in questo caso, avviene solo al caricamento della pagina
  */

  useEffect(() => { 
    testiDomande.map((testo,index)=>{
      setDomande((v) => [
        ...v, // spread operator -> permette di generare un nuovo array ma mantenendo tutto quello che c'era 
        { id: index, testo: testo, risposta: "" },
      ]);
    })
  }, []); 

  //---------- Page ----------
  return (
    <div className="projectRoot">
      <h1>Questa è la root</h1>
      <div className="domande_container">
        {domande.map((domanda) => {
          return <Domanda domanda={domanda} />;
        })}
      </div>
      <button onClick={() => console.log(domande)}>Debug</button>
    </div>
  );
}

export default App;
