import { useEffect, useState } from "react";
import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams()

    console.log(itemId);
    console.log(item);

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {
                setItem( data.find( prod => prod.id === Number(itemId)))
            })
            .finally(() => setLoading(false))
    }, [])


    return (
        <>
            { loading ? (
                <h2>Loading...</h2>
            ) : (
                <ItemDetail item={item}/>
            )}
        </>
    )
}

export default ItemDetailContainer