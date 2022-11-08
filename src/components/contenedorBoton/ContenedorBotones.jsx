import React from 'react'
import Boton from '../boton/Boton'
import './contenedorBotones.css'

const ContenedorBotones = () => {

    const elementos = [
        { id: 1, enlace: "https://meet.google.com/uoh-ftfo-nso", nombre: "Meet del curso" },
        { id: 2, enlace: "https://forms.gle/HtJHsx6TsR135Jai6", nombre: "Presentismo" },
        { id: 3, enlace: "https://github.com/DevJumpProf/comision22809", nombre: "Repositorio de Github" },
        { id: 4, enlace: "https://drive.google.com/drive/u/0/folders/1XmCDBtS5YLS0OLWzMGBgpM5QYYnXe_9X", nombre: "Drive del curso" },
        { id: 5, enlace: "https://www.youtube.com/playlist?list=PL9FDV61UoWvLA8ctDSA4hl74jy9kZhsUz", nombre: "Clases grabadas" },
        { id: 6, enlace: "https://aulasvirtuales.bue.edu.ar/", nombre: "Aula Virtual" }
    ]

    return (
        <div className='containerbuttons'>
            {elementos.map(elemento => <Boton key={elemento.id} enlace={elemento.enlace} nombre={elemento.nombre} />)}
        </div>
    )
}

export default ContenedorBotones