//GUARDO LAS VARIABLES DE LA TAREA
let formTask = document.getElementById("form-task");
let inputTarea = document.querySelector("#input-tarea");
let inputDesc = document.getElementById("input-desc");
let error = document.getElementById("error");


//EVENTOS
formTask.addEventListener("submit", guardarTarea);

let tasks = JSON.parse(localStorage.getItem("tasks")) || []


//FUNCION PARA VALIIDAR
function validar() {
    let mensajeError = [];

    if (inputTarea.value === "" || inputTarea.value === null){
        mensajeError.push("Ingresa una tarea");     
    }
    error.innerHTML = mensajeError;
}

//DECLARO LAS FUNCIONES QUE VOY A USAR EN LOS EVENTOS
function guardarTarea(e) {

    const task = {
        tarea : inputTarea.value,
        descripcion : inputDesc.value,
    };

    validar();
    //agrego condicional para no agregar datos vacios
    if (localStorage.getItem("task") === "") {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    e.preventDefault()
}



// class Tarea{
//     constructor (name, desc) {
//         this.name = name
//         this.desc = desc
//     }
// }

// //GUARDO EL ARRAY EN EL STORAGE
// let arraytask = JSON.parse(localStorage.getItem('arrayTask')) || []

// //METODO PARA AGREGAR LOS TAREAS A LA LISTA
// const create = (tarea) => {
//     arraytask.push(tarea)
//     localStorage.setItem('arrayTask', JSON.stringify(arraytask))
// }

// //ACCEDO A LOS ELEMENTOS DEL DOM
// const listaTask = document.getElementById('lista-task')
// const formTask = document.getElementById('form-task')
// const inputName = document.getElementById('input-tarea')
// const inputDesc = document.getElementById('input-desc')


// //AGREGO LAS TAREAS
// for (let tarea of arraytask) {

//     let itemTask = document.createElement('div')

//     itemTask.innerHTML = `
//                         <strong> ${tarea.name}</strong> <br>
//                         <i> ${tarea.desc}</i> <br>
//                             `

//     listaTask.appendChild(itemTask)
// }


// //EVENT PARA AGREGAR TAREAS
// formTask.addEventListener('submit', (event) => {
//     const name = inputName.value
//     const desc = inputDesc.value

//     const tarea = new Tarea(name, desc)

//     create(tarea);
// })


