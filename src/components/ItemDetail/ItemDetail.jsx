import './ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
        <>
            <div className="card_container" key={item.id}>
                <img src={item.img} alt={item.name}/>
                <div className="card_text">
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <b>USD${item.price}</b>
                    {/*<p>{item.description}</p>*/}
                </div>
            </div>
        </>
    )
}

export default ItemDetail