import Header from './Header'
import CarritoLista from './CarritoLista.jsx'
import lomo_vetado from './../assets/lomo_vetado.jpg'
import chuleta_vetada from './../assets/chuleta.jpg'

import { useContext } from "react"
import Context from "../context/context.js"


const Carrito = ()=>{

    const { carrito, agregarAlCarrito, removerDelCarrito, totalCarrito } = useContext(Context)

    return(
        <div className="container-fluid">
            
            <div className='contenedor-carrito'>
                <Header></Header>
                <div className="row">
                    <div className='titulo-home'>
                        Detalle del pedido
                    </div>
                </div>
                {
                    carrito.length !== 0 ?
                    <CarritoLista carrito={carrito} agregarAlCarrito={agregarAlCarrito} removerDelCarrito={removerDelCarrito} totalCarrito={totalCarrito}></CarritoLista>
                    : <p>No hay elementos</p>
                }
                
            </div>
        </div>
    )
}

export default Carrito