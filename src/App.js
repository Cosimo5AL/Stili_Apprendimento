import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import { createContext, useState } from "react";
import staticContent from "./data/static_content"
import ResultsPage from "./pages/rispose_page/Results";
import DBManager from "./service/dbManager";
import LoginPage from "./pages/loginPage/loginPage";
import PaginaDocente from "./pages/paginaDocente/paginaDocente";

//settings di navigazione del router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/results",
    element: <ResultsPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/paginaDocente",
    element: <PaginaDocente/>
  }
])

// creiamo il nostro custom hook( per convenzione inizia con use ) che servirà a creare l'oggetto con dentro tutto il necessario
export const useData = () => {
  const { testiDomande } = staticContent(); // array statico delle domande
  const [domande, setDomande] = useState([]); // array che gestisce lo stato della pagina

  const initDomande = () => {
    testiDomande.map((testo, index) => {
      setDomande(v => [...v, { id: index, testo: testo, risposta: null}])
    })
  }

  //output : [id,id,id,id] (id = id della domanda senza risposta)
  const checkResponses = () => domande.reduce((nonValid,domanda) => (domanda.risposta === null) ? [...nonValid,domanda] : [...nonValid],[])

  const cantProceed = () => checkResponses().length > 0

  const dbManager = DBManager();

  return { domande, setDomande, initDomande, checkResponses, cantProceed ,dbManager}
}
//creiamo il context da utilizzare nelle altre pagine
export const Context = createContext()

//creiamo il provider del context che di fatto ci renderà disponibile il context in tutte le pagine
export const DataProvider = ({ children }) => {
  //instanziamo data
  const data = useData()
  //la passiamo come value al provider
  return <Context.Provider value={data}>{children}</Context.Provider>
}

export default function App() {
  /* 
    metodo di react che, in caso nelle quadre ci siano degli stati, 
    rilancia il codice al suo interno ogni volta che questi cambiano valore. 
    Se è vuoto, come in questo caso, avviene solo al caricamento della pagina
    useEffect(()=>{},[])
  */
  return (
    <>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </>
  );
}
