const users = [
    {
        id: 1,
        nombre: "Carlos",
        curso: "React"
    },
    {
        id: 2,
        nombre: "Bruno",
        curso: "React"
    },
    {
        id: 3,
        nombre: "Lujan",
        curso: "Python"
    },
    {
        id: 4,
        nombre: "Fede",
        curso: "Javascript"
    },
]

// const match = users.find((el) => el.nombre === "Lujan");
// console.log(match);


function find(arr, fn) { //el segundo parametro puede ser una funcion, en este caso va a ser un console.log

    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        fn(current);
    }
}

// find(users, console.log);

function encontrar(arr, fn) { //el segundo parametro puede ser una funcion, en este caso va a ser una funcion que retorne un booleano denominando el como el elemento en el cual se encuentra iterando

    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        if (fn(current) === true) {

            return current;
        }
    }
}
const match = encontrar(users, (el) => el.curso === "React");
console.log("match", match);

function filtrar(arr, fn) { //el segundo parametro puede ser una funcion, en este caso va a ser una funcion que retorne un booleano denominando el como el elemento en el cual se encuentra iterando

    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        if (fn(current) === true) {
            result.push(current);
        }
    }

    return result;
}
const result = filtrar(users, (el) => el.curso === "React");
console.log(result);