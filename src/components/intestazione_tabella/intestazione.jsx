import "./intestazione.css"
export default function IntestazioneTabella(
    {
        area,
        colonnaS,
        colonnaD,
        gruppi,
        domande
    }
) {
    return (
        <div style={{gridArea:area}}>
            <tr className="area">{area}</tr>
            <tr className="sottoIntestazione roundedStartEnd">
                {Object.keys(gruppi).map(_ => {
                    return <>
                        <td>{colonnaS}</td>
                        <td>{colonnaD}</td>
                    </>

                })}
            </tr>
            <tr className="sottoIntestazione">
                {Object.keys(gruppi).map(gruppo => {
                    return <>
                        <td>
                            {gruppi[gruppo].map(v => <div>{v}</div>)}
                        </td>
                        <td className="punteggio">
                            {domande.reduce((punteggio, domanda) => {
                                return gruppi[gruppo].find(v => v === domanda.id) ? punteggio += domanda.risposta : punteggio;
                            }, 0)}
                        </td>
                    </>
                })}
            </tr>
        </div>
    )
}