import banner from './../assets/banner.jpg'

const Header = ()=>{
    return(
        <div className="row">
            <img src={banner} className="img-fluid" alt="..." style={{height:'280px'}}></img>
        </div>
    )
}

export default Header