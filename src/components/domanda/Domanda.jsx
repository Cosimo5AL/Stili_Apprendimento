import { useState } from 'react'
import './domanda.css'
const Domanda = ({
    domanda,
    setDomande,
}) => {
    const [valid, setValid] = useState(domanda.valid)

    const handleChange = (value) => {
        setValid(true)
        setDomande( domande => domande.map(dom => {
            if(dom.id === domanda.id) return {...dom,risposta:value}
            else return dom
        }))
    }

    return (
        <div className={`container_domanda ${!valid ? 'notValid' : null}`} id={domanda.id} key={domanda.id}>
            <h3><span>{domanda.id + 1}.</span>{domanda.testo}</h3>
            {!valid && <p className='mandatory'>Risposta obbligatoria</p>}
            <div className='elenco_risposte'>
                <label><input type="radio" name={domanda.id} onClick={() => handleChange(0)} />Per niente</label>
                <label><input type="radio" name={domanda.id} onClick={() => handleChange(1)} />Poco</label>
                <label><input type="radio" name={domanda.id} onClick={() => handleChange(2)} />Abbastanza</label>
                <label><input type="radio" name={domanda.id} onClick={() => handleChange(3)} />Molto</label>
            </div>
        </div>
    )
}

export default Domanda