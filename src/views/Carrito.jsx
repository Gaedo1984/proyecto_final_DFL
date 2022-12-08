import Header from '../components/Header.jsx'
import lomo_vetado from './../assets/lomo_vetado.jpg'
import chuleta_vetada from './../assets/chuleta.jpg'

const Carrito = ()=>{
    return(
        <div className="container-fluid">
            <div className='contenedor-carrito'>
                <Header></Header>
                <div className="row">
                    <div className='titulo-home'>
                        Detalle del pedido
                    </div>
                </div>
                <div className='row contenedor-detalle-carrito pizza-carrito'>
                    <div className="col-lg-6 col-sm-12">
                        <img src={lomo_vetado} style={{width:'70px', padding: '10px'}}></img>
                        <span>Lomo Vetado</span>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="valores-carrito">
                            <div className="precio-carro">$14.000</div>
                            <div className="sacar-carro">
                                <button type="button" className="btn btn-danger btn-sm" style={{width:'30px'}}>-</button>
                            </div>
                            <div className="cantidad-productos">
                                1
                            </div>
                            <div className="agregar-carro">
                                <button type="button" className="btn btn-primary btn-sm" style={{width:'30px'}}>+</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <img src={chuleta_vetada} style={{width:'70px', padding: '10px'}}></img>
                        <span>Chuleta Vetada</span>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="valores-carrito">
                            <div className="precio-carro">$23.000</div>
                            <div className="sacar-carro">
                                <button type="button" className="btn btn-danger btn-sm" style={{width:'30px'}}>-</button>
                            </div>
                            <div className="cantidad-productos">
                                1
                            </div>
                            <div className="agregar-carro">
                                <button type="button" className="btn btn-primary btn-sm" style={{width:'30px'}}>+</button>
                            </div>
                        </div>
                    </div>
                    <hr style={{width: '94%', marginLeft: '20px'}}></hr>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="tot-final-carrito">
                        Total: $37.000
                        </div>
                        <div className="btn-pagar">
                        <button type="button" className="btn btn-primary btn-sm">Ir a pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito