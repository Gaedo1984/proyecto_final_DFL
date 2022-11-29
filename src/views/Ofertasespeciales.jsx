import { useParams, useNavigate } from "react-router-dom"
import Header from './Header'

import banner from './../assets/banner.jpg'
import chuleta_vetada from './../assets/chuleta.jpg'
import tomahawk from './../assets/tomahawk.jpg'
import lomo_liso from './../assets/lomo_liso.jpg'
import asado_carnicero from './../assets/asado_carnicero.jpg'
import filete_cerdo from './../assets/filete_cerdo.jpg'

const Ofertasespeciales = ()=>{

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
                            Ofertas especiales
                        </div>
                    </div>
                    <div className="row contenedor-tipocarnes">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <span style={{fontSize:'17px', fontWeight:'bold'}}>Chuleta Vetada</span>
                                <div className="card">
                                    <img src={chuleta_vetada} class="card-img-top" style={{width:'100%'}} alt="..."></img>
                                    <div className="card-body" style={{textAlign:'right'}}>
                                        <button type="button" class="btn btn-danger btn-sm" onClick={()=>ver_descripcion(id_carne)}>Ver descripción</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <span style={{fontSize:'17px', fontWeight:'bold'}}>Filete de Cerdo</span>
                                <div className="card">
                                    <img src={filete_cerdo} class="card-img-top" style={{width:'100%'}} alt="..."></img>
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

export default Ofertasespeciales