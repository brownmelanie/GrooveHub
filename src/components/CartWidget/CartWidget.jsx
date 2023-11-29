import './CartWidget.css'
import cart from '../../assets/cart.png'

const CartWidget = () => {
    return (
        <div className='divCarrito'>
            <img src={cart} alt="carrito"/>
            <p>2</p>
        </div>
    )
} 

export default CartWidget