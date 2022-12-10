import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import Context from "../context/context.js";


const Payment = () => {
    const navigate = useNavigate()
    const {totalCarrito, agregarAlCarrito} = useContext(Context)
    const goHome = () => {
        totalCarrito("si")
        agregarAlCarrito([], "si")
        navigate("/")
    }

    return(
        <main className="payment">
            <i className="fa-solid fa-credit-card"></i>
            <h1>Gracias por comprar en Ricas Carnes</h1>
            <button type="button" className="btn btn-primary btn-sm" onClick={()=> goHome()}>Volver a Home</button>
        </main>
    )
}

export default Payment
