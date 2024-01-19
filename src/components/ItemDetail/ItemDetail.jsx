import './ItemDetail.css'
import Button from '../Clicker/Button.jsx';
import { useContext, useState } from 'react';
import QuantitySelector from '../ItemDetailContainer/QuantitySelector.jsx';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext.jsx';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

    //para manejar la cantidad a comprar del producto 
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    const { addToCart, isInCart } = useContext(CartContext)

    console.log(isInCart(item.id));

    const handleAgregar = () => {
        const itemToCart = {
            ...item, //todas las propiedades del item
            cantidad //propiedad cantidad con su estado setCantidad
        }

        // const newCart = cart.slice() se replica el array vacio del carrito, retorna uno nuevo
        // newCart.push(itemToCart) se pushea el elemento que se agrega al carrito
        addToCart(itemToCart)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <>
            <div className="detail_container" key={item.id}>
                <div className='button_back'><Button onClick={handleVolver}>🡰</Button></div>

                <img src={item.img} alt={item.name}/>
                <div className="detail_text">
                    <h3>{item.name}</h3>
                    <p className='category'>{item.category}</p>
                    <p className='description'>{item.description}</p>
                    <b>USD${item.price}</b>


                {
                    isInCart (item.id)
                        ? <Button><Link to="/cart">Checkout</Link></Button>
                        : 
                        <>
                            {item.stock >= 1 
                            ? ( <>
                                <QuantitySelector
                                    cantidad={cantidad}
                                    stock={item.stock}
                                    setCantidad={setCantidad}
                                />
                                    <Button onClick={handleAgregar}>Add to cart</Button>
                                </>
                            ) : (
                            <p className='outStock'>Out of stock</p>
                            )}
                        </>
                }
                </div>
            </div>
        </>
    )
}

export default ItemDetail