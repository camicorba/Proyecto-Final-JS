class Tarea{
    constructor (name, desc) {
        this.name = name
        this.desc = desc
    }
}

//GUARDO EL ARRAY EN EL STORAGE
let arraytask = JSON.parse(localStorage.getItem('arrayTask')) || []

//METODO PARA AGREGAR LOS TAREAS A LA LISTA
const create = (tarea) => {
    arraytask.push(tarea)
    localStorage.setItem('arrayTask', JSON.stringify(arraytask))
}

//ACCEDO A LOS ELEMENTOS DEL DOM
const listaTask = document.getElementById('lista-task')
const formTask = document.getElementById('form-task')
const inputName = document.getElementById('input-tarea')
const inputDesc = document.getElementById('input-desc')


//AGREGO LAS TAREAS
for (let tarea of arraytask) {

    let itemTask = document.createElement('div')

    itemTask.innerHTML = `
                        <strong> ${tarea.name}</strong> <br>
                        <i> ${tarea.desc}</i> <br>
                            `

    listaTask.appendChild(itemTask)
}


//EVENT PARA AGREGAR TAREAS
formTask.addEventListener('submit', (event) => {
    const name = inputName.value
    const desc = inputDesc.value

    const tarea = new Tarea(name, desc)

    create(tarea);
})


//EVENTO CON VALIDADOR
// addbtn.addEventListener("click", (e)=>{
//     e.preventDefault();
//     let error = validar();
//     if (error[0]) {
//         resultado.innerHTML = error[1]
//     } else {
//         resultado.innerHTML = "Tarea agregada";
//     }
//     AgregarAlDom();
// });

// const validar = () =>{
//     let error = [];
//     if (inputName.value.length <=1){
//         error[0] = true
//         error[1] = "Debe agregar una tarea";
//         return error;
//     }
//     error[0] = false
//     return error;
// }

