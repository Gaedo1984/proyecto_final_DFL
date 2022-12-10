import { useNavigate } from "react-router-dom"
import Context from "../context/context.js"
import { useContext, useEffect, useState } from "react"
import ScrollToTop from "react-scroll-to-top";

const SalesAdmin = () => {
    const navigate = useNavigate()

    const { carnes, handleOfertas, cambiarEstadoOferta, actAdmin } = useContext(Context)

    const [infoFiltrada, setInfoFiltrada] = useState([]);
    const [valorBusqueda, setValorBusqueda] = useState("");

    useEffect(()=>{
        filtraDatos();
    }, [valorBusqueda])


    //Función que recibe los datos de búsqueda
    const filtraDatos = ()=>{
        
        //Aquí realizo el filtrado sobre toda la data descargada desde la API
        const filtrado = carnes.filter((datos)=>{
        const carne_busqueda = datos.name.toLowerCase()
        
                
        return carne_busqueda.includes(valorBusqueda.toLowerCase())

        })

        //Actualizo la información a mostrar
        setInfoFiltrada(filtrado)
    }


    const logout = () => {
        localStorage.removeItem('token')
        actAdmin(false)
        navigate('/')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const saleUpdate = (carne, estado, id) => {
        console.log('estado al cambiar' + estado);
        handleOfertas(carne, saleUpdate)
        cambiarEstadoOferta(id, estado)


    }

    return (
        <main>
            <ScrollToTop smooth className="scroll-top"/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Administración de ofertas</h2>
                    </div>
                    <div className="col alinear">
                        <button onClick={() => logout()}>Logout</button>
                    </div>
                </div>
                <div className='contenedor-home'>
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
                                infoFiltrada.map((carne,index) => {
                                    return (
                                        <div className="col" key={carne.id}>
                                            <span style={{ fontSize: '17px', fontWeight: 'bold' }} key={carne.id}>{carne.name}</span>
                                            <div className="card">
                                                <img src={carne.img_big} className="card-img-top" style={{ width: '100%' }} alt="..."></img>
                                                <div className="card-body" style={{ textAlign: 'right' }}>
                                                    <select name="sale-state" defaultValue={carne.oferta} onChange={(e) => saleUpdate(carne, e.target.value,carne.id)} id="">
                                                        <option value="si">Si</option>
                                                        <option value="no">No</option>
                                                    </select>
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
        </main>
    )
}

export default SalesAdmin
