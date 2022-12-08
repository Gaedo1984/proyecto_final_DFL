import { formatPrice } from '../utils/utils.js'

const CarritoLista = ({ carrito, agregarAlCarrito, removerDelCarrito, totalCarrito }) =>{
    console.log(carrito)
    return (
       <div className="container-fluid">
           {
               carrito.map((item)=> {
                   return (
                       <div key={item.id} >
                            <div key={item.id} className="row contenedor-detalle-carrito pizza-carrito">
                                    <div className="col-lg-6 col-sm-12">
                                        <img src={item.img_small} style={{width:'100px', padding:'auto'}} alt="" />
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="valores-carrito">
                                            <div className="precio-carro">
                                                {
                                                    item.oferta === 'si' ?
                                                    <div> ${formatPrice(item.price_oferta * item.count)}</div>
                                                    :
                                                    <div>${formatPrice(item.price_normal * item.count)}</div>
                                                }
                                               
                                            </div>
                                            <div className="sacar-carro">
                                                <button type="button" className="btn btn-danger btn-sm" style={{width:'30px'}} onClick={()=> removerDelCarrito(item)}>-</button>
                                            </div>
                                            <div className="cantidad-productos">
                                                {item.count}
                                            </div>
                                            <div className="agregar-carro">
                                                <button type="button" className="btn btn-primary btn-sm" style={{width:'30px'}} onClick={()=> agregarAlCarrito(item)}>+</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <hr style={{width: '65%', marginLeft: '20px'}}></hr>  
                            </div>
                           </div>
                   )
               })
           }
           <div className="row">
                                    <div className="col-12">
                                        <div className="tot-final-carrito">
                                        Total: ${totalCarrito()}
                                        </div>
                                        <div className="btn-pagar">
                                        <button type="button" className="btn btn-primary btn-sm">Ir a pagar</button>
                                        </div>
                                    </div>
                                </div>
       </div>
    )
}

export default CarritoLista