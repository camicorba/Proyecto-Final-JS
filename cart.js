class Lista{
    constructor(todo){
        this.todo = todo
    }
}
let arraylist = JSON.parse(localStorage.getItem('arraylist')) || []
const add = document.getElementById('btn-add-list')
const inputList = document.getElementById('input-list')
let item = document.getElementById('lista-todo')

const pushear = (lista) => {
    arraylist.push(lista);
    localStorage.setItem('arraylist', JSON.stringify(arraylist));
}           
const findOne = (todo) => {
    todo = todo;
    const list = arraylist.find(list => list.todo === todo);
    return list
}
const eliminar = (todo) => {
    const list = findOne(todo)
    const index = arraylist.indexOf (list)
    arraylist.splice(index, 1)
    localStorage.setItem('arraylist', JSON.stringify(arraylist))
}
const renderLista = () => {
    for (let items of arraylist) {
        let itemList = document.createElement('li');
        itemList.innerHTML = `<p>${items.todo}</p>
        <input type=image src="img/delete.png" id="btn-delete" id="${items.todo}"></input>
        `
        item.appendChild(itemList);
        itemList.onclick = () => {
            eliminar(items.todo) 
            document.location.reload()
        }
    }
}
renderLista();

$('#btn-menu').on('click', function(){
    $('.menu-bar').toggleClass('active')
    $('.contenido').toggleClass('open')
})

add.addEventListener('click', (event) => {
    let todo = inputList.value
    const lista = new Lista(todo);

    let listValue = inputList.value;
    if (inputList.value == ''){
        $('#error').append('Debe ingresar un dato');
        $('#error').fadeOut(2000);
        event.preventDefault()
    } else {
        pushear(lista)

    }

})