import Header from "./Header"
import lomo_vetado from './../assets/lomo_vetado.jpg'
import chuleta_vetada from './../assets/chuleta.jpg'

const Homeintranet = ()=>{
    return (
        <div className="container-fluid">
            <div className='contenedor-detalle'>
                <Header></Header>
                <div className='row titulo-detalle'>
                    <p>Hola Juan!</p>
                    <p>Listado de productos</p>
                </div>
                <hr></hr>
                <div className="row" style={{textAlign: 'right'}}>
                    <div className="col-lg-12 col-sm-12">
                        <button type="button" className="btn btn-primary btn-sm">Nuevo producto</button>
                    </div>
                </div>
                <div className='row contenedor-detalle-carrito pizza-carrito'>
                    <div className="col-lg-6 col-sm-12">
                            <img src={lomo_vetado} style={{width:'70px', padding: '10px'}}></img>
                            <span>Lomo Vetado</span>
                        </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="valores-carrito">
                            <div className="sacar-carro">
                                <button type="button" className="btn btn-danger btn-sm">Quitar</button>
                            </div>
                            <div className="agregar-carro">
                                <button type="button" className="btn btn-primary btn-sm">Editar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row contenedor-detalle-carrito pizza-carrito'>
                    <div className="col-lg-6 col-sm-12">
                            <img src={chuleta_vetada} style={{width:'70px', padding: '10px'}}></img>
                            <span>Lomo Vetado</span>
                        </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="valores-carrito">
                            <div className="sacar-carro">
                                <button type="button" className="btn btn-danger btn-sm">Quitar</button>
                            </div>
                            <div className="agregar-carro">
                                <button type="button" className="btn btn-primary btn-sm">Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homeintranet