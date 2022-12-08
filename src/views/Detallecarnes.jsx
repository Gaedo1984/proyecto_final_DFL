import { useParams, useNavigate } from "react-router-dom"
import Context from "../context/context"
import { useContext, useEffect, useState } from "react"

import banner from './../assets/banner.jpg'
import tomahawk from './../assets/tomahawk.jpg'
import Header from './Header'

const Detallecarnes = ()=>{

    const {id_carne} = useParams()
    const {carnes, agregarAlCarrito} = useContext(Context)

    const [detalle_carnes, setTiposcarnes] = useState({price_oferta: 0, price_normal: 0})
    

    useEffect(()=>{
        const detalle_carnes = carnes.filter((carne)=>carne.id === id_carne)
        setTiposcarnes(detalle_carnes[0])
    }, [])

    return(
        <div className="container-fluid">
            <div className='contenedor-detalle'>
                <Header></Header>
                <div className='row titulo-detalle'>
                    <p>{detalle_carnes.name}</p>
                </div>
                <div className='row contenedor-desc'>
                    <div className='col-sm-12 col-lg-3'>
                        <div className="card" style={{width:'19rem'}}>
                            <img src={detalle_carnes.img_big} className="card-img-top" alt="..." style={{width:'300px'}}></img>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-5'>
                        <div className='row desc-detalle'>
                            <p><strong>Descripción</strong></p>
                            <p>
                                {detalle_carnes.desc}
                            </p>
                            <br></br>
                            <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
                                {
                                    detalle_carnes.oferta == 'si' ?
                                    <div style={{fontSize: '20px'}}>
                                        <div style={{textDecoration: 'line-through'}}><strong>Precio Normal: </strong>${detalle_carnes.price_normal.toLocaleString("en").replace(",",".")}</div>
                                        <br></br>
                                        <strong>Precio Oferta: </strong>${detalle_carnes.price_oferta.toLocaleString("en").replace(",",".")}
                                    </div>
                                    :
                                    <div style={{fontSize: '20px'}}>
                                        <strong>Precio: </strong>${detalle_carnes.price_normal.toLocaleString("en").replace(",",".")}
                                    </div>
                                }
                                
                            </div>
                            <button type="button" className="btn btn-success" onClick={()=> agregarAlCarrito(detalle_carnes)}>Agregar al carro</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detallecarnes