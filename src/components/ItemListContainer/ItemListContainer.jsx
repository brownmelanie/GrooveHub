import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { pedirDatos } from '../../utils/utils.js'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    //genero el estado (productos) y su useState que essu valor inicial un array vacio para q despues se carguen los productos dentro

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos().then((data) => {
                const items = categoryId 
                ? data.filter (prod => prod.category === categoryId)
                : data
                setProductos(items)
            })
            .finally(() => setLoading(false))
    }, [categoryId]) //le pongo array de dependencia con categoryId para que solo cada vez q vea un cambio en el, renderice otra vez. asi no hace peticiones innecesarias

    return(
        <section className='shop'>
            {
            loading 
                ? <Loader/>
                : <ItemList productos={productos}/>
            }
        </section>
    )
}

export default ItemListContainer
