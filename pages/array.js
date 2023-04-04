import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Navbar from '../components/Navbar'

const array = () => {

  const carros = ['Opala', 'Classic', 'Civic', 'omega', 'Ka']

  /*const nome = 'Mandi'
  const idade = 20
  const telefone = '(61)99508-9163'
  const endereco = 'ABC'

  const pessoa = {nome: 'Mandi', idade:'20', telefone:'(61)99508-9163', endereco:'ABC'}*/
  return (
    <>
    <Navbar titulo="Array">
     <ol>
      {carros.map(item => (
        <li>{item}</li>
      ))}
      </ol>
      
      
    </Navbar>

    </>
  )
}

export default array