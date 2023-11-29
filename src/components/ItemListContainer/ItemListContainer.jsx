import './ItemListContainer.css'
import Cards from '../Cards/Cards.jsx'

//Cuando trato de agregar imagenes por props me deja de renderizar toda la pagina

const ItemListContainer = () => {
    return(
        <section className='shop'>
            <Cards title="Vynil" price={20}/>
            <Cards title="CD" price={8}/>
            <Cards title="Poster" price={10}/>
            <Cards title="Poster" price={10}/>
            <Cards title="Poster" price={10}/>
            <Cards title="Poster" price={10}/>
        </section>
    )
}

export default ItemListContainer