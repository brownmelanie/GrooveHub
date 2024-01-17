import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import Button from '../Clicker/Button.jsx';
import { Link } from 'react-router-dom'
import "./CartView.css"

const CartView = () => {

    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <section className="cart_container">
                <h2>Your cart is empty</h2>
                <hr/>
                <p>Add items to your cart</p>
                <Button>
                    <Link to={"/products"}>Go to the store</Link>
                </Button>
            </section>
        )
    }

    return (
        <section className="cart_container">
            <h2>Your Purchase</h2>
            <hr/>

            <ul>
                {
                    cart.map((item) => (
                        <li key={item.id} className="cart_list">
                            <img src={item.img} alt="Cart Img" className="w-40 h-40"/>
                            <div>
                                <h3>{item.name}</h3>
                                <div className="item_description_cart">
                                    <div>
                                        <p>USD$ {item.price * item.cantidad}</p>
                                        <p>Quantity: {item.cantidad}</p>
                                    </div>

                                    <Button onClick={() => removeItem(item.id)}>
                                        <img className="trash_icon" src="src/assets/trashIcon.svg" alt="trash icon" />
                                    </Button>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <h4>Total: USD$ {totalCart()}</h4>
            <Button onClick={clearCart}>Empty cart</Button>
        </section>
    )
}

export default CartView