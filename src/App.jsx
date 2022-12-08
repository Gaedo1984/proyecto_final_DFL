import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Tiposcarnes from './views/Tiposcarnes'
import Detallecarnes from './views/Detallecarnes'
import Ofertasespeciales from './views/Ofertasespeciales'
import Footer from './components/Footer.jsx'
import Login from './views/Login'
import Carrito from './views/Carrito'
import Homeintranet from './views/Homeintranet'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
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
      
    </div>
  )
}

export default App
