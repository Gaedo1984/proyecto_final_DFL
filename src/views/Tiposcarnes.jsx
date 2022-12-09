import { useParams, useNavigate } from "react-router-dom"
import Context from "../context/context"
import { useContext, useEffect, useState } from "react"

import Header from './Header'

import banner from './../assets/banner.jpg'
import lomo_vetado from './../assets/lomo_vetado.jpg'
import tomahawk from './../assets/tomahawk.jpg'
import lomo_liso from './../assets/lomo_liso.jpg'
import asado_carnicero from './../assets/asado_carnicero.jpg'

const Tiposcarnes = ()=>{

    const {variedad} = useParams()
    const {carnes, value} = useContext(Context)

    const [tipos_carnes, setTiposcarnes] = useState([])
    const [infoFiltrada, setInfoFiltrada] = useState([]);
    const [valorBusqueda, setValorBusqueda] = useState("");
 
    const navigate = useNavigate()

    useEffect(()=>{
        filtraDatos();
    }, [valorBusqueda])


    useEffect(()=>{
        const tipos_carnes = carnes.filter((carne)=>carne.tipo === variedad)
        setTiposcarnes(tipos_carnes)
        setInfoFiltrada(tipos_carnes)
    }, [variedad])

    
    //Función que recibe los datos de búsqueda
    const filtraDatos = ()=>{
        
        //Aquí realizo el filtrado sobre toda la data descargada desde la API
        const filtrado = tipos_carnes.filter((datos)=>{
        const carne_busqueda = datos.name.toLowerCase()
        
                
        return carne_busqueda.includes(valorBusqueda.toLowerCase())

        })

        //Actualizo la información a mostrar
        setInfoFiltrada(filtrado)
    }

  
    const ver_descripcion = (id_carne) => navigate(`/detalle_carnes/${id_carne}`)

    return(
        <div className="container-fluid">
            <div className='contenedor-home'>
                <Header></Header>
                <div className="row">
                    <div className='titulo-home'>
                        Carne de {variedad}
                    </div>
                </div>
                <div className="row">
                    <div className="contenedor-buscador">
                        <form className="row g-3">
                            <div className="col-auto">
                                <label style={{fontWeight:'bold', fontSize:'17px', paddingBottom: '10px'}}>Buscador</label>
                                <input type="text" className="form-control" id="staticEmail2" onChange={(e)=> setValorBusqueda(e.target.value)}></input>
                            </div>
                        </form>
                    </div>
                </div>
                <hr></hr>
                <div className="row contenedor-tipocarnes">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                       
                       infoFiltrada.map((carne)=>{
                            return (
                                <div key={carne.id}>
                                    <span style={{fontSize:'17px', fontWeight:'bold'}} key={carne.id}>{carne.name}</span>
                                    <div className="card">
                                        <img src={carne.img_big} className="card-img-top" style={{width:'100%'}} alt="..."></img>
                                        <div className="card-body" style={{textAlign:'right'}}>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={()=>ver_descripcion(carne.id)}>Ver descripción</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        
                    } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiposcarnes