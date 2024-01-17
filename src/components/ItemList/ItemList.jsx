import './ItemList.css'
import Button from '../Clicker/Button.jsx';
import { Link } from 'react-router-dom';

const ItemList = ({productos}) => {
    

    return (
        <>
            {productos.map((item) => (
                <div className="card_container" key={item.id}>
                    <img src={item.img} alt={item.name}/>
                    <div className="card_text">
                        <h3>{item.name}</h3>
                        
                        <p>{item.category}</p>
                        <b>USD${item.price}</b>

                        {item.stock >= 1 && item.stock <= 5 && <h4>Only {item.stock} left!</h4>}


                        <Button>
                            <Link className='linkReact' to={`/item/${item.id}`}>See more</Link>
                        </Button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ItemList;