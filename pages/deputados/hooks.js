import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import { useEffect } from 'react';
import apiDeputados from '../../services/apiDeputados';

const hooks = () => {

    const [deputados, setDeputados] = useState([])

     useEffect(()=>{

      apiDeputados.get('/deputados').then(resultado=>{
       setDeputados(resultado.data.dados)

      })

     }, [])

  return (
    <Navbar titulo="Deputados">
     {deputados.map(item => (
        <p>{item.nome}</p>
      ))}
    </Navbar>
  )
}

export default hooks