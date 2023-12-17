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
                        <Button>
                            <Link to={`/item/${item.id}`}>See more</Link>
                        </Button>
                        {/*<p>{item.description}</p>*/}
                    </div>
                </div>
            ))}
        </>
    )
}

export default ItemList;