import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Context from './context/context'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Tiposcarnes from './views/Tiposcarnes'
import Detallecarnes from './views/Detallecarnes'
import Ofertasespeciales from './views/Ofertasespeciales'
import Footer from './views/Footer'
import Login from './views/Login'
import Carrito from './views/Carrito'
import Homeintranet from './views/Homeintranet'
import { formatPrice } from './utils/utils'


function App() {
  
  const api_carnes = "./src/assets/carnes.json"
  const [carnes, setCarnes] = useState([])
  const [carrito, setCarrito] = useState([])

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

  useEffect(
    ()=>{
      fetch(api_carnes)
        .then((res)=> res.json())
        .then((json)=>{
          //console.log(json)
          setCarnes(json)
        })
        .catch((e)=>console.log(e))
    }, [])

  
  const globalState = {carnes, carrito, agregarAlCarrito, removerDelCarrito, totalCarrito}

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
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
