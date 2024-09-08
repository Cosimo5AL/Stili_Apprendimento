import Domanda from "../components/domanda/Domanda";
import { Context, router } from "../App";
import { useContext, useEffect, useState } from "react";

export default function Homepage() {
    //---------- States ----------
    const { domande,setDomande ,initDomande, checkResponses, cantProceed } = useContext(Context)
    const [cantSubmit, setCantSubmit] = useState(true)

    useEffect(() => {
        setCantSubmit(cantProceed())
        console.log(cantSubmit);
    }, [domande])

    useEffect(() => {
        initDomande();
    }, [])
    // ---------- Page ----------
    return (
        <div className="projectRoot">
            <h1>Questionario stili di apprendimento</h1>
            <div className="domande_container">
                {domande.map((domanda) => {
                    return <Domanda domanda={domanda} setDomande={setDomande}/>;
                })}
            </div>
            <button
                id="submitQuestions"
                className="btnSubmit"
                onClick={() => {
                    localStorage.setItem("risposte",JSON.stringify(domande));
                    router.navigate("/results");
                }}
                disabled={cantSubmit}
            >
                Invia
            </button>
        </div>
    );
}
