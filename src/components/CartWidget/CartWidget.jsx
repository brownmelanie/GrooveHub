import './CartWidget.css'
import cart from '../../assets/cart.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {

    const {itemsInCart} = useContext(CartContext)

    return (
            <Link to="/cart" className={`${itemsInCart() === 0 ? 'invisible' : 'visible'}`}>
                <div className='divCarrito'>
                    <img src={cart} alt="carrito"/>
                    <span>{itemsInCart()}</span>
                </div>
            </Link>
    )
} 

export default CartWidget