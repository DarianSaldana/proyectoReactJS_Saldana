//Para exportar solo un modulo

// const saludar = () => {
//     console.log("Hola Darian")
// }

// export default saludar 
//y luego en la App.jsx => import saludar from './Utilidades.js'


//Para exportar mas de un modulo 

export const saludar = () => {
    console.log("Hola Darian")
}
export const despedirse = () => {
    console.log("Chau Darian")
}

//luego en la App.jsx => import { saludar, despedirse } from './Utilidades.js'


