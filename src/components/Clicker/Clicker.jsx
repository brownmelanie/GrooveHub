import { useEffect, useState } from "react"

export const Clicker = () => {
    let [counter, setCounter] = useState(0)
    let [saludar, setSaludar] = useState(true)

    const incrementar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        setCounter(counter - 1)
    }
    const cambiarSaludo = () => {
        setSaludar(!saludar) //el valor opuesto del saludar
    }

    useEffect(() => {
        console.log("Efecto de Montaje")

        return() => {
            console.log("Efecto de desmontaje")
        }
    },[]) //si esta vacio el array de dependencia solo se ejecuta cuando se desmonta el componente, sin importar los demas render

    useEffect(() => {
        console.log("Contador: ", counter)

        return() => { //efecto de limpieza
            console.log("Contador de limpieza: ", counter)
        }
    },[counter])
    //se dispara el .log solo cuando se clickea en sumar o restar 
    
//el counter no se recarga en 0 cada vez que se renderiza por propiedades de React 

    return (
        <div>
            <button onClick={incrementar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <hr/>
            <p>Clicks: {counter}</p>
            <hr />

            <button onClick={cambiarSaludo}>Cambiar saludo</button>
            <p>{saludar ? "Hola mundo" : "Chau a todos"}</p>
        </div>
    )
}