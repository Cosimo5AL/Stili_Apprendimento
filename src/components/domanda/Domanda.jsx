import './domanda.css'
const Domanda = ({
    domanda
}) => {
    return (
        <div className='container_domanda' id={domanda.id} key={domanda.id}>
            <h2>{ domanda.testo }</h2>
            <div className='elenco_risposte'>
                <label><input type="radio" name={domanda.id} onClick={() => domanda.risposta='Per niente'}/>Per niente</label>
                <label><input type="radio" name={domanda.id} onClick={() => domanda.risposta='Poco'}/>Poco</label>
                <label><input type="radio" name={domanda.id} onClick={() => domanda.risposta='Abbastanza'}/>Abbastanza</label>
                <label><input type="radio" name={domanda.id} onClick={() => domanda.risposta='Molto'}/>Molto</label>
            </div>
        </div>
    )
}

export default Domanda