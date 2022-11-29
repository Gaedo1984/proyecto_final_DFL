import banner from './../assets/banner.jpg'
import login from './../assets/login.png'
import Header from './Header'

const Login = ()=>{
    return(
        <div className="container-fluid">
            <div className="mantenedor-login">
                <Header></Header>
                <main className="form-signin w-100 m-auto">
                    <form style={{textAlign:'center'}}>
                        <img className="mb-4" src={login} alt="" width="72" height="57" style={{textAlign:'center'}}></img>
                        <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                            <label>Correo</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                            <label>Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Login