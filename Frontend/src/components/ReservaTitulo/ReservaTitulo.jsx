import React from "react"
import "./reserva-titulo.scoped.css"

const ReservaTitulo = (props) => {
    const {titulo} = props
    return (
       <h2 className="tituloReserva">{titulo}</h2>     
    )
}

export default ReservaTitulo
//==========