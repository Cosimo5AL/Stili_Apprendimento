import Domanda from "../components/domanda/Domanda";
import { Context, router } from "../App";
import { useContext, useEffect, useState } from "react";

export default function Homepage() {
    //---------- States ----------
    const { domande, setDomande, initDomande, cantProceed, dbManager } = useContext(Context)
    const [cantSubmit, setCantSubmit] = useState(true)
    const [personalData, setPersonalData] = useState({ email: "", sezione: "" })

    const isPersonalDataNull = () => (personalData.email === "") || (personalData.sezione === "")

    useEffect(() => {
        setCantSubmit(cantProceed() || isPersonalDataNull())
        console.log(cantSubmit);
    }, [domande, personalData])

    useEffect(() => {
        initDomande();
    }, [])
    // ---------- Page ----------
    return (
        <div className="projectRoot">
            <button onClick={() => router.navigate('/login')}>Login Docente</button>
            <h1>Questionario stili di apprendimento</h1>
            <div className="personalDataInput">
                <label htmlFor="emailInput" className="dataInputField">
                    Email:
                    <input type="email" id="emailInput" name="emailInput" placeholder="Inserisci la mail qui" onChange={(e) => setPersonalData(v => v = { ...v, email: e.target.value })} />
                </label>
                <label htmlFor="classInput" className="dataInputField">
                    Sezione:
                    <input type="text" id="classInput" name="classInput" placeholder="Inserisci la sezione qui" onChange={(e) => setPersonalData(v => v = { ...v, sezione: e.target.value })} />
                </label>
            </div>
            <div className="domande_container">
                {domande.map((domanda) => {
                    return <Domanda domanda={domanda} setDomande={setDomande} />;
                })}
            </div>
            <button
                id="submitQuestions"
                className="btnSubmit"
                onClick={() => {
                    dbManager.setCollection({
                        email: personalData.email,
                        sezione: personalData.sezione,
                        domande: domande
                    })
                    router.navigate("/results");
                }}
                disabled={cantSubmit}
            >
                Invia
            </button>
        </div>
    );
}
