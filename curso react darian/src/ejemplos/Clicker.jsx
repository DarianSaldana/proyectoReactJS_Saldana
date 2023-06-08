import { useState } from "react"


export const Clicker = ({init = 0, step = 1}) => {

    // let counter = 0;
    //estos son estados, cuando apreto los botones se recarga el renderizado
    let [counter, setCounter] = useState(init);//si yo llamo la funcion set counter modifico el estado y 
                                            //disparo el proceso de renderizado asociado a la modificacion de estado
    const[saludar, setSaludar] = useState(false);

console.log(counter)

    const sumar = () => {
        setCounter(counter + step)
    }
    const restar = () => {
        setCounter(counter - step)
    }
    const reset = () => {
        setCounter(init)
    }

    const cambiar = () => {
        setSaludar(!saludar)
    }
    
    //sencillamente agrego la funcion onClick y ya sirve como un boton
//signo de pregunta valida si variable saludar es true o no
    return (
        <div>
            <h2>Clicker</h2>
            <hr />
            <button onClick={sumar}>Click me</button> 
            <button onClick={restar}>Restar</button> 
            <button onClick={reset}>Reset</button> 
            <h1>{counter}</h1>{counter}
            
            <hr />
            <button onClick={cambiar}>Click me</button> 

        <p>{saludar ? "Hola true" : "Chau false"}</p>
        </div>
    )
}