import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Context from './context/context'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './views/Home.jsx'
import Tiposcarnes from './views/Tiposcarnes.jsx'
import Detallecarnes from './views/Detallecarnes.jsx'
import Ofertasespeciales from './views/Ofertasespeciales.jsx'
import Footer from './views/Footer.jsx'
import Login from './views/Login.jsx'
import Carrito from './views/Carrito.jsx'
import Homeintranet from './views/Homeintranet.jsx'
import SalesAdmin from './views/SalesAdmin.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { formatPrice } from './utils/utils'


function App() {

  const api_carnes = "/carnes.json"
  const api_users = "/usuarios.json"
  const [carnes, setCarnes] = useState([])
  const [carrito, setCarrito] = useState([])

  const [users, setUsers] = useState([])
  let [ofertas, setOfertas] = useState([])
  let [admin, setAdmin] = useState(false)

  const handleOfertas = (oferta) => {
    const enOferta = ofertas.includes(oferta)

    if (enOferta) {
      const ofertasActualizado = ofertas.filter((carne) => carne != oferta)
      setOfertas(ofertasActualizado)

    } else {

      const ofertasActualizado = [...ofertas]
      ofertasActualizado.push(oferta)
      setOfertas(ofertasActualizado)

    }

  }

  const guardarOfertas = (ofertas) => {
    setOfertas(ofertas)
  }

  const cambiarEstadoOferta = (index,estado) => {
    console.log('index: ' + index);
    console.log('Estado:' + estado);
    let carnesActualizado = [...carnes]
    carnesActualizado[index].oferta = estado
    console.log('Carne: ' + carnesActualizado[index].oferta);
    setCarnes(carnesActualizado)
  }

  const actAdmin = (estado) => {
    setAdmin(estado)
  }


  const agregarAlCarrito = (item)=> {
    const itemIndex = carrito.findIndex((carne)=> carne.id === item.id)
    const updateCart = [...carrito]

    if(itemIndex === -1) {
      const carne = {
        id: item.id,
        count: 1,
        price_normal: item.price_normal,
        price_oferta: item.price_oferta,
        oferta: item.oferta,
        img_small: item.img_small,
        name: item.name
      }

      updateCart.push(carne)
      
    }else {
      updateCart[itemIndex].count += 1
    }
    
    setCarrito(updateCart)
  }

 const removerDelCarrito =(item)=>{
  const itemIndex = carrito.findIndex((carne)=> carne.id === item.id)
  const updateCart = [...carrito]

  updateCart[itemIndex].count -= 1
  
  if(updateCart[itemIndex].count <= 0){
    updateCart.splice(itemIndex, 1)
  }

  setCarrito(updateCart)

 }

 const totalCarrito =()=>{
   let total = 0
   carrito.forEach((item)=> total += item.count * (item.oferta == 'si' ? item.price_oferta : item.price_normal))

   return formatPrice(total)
 }

  useEffect(() => {
    fetch(api_carnes)
      .then((res) => res.json())
      .then((json) => {
        setCarnes(json)
      })
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    fetch(api_users)
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((e) => console.log(e))
  }, [])

  const globalState = { carnes, carrito, agregarAlCarrito, removerDelCarrito, totalCarrito, users, ofertas, handleOfertas, guardarOfertas, cambiarEstadoOferta, actAdmin, admin }

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/tipos_carnes/:variedad' element={<Tiposcarnes></Tiposcarnes>}></Route>
            <Route path='/detalle_carnes/:id_carne' element={<Detallecarnes></Detallecarnes>}></Route>
            <Route path='/ofertas_especiales' element={<Ofertasespeciales></Ofertasespeciales>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/carrito' element={<Carrito></Carrito>}></Route>
            <Route path='/home_intranet' element={<Homeintranet></Homeintranet>}></Route>
            <Route path='/sales_admin' element={
              <ProtectedRoute>
                <SalesAdmin />
              </ProtectedRoute>
            }></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
