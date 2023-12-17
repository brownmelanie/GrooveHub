import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
       {/*define las rutas*/}
      <Routes>
        <Route path="/" element= {<Main/>}/>
        <Route path="/products" element= {<ItemListContainer/>}/>
        <Route path="/products/:categoryId" element= {<ItemListContainer/>}/>
      {/*
      CAMBIAR LA RUTA q lleve a error  
      <Route path="/item" element=   {<ItemDetailContainer/>}/>
      */}
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
