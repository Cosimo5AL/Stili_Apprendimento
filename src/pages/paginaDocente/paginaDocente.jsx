import React, { useState, useEffect, useContext } from 'react';
import DBManager from '../../service/dbManager';

const PaginaDocente = () => {
    const dbManager = DBManager()
    const [data,setData] = useState([])

    useEffect(() => {
        dbManager.getCollection('classi/*/*',(v) => console.log(v));
    }, [])

    return(
        <button onClick={()=>dbManager.setCollection('email','sezA','[1,2,3]')}>dummy data</button>
    )
};

export default PaginaDocente;