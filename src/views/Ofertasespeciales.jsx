import { useParams, useNavigate } from "react-router-dom"
import Context from "../context/context"
import { useContext, useEffect, useState } from "react"


import Header from './Header'

const Ofertasespeciales = () => {

    const { carnes, ofertas, guardarOfertas, value } = useContext(Context)

    const [ofertasCarnes, setOfertascarnes] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const carnesOferta = carnes.filter((carne) => carne.oferta === 'si')
        guardarOfertas(carnesOferta)
        setOfertascarnes(ofertas)
    }, [ofertasCarnes])


    //Aquí tiene que ir el ID de la carne
    const ver_descripcion = (id_carne) => navigate(`/detalle_carnes/${id_carne}`)

    return (
        <div className="container-fluid">
            <div className='contenedor-home'>
                <Header></Header>
                <div className="row">
                    <div className='titulo-home'>
                        Ofertas especiales
                    </div>
                </div>
                <div className="row">
                    <div className="contenedor-buscador">
                        <form className="row g-3">
                            <div className="col-auto">
                                <input type="text" className="form-control" id="staticEmail2" onChange={(e)=> setValue(e.target.value)}></input>
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
                            ofertasCarnes.map((carne) => {
                                return (
                                    <div className="col" key={carne.id}>
                                        <span style={{ fontSize: '17px', fontWeight: 'bold' }} key={carne.id}>{carne.name}</span>
                                        <div className="card">
                                            <img src={carne.img_big} className="card-img-top" style={{ width: '100%' }} alt="..."></img>
                                            <div className="card-body" style={{ textAlign: 'right' }}>
                                                <button type="button" className="btn btn-danger btn-sm" onClick={() => ver_descripcion(carne.id)}>Ver descripción</button>
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

export default Ofertasespeciales