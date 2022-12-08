import { useNavigate } from "react-router-dom"
import Context from "../context/context.js"
import { useContext, useEffect } from "react"
import ScrollToTop from "react-scroll-to-top";

const SalesAdmin = () => {
    const navigate = useNavigate()

    const { carnes, handleOfertas, cambiarEstadoOferta, actAdmin } = useContext(Context)

    const logout = () => {
        localStorage.removeItem('token')
        actAdmin(false)
        navigate('/')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const saleUpdate = (carne, estado, index) => {
        console.log('estado al cambiar' + estado);
        handleOfertas(carne, saleUpdate)
        cambiarEstadoOferta(index, estado)


    }

    return (
        <main>
            <ScrollToTop smooth className="scroll-top"/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Administración de ofertas</h1>
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
                                    <input type="text" className="form-control" id="staticEmail2"></input>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-3">Buscar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row contenedor-tipocarnes">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                carnes.map((carne,index) => {
                                    return (
                                        <div className="col" key={carne.id}>
                                            <span style={{ fontSize: '17px', fontWeight: 'bold' }} key={carne.id}>{carne.name}</span>
                                            <div className="card">
                                                <img src={carne.img_big} className="card-img-top" style={{ width: '100%' }} alt="..."></img>
                                                <div className="card-body" style={{ textAlign: 'right' }}>
                                                    <select name="sale-state" defaultValue={carne.oferta} onChange={(e) => saleUpdate(carne, e.target.value,index)} id="">
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