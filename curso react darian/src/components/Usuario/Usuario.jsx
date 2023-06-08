//en App.jsx
// const profe = {
//     nombre: "Fernando",
//     curso: "React JS",
//     edad: 18,
//     rol: "Alumno"
//   }

export const Usuario = ({nombre, edad, curso, rol}) => {//props es un objeto nativo de js y lo puego desestructurar el parametro que es un objeto

    // console.log(props)
    // const {nombre, edad, curso, rol} = props

    //asi le paso valores dinamicos
    return (
        <div>
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Curso: {curso}</p>
            <p>Rol: {rol}</p>
            <hr />
        </div>
    )
    // return (
    //     <div>
    //         <h3>{nombre}</h3>
    //         <p>Edad: {props.edad}</p>
    //         <p>Curso: {props.curso}</p>
    //         <p>Rol: {props.rol}</p>
    //         <hr />
    //     </div>
    // )


    //asi le paso valores fijos
    // return (
    //     <div>
    //         <h3>Darian Saldana</h3>
    //         <p>Edad: 23</p>
    //         <p>Curso: ReactJS</p>
    //         <p>Rol: Alumno</p>
    //         <hr />
    //     </div>
    // )
}