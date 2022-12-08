import banner from './../assets/banner_3.jpg'

const Header = ()=>{
    return(
        <div className="row">
            <img src={banner} className="img-fluid" alt="..."></img>
        </div>
    )
}

export default Header