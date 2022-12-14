import Context from "../context/context.js"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import login from './../assets/login.png'
import Header from './Header'
import { useContext } from "react"

const Login = () => {
    const navigate = useNavigate()

    const { users, actAdmin } = useContext(Context)

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const intranet = () => {
        users.filter((login) => {
            if ((login.correo === user) && (login.password === password)) {
                localStorage.setItem('token', 'test_token_carnes@1234')
                actAdmin(true)
                navigate('/sales_admin')
            }
            else { setError(true) }
        })
    }

    return (
        <div className="container-fluid">
            <div className="mantenedor-login">
                <Header></Header>
                <main className="form-signin w-100 m-auto">
                    <form style={{ textAlign: 'center' }}>
                        <img className="mb-4" src={login} alt="" width="72" height="57" style={{ textAlign: 'center' }}></img>
                        <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" onChange={(e) => setUser(e.target.value)} id="floatingInput" placeholder="name@example.com"></input>
                            <label>Correo</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} id="floatingPassword" placeholder="Password"></input>
                            <label>Password</label>
                        </div>
                        <button type="button" className="w-100 btn btn-lg btn-primary" onClick={() => intranet()}>Ingresar</button>
                    </form>
                    {error && <small style={{ color: 'red' }}>* Usuario o contraseña incorrecto(s)</small>}
                </main>
            </div>
        </div>
    )
}

export default Login