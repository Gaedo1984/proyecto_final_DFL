import banner from './../assets/banner.jpg'
import Header from './Header'


const Home = ()=>{
    return(
        <div className="container-fluid">
            <div className='contenedor-home'>
                <Header></Header>
                <div className="row">
                    <div className='titulo-home'>
                        Bienvenidos a Ricascarnes.com
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home