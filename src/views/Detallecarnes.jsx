import banner from './../assets/banner.jpg'
import tomahawk from './../assets/tomahawk.jpg'
import Header from './Header'

const Detallecarnes = ()=>{
    return(
        <div className="container-fluid">
            <div className='contenedor-detalle'>
                <Header></Header>
                <div className='row titulo-detalle'>
                    <p>Tomahawk de Vacuno Premium</p>
                </div>
                <div className='row contenedor-desc'>
                    <div className='col-sm-12 col-lg-3'>
                        <div className="card" style={{width:'18rem'}}>
                            <img src={tomahawk} className="card-img-top" alt="..." style={{width:'350px'}}></img>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-5'>
                        <div className='row desc-detalle'>
                            <p><strong>Tipo:</strong> Carne de vacuno premium</p>
                            <p><strong>Estado:</strong> Congelado</p>
                            <p><strong>Marca:</strong> Carnes a punto</p>
                            <p><strong>Preparación:</strong> Olla/Parrilla</p>
                            <br></br>
                            <p><strong>Descripción</strong></p>
                            <p>
                                Corte Tamahawk de vacuno, carne de selección premium para preparar a la parrilla con despacho a domicilio.
                            </p>
                            <p>
                                Corte de 0,7 kg aproximados de carne de calidad prime sellada al vacio con delivery.
                            </p>
                            <button type="button" class="btn btn-success">Agregar al carro</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detallecarnes