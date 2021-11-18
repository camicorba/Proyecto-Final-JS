class Tarea{
    constructor (id, name, priori, desc) {
        this.id = id
        this.name = name
        this.priori = priori
        this.desc = desc
    }
}

//GUARDO EL ARRAY EN EL STORAGE
let arraytask = JSON.parse(localStorage.getItem('arrayTask')) || []


// //ACCEDO A LOS ELEMENTOS DEL DOM
const inputName = document.getElementById('input-tarea')
const inputDesc = document.getElementById('input-desc')
let id = 100


//AGREGO LOS SELECT DE PRIORIDADES
const prioridades = ['Sin prioridad', 'Importante', 'Urgente']
const selectPriori = document.getElementById('input-priori')
const fragment = document.createDocumentFragment();
for (const prioridad of prioridades){
    const selecItem = document.createElement('OPTION')
    selecItem.setAttribute('value', prioridad.toLocaleLowerCase())
    selecItem.textContent = prioridad
    fragment.appendChild(selecItem)
}
selectPriori.appendChild(fragment)

// ANIMACION PARA BOTON DE INICIO
$('#btn-inicial').click(() => {
    $('#form-task').slideToggle(1000);
})


//AGREGO LAS TAREAS
for (let tarea of arraytask) {
    id = id + 1;
    $('.panel-card').append(`<div id=card> <h3> ${tarea.name} </h3> ${tarea.desc}<input type=image src="/img/delete.png" id="btn-delete" data-id=${tarea.id}></input> </div> `)
}

//AGREGAR TAREAS
$('#add-btn').on('click', function(event){
    const name = inputName.value
    const priori = selectPriori.value
    const desc = inputDesc.value

    const tarea = new Tarea(id, name, priori, desc)
    const nameValue = inputName.value

    if (nameValue == ''){
        $('#error').append('Debe ingresar una tarea');
        $('#error').fadeOut(2000);
        event.preventDefault();
    } else{
        arraytask.push(tarea)
        localStorage.setItem('arrayTask', JSON.stringify(arraytask))
    }


})



$('#btn-delete').on('click', function(event) { 
    let eliminarTask = event.target;
    let id= parseInt(eliminarTask.dataset.id);
    removeTarea(id);
    // const findTarea = id => {
    //     const tarea = arraytask.find (tarea => tarea.id === id);
    //     return tarea
    // }
    
    // const removeTarea = (id) => {
    //     const tarea = findTarea(id)
    //     const indice = arraytask.indexOf(tarea);
    //     arraytask.splice(indice, 1);
    //     localStorage.setItem('arraytask', JSON.stringify(arraytask))
    // }
})

//----------------

    const findTarea = id => {
        const tarea = arraytask.find(tarea => tarea.id == id);
        return tarea
    }
    const deleteTarea = (id) => {
        const tarea = findTarea (id);
        const indice = arraytask.indexOf(tarea);
        arraytask.splice(indice, 1);
        localStorage.setItem("arrayTask", JSON.stringify(arraytask));
        location.reload();
    }



//---------
// function eliminarTarea(e){
//     if(e.target.classList.contains('eliminar')){
//         e.target.parentElement.remove()
//     }
// }

// let indice = arraytask.findIndex((objeto, indice, arraytask) =>{
//     return objeto.name == 
// })
// let eliminar = document.getElementsByClassName('eliminar')
// let indice = arraytask.findIndex((objeto, indice, arraytask) =>{
//          return objeto.name == eliminar;
//     })
// console.log(indice)

// const eliminar = document.querySelectorAll('#btn-delete')

//----------------------
// const eliminar = document.querySelectorAll('#btn-delete')
// function eliminarTarea(e){

//     let indice = e.target.parentNode.indice
//     arraytask.splice(id, 1)
//     localStorage.setItem('arrayTask', JSON.stringify(arraytask))
//     location.reload()
// }

// for (let i = 0; i < eliminar.length; i++) {
//     eliminar[i].addEventListener('click', eliminarTarea)
// }



