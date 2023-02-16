import React from 'react'
import Historia from './Historias/Historia'
import BarraLateral from './Menu/BarraLateral'
import BarraSuperior from './Menu/BarraSuperior'
import Lateral from './Menu/Lateral'
import Publicaciones from './Publicaciones/Publicaciones'

const Home = () => {
  return (
    <>
      <BarraSuperior/>
      <BarraLateral/>
      <Historia/>
      <Publicaciones/>
    </>
  )
}

export default Home