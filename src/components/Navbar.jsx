import {NavLink} from "react-router-dom"


const Navbar = ()=>{
    return(
        <div className="container-fluid">
            <div className="row menu-carrito" style={{background:'#BE0303'}}>
                <div className="col-sm-12 col-lg-6 tit-ricascarnes">
                    <NavLink className="nav-link active" to='/'>Ricascarnes.cl</NavLink>
                </div>
                <div className="col-sm-12 col-lg-6 tit-carrito">
                <NavLink className="nav-link active" aria-current="page" to='/carrito'><i className="fas fa-shopping-cart" style={{cursor: 'pointer'}}> $37.000</i></NavLink>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                        <li className="nav-item">
                             <NavLink className="nav-link active" aria-current="page" to='/tipos_carnes/cerdo'><i className="fas fa-piggy-bank"></i> Cerdo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/tipos_carnes/vacuno' href="#"><i className="fas fa-bacon"></i> Vacuno</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/tipos_carnes/ave' href="#"><i className="fas fa-drumstick-bite"></i> Aves</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/ofertas_especiales'><i className="fas fa-search-dollar"></i> Ofertas especiales</NavLink>
                        </li>
                    </ul>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Recuperar contraseña</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to='/login'>Ingresar</NavLink>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar