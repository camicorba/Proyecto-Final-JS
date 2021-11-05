// //GUARDO LAS VARIABLES DE LA TAREA
// let formTask = document.getElementById("form-task");
// let error = document.getElementById("error");


// //EVENTOS
// formTask.addEventListener("submit", guardarTarea);


//FUNCION PARA VALIIDAR
// function validar() {
//     let mensajeError = [];

//     if (inputTarea.value === "" || inputTarea.value === null){
//         mensajeError.push("Ingresa una tarea");     
//     }
//     error.innerHTML = mensajeError;
// }

//DECLARO LAS FUNCIONES QUE VOY A USAR EN LOS EVENTOS
//Funcion Guardar
// function guardarTarea(e) {
//     let inputTarea = document.getElementById("input-tarea").value;
//     let inputDesc = document.getElementById("input-desc").value;

//     const task = {
//         inputTarea,
//         inputDesc
//     };
//     // validar();
//     //agrego condicional para no agregar datos vacios
//     if (localStorage.getItem("task") === "") {
//         let tasks = [];
//         tasks.push(task);
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     } else {
//         let tasks = JSON.parse(localStorage.getItem("tasks"));
//         tasks.push(task);
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }

//     e.preventDefault()
// }

//Funcion mostrar
// function mostrarTarea() {
//     let tasks = JSON.parse(localStorage.getItem("tasks"));
//     let taskView = document.getElementById("lista-task");
//     taskView.innerHTML = '';
//     for (let i = 0; i < tasks.length; i++){
//         let inputTarea = tasks[i].inputTarea;
//         let inputDesc = tasks[i].inputDesc;
//         taskView.innerHTML= `<div>
//                                 <h2>${inputTarea}</h2>
//                                 <p>${inputDesc}</p>
//                                 <a class="btn btn-danger"> x</a>
//                             </div>
//                             `
//     }
// }


class Tarea{
    constructor (name, priori, desc) {
        this.name = name
        this.priori = priori
        this.desc = desc
    }
}

//GUARDO EL ARRAY EN EL STORAGE
let arraytask = JSON.parse(localStorage.getItem('arrayTask')) || []

//METODO PARA AGREGAR LOS TAREAS A LA LISTA
const create = (tarea) => {
    if (this.name.value === ""){
        error.innerHTML = "Debe ingresar una tarea";
    } else{
        arraytask.push(tarea)
        localStorage.setItem('arrayTask', JSON.stringify(arraytask))
    }

}
const show = (tarea) => {
    for (let tarea of arraytask) {

        let itemTask = document.createElement('div')
    
        itemTask.innerHTML = `
                            <strong> ${tarea.name}</strong> <br>
                            <i> ${tarea.desc}</i> <br>
                                `
    
        listaTask.appendChild(itemTask)
    }

}


// //ACCEDO A LOS ELEMENTOS DEL DOM
const listaTask = document.getElementById('lista-task')
const formTask = document.getElementById('form-task')
const inputName = document.getElementById('input-tarea')
const inputDesc = document.getElementById('input-desc')

const prioridades = ['Sin prioridad', 'Importante', 'Urgente']
const selectPriori = document.getElementById('input-priori')

//AGREGO ELEMENTOS DESDE DOM
const fragment = document.createDocumentFragment();
for (const prioridad of prioridades){
    const selecItem = document.createElement('OPTION')
    selecItem.setAttribute('value', prioridad.toLocaleLowerCase())
    selecItem.textContent = prioridad
    fragment.appendChild(selecItem)
}

selectPriori.appendChild(fragment)

//AGREGO LAS TAREAS

//EVENT PARA AGREGAR TAREAS
formTask.addEventListener('submit', (event) => {

    const name = inputName.value
    const priori = selectPriori.value
    const desc = inputDesc.value

    const tarea = new Tarea(name, priori, desc)

    create(tarea);
    show(tarea);

    event.preventDefault();
})





