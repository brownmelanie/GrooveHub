import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { db } from "../../firebase/config.js"
import { collection, addDoc } from "firebase/firestore"
import "./Checkout.css"

const Checkout = () => {

    const {cart, totalCart, clearCart} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date()
        }
    
        const ordersRef = collection(db, 'orders')
        addDoc(ordersRef, order)
            .then(doc => {
                setOrderId(doc.id)
                clearCart()
            })
    }

    if (orderId) {
        return ( 
        <div className="order_container">
            <h2 className="order_title">Thanks for your purchase</h2>
            <p className="order_text">Your order number is: <b>{orderId}</b></p>
        </div>
        )
    }


    return (
        <div>
            <h2 className="checkout_title">Checkout</h2>

            <form onSubmit={handleSubmit} className="form_container">
                <input
                    className="form_input"
                    type="text"
                    placeholder="Name"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name="nombre"/>
                <input
                    className="form_input"
                    type="text"
                    placeholder="Adress"
                    value={values.direccion}
                    onChange={handleInputChange}
                    name="direccion"/>
                <input
                    className="form_input"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    name="email"/>
                <button type="submit" className='form_button'>Send order</button>
            </form>
        </div>
    )
}

export default Checkout