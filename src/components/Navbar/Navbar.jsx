import './Navbar.css'
import Brand from '../Brand/Brand'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'



const links = [
    {
        label: 'All Products',
        href: '/products'
    },
    {
        label: 'Cd´s',
        href: '/products/CD'
    },
    {
        label: 'Posters',
        href: '/products/Poster'
    },
    {
        label: 'Vinyls',
        href: '/products/Vinyl'
    }
]

const Navbar = () => {
    return (

        <header className="header">
            <div className="header_container">
                <Brand/>
                <nav className="navbar">
                    {
                        links.map((link) => (
                            <Link 
                            className="navbar_link"
                            key={link.href}
                            to= {link.href}>
                                {link.label}
                            </Link>
                        ))
                    }
                    <CartWidget/>
                </nav>
            </div>
        </header>
    )
}


export default Navbar