import { useParams, useNavigate } from "react-router-dom"
import Header from './Header'

import banner from './../assets/banner.jpg'
import lomo_vetado from './../assets/lomo_vetado.jpg'
import tomahawk from './../assets/tomahawk.jpg'
import lomo_liso from './../assets/lomo_liso.jpg'
import asado_carnicero from './../assets/asado_carnicero.jpg'

const Tiposcarnes = ()=>{

    const {variedad} = useParams()
    const navigate = useNavigate()

    //Aquí tiene que ir el ID de la carne
    var id_carne = 1;
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
                        <div className="col">
                            <span style={{fontSize:'17px', fontWeight:'bold'}}>Lomo Vetado</span>
                            <div className="card">
                                <img src={lomo_vetado} class="card-img-top" style={{width:'100%'}} alt="..."></img>
                                <div className="card-body" style={{textAlign:'right'}}>
                                    <button type="button" class="btn btn-danger btn-sm" onClick={()=>ver_descripcion(id_carne)}>Ver descripción</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <span style={{fontSize:'17px', fontWeight:'bold'}}>Tomahawk</span>
                            <div className="card">
                                <img src={tomahawk} class="card-img-top" style={{width:'100%'}} alt="..."></img>
                                <div className="card-body" style={{textAlign:'right'}}>
                                    <button type="button" class="btn btn-danger btn-sm" onClick={()=>ver_descripcion(id_carne)}>Ver descripción</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <span style={{fontSize:'17px', fontWeight:'bold'}}>Lomo Liso</span>
                            <div className="card">
                                <img src={lomo_liso} class="card-img-top" style={{width:'100%'}} alt="..."></img>
                                <div className="card-body" style={{textAlign:'right'}}>
                                    <button type="button" class="btn btn-danger btn-sm" onClick={()=>ver_descripcion(id_carne)}>Ver descripción</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <span style={{fontSize:'17px', fontWeight:'bold'}}>Asado Carnicero</span>
                            <div className="card">
                                <img src={asado_carnicero} class="card-img-top" alt="..."></img>
                                <div className="card-body" style={{textAlign:'right'}}>
                                    <button type="button" class="btn btn-danger btn-sm" onClick={()=>ver_descripcion(id_carne)}>Ver descripción</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiposcarnes