import './Navbar.css'
import Brand from '../Brand/Brand'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header className="header">
            <div className="header_container">
                <Brand/>
                <nav className="navbar">
                    <a className="navbar_link" href="#">Productos</a>
                    <a className="navbar_link" href="#">Categorías</a>
                    <a className="navbar_link" href="#">Contacto</a>
                    <CartWidget/>
                </nav>
            </div>
        </header>
    )
}

export default Navbar