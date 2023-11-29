import './Cards.css'


const Cards = ({image, title, price}) => {
    return (
        <div className='card_container'>
            <img>{image}</img>
            <div className='card_text'>
                <h3>{title}</h3>
                <b>USD$ {price}</b>
            </div>
        </div>
    )
}

export default Cards