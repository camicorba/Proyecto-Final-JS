class Tarea{
    constructor (name, priori, desc) {
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
    $('.panel-card').append(`<div id=card> <h3> ${tarea.name} </h3> ${tarea.desc}<input type=image src="/img/delete.png" class="detele" id="btn-delete"></input> </div> `)
}

//AGREGAR TAREAS
$('#add-btn').on('click', function(event){
    const name = inputName.value
    const priori = selectPriori.value
    const desc = inputDesc.value

    const tarea = new Tarea(name, priori, desc)
    const nameValue = inputName.value

    if (nameValue == ''){
        $('#error').append('Debe ingresar una tarea')
        event.preventDefault();
    } else{
        arraytask.push(tarea)
        localStorage.setItem('arrayTask', JSON.stringify(arraytask))
    }
})

$('#btn-delete').on('click', function(event){
    console.log(event.parentNode);
})




