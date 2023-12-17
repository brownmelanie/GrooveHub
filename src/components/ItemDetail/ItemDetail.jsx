import './ItemDetail.css'
import Button from '../Clicker/Button.jsx';

const ItemDetail = ({item}) => {
    return (
        <>
            <div className="detail_container" key={item.id}>
                <img src={item.img} alt={item.name}/>
                <div className="detail_text">
                    <h3>{item.name}</h3>
                    <p className='category'>{item.category}</p>
                    <p className='description'>{item.description}</p>
                    <b>USD${item.price}</b>
                    <Button>Add to cart</Button>
                </div>
            </div>
        </>
    )
}

export default ItemDetail