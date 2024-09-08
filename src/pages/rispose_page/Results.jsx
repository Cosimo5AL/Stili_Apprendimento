import { useContext, useEffect } from "react";
import staticContent from "../../data/static_content"
import { Context } from "../../App";
import IntestazioneTabella from "../../components/intestazione_tabella/intestazione";
import "./results.css"
import { useNavigate } from "react-router";

export default function ResultsPage() {
    const { AreeTabella } = staticContent();
    const { domande, setDomande } = useContext(Context)
    const navigate = useNavigate();

    useEffect(() => {        
        if (!(domande.length > 0) && (localStorage.getItem('risposte') === null)) navigate('/')
        else setDomande(JSON.parse(localStorage.getItem('risposte')))
    }, [])

    return (
        <div className="container_risultati">
            <IntestazioneTabella area={"Area_A"} colonnaS={"Affermazione N."} colonnaD={"Punteggio(Totale)"} gruppi={AreeTabella.areaA} domande={domande} />
            <IntestazioneTabella area={"Area_B"} colonnaS={"Affermazione N."} colonnaD={"Punteggio(Totale)"} gruppi={AreeTabella.areaB} domande={domande} />
            <IntestazioneTabella area={"Area_C"} colonnaS={"Affermazione N."} colonnaD={"Punteggio(Totale)"} gruppi={AreeTabella.areaC} domande={domande} />
        </div>
    )
}