import './App.css'
import 'boxicons'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Shop } from './pages/Shop'
import { SingleProduct } from './pages/SingleProduct'
import { Comparison } from './pages/Comarison'
import { CartDetails } from './pages/CartDetails'
import { Checkout } from './pages/Checkout'
import { Contact } from './pages/Contact'
import { Blog } from './pages/Blog'

function App() {

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shop/single_product' element={<SingleProduct/>}/>
      <Route path='/shop/product/comparison' element={<Comparison/>}/>
      <Route path='/shop/product/cart' element={<CartDetails/>}/>
      <Route path='/shop/product/checkout' element={<Checkout/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
     
    </Routes>
  )
}

export default App
