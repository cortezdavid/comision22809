import React from 'react'
import './boton.css'

const Boton = (props) => {

    const { id, enlace, nombre } = props

    return (
        <a key={id} href={enlace} target="_blank" rel="noopener noreferrer">{nombre}</a>
    )
}

export default Boton
