import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config.js';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    //genero el estado (productos) y su useState que essu valor inicial un array vacio para q despues se carguen los productos dentro

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)


    const productosRef = collection (db, 'products')
    const docsRef = categoryId 
                ? query (productosRef, where('category', '==', categoryId))
                : productosRef


    getDocs( docsRef )
        .then ((querySnapshot) => {
            const docs = querySnapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })
            setProductos( docs )
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
