import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Error from './components/Error/Error.jsx'
import { CartProvider } from './components/Context/CartContext.jsx'
import CartView from './components/CartView/CartView.jsx'

function App() {

  return (
    <CartProvider>

      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element= {<Main/>}/>
          <Route path="/products" element= {<ItemListContainer/>}/>
          <Route path="/products/:categoryId" element= {<ItemListContainer/>}/>
          <Route path="/item" element= {<Error/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<CartView/>}/>
          <Route path="/contact" element={<Error/>}/>
        </Routes>

      </BrowserRouter>

    </CartProvider>
  )
}

export default App
