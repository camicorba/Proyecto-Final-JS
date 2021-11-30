class Tarea{
    constructor (id, name, priori, desc) {
        this.id = id;
        this.name = name.toLowerCase();
        this.priori = priori;
        this.desc = desc;
    }
}
//GUARDO EL ARRAY EN EL STORAGE
let arraytask = JSON.parse(localStorage.getItem('arraytask')) || []

const pushear = (tarea) => {
    arraytask.push(tarea);
    localStorage.setItem('arraytask', JSON.stringify(arraytask));
}
const findOne = (name) => {
    name = name.toLowerCase();
    const task = arraytask.find(task => task.name === name);
    return task
}

// //ACCEDO A LOS ELEMENTOS DEL DOM
const inputName = document.getElementById('input-tarea')
const inputDesc = document.getElementById('input-desc')
const form = document.getElementById('form-task')
const add = document.getElementById('add-btn')
let card = document.getElementById('lista-task')
let boton = document.getElementById('btn-delete')
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

// ANIMACION PARA BOTONES
$('#btn-inicial').click(() => {
    $('#form-task').slideToggle(1000);
})

$('#btn-menu').on('click', function(){
    $('.menu-bar').toggleClass('active')
    $('.contenido').toggleClass('open')
})



const renderTareas = () => {
    for (let tasks of arraytask) {
        let cardTarea = document.createElement('div');
        cardTarea.innerHTML = `<h3>${tasks.name}</h3>
        <p>${tasks.desc}</p>
        <input type=image src="img/delete.png" id="btn-delete" id="${tasks.name}"></input>
        `

        card.appendChild(cardTarea);
        cardTarea.onclick = () => {
            eliminar(tasks.name) 
            document.location.reload()
        }
    }
}
renderTareas();

//aca va el evento del formulacio
form.addEventListener('submit', (event) => {
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
        pushear(tarea)
    }
})

const eliminar = (name) => {
    const task = findOne(name)
    const index = arraytask.indexOf (task)
    arraytask.splice(index, 1)
    localStorage.setItem('arraytask', JSON.stringify(arraytask))
}