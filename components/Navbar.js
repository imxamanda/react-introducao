import React from 'react'
import Cabecalho from './cabecalho'
import Rodape from './Rodape'

const Navbar = () => {
  return (
    <>
    <Cabecalho/>
    <div className='bg-secondary text-white py-3 text-center mb-3'>
    <h1>Página Inicial</h1>
    </div>
     <Rodape/>
    </>
  )
}

export default Navbar