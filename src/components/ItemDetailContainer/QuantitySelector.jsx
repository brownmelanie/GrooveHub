import Button from "../Clicker/Button"
import './QuantitySelector.css'
//quantitySelector modifica el estado del componente padre en setCantidad

//setCantidad se trae de ItemDetail (referencias)
const QuantitySelector = ({cantidad, stock, setCantidad}) => {

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1) //solo suma hasta la cantidad que hay en el stock
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div>
            <Button onClick={handleRestar}>-</Button>
            <span>{cantidad}</span>
            <Button onClick={handleSumar}>+</Button>
        </div>
    )
}

export default QuantitySelector