const form = document.querySelector('form');
const ul = document.querySelector ('ul');
const button = document.querySelector('button');
const input = document.querySelector('#item');

//other costants declarations here
//let itemsArray = [];
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild (li);
}

/*let items

if (localStorage.getItem('items')) {
    items = JSON.parse(localStorage.getItem('items'))}
else {
    items = {}
}*/



form.addEventListener('submit',function(e) {
    e.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem('items',JSON.stringify(itemsArray));

    data.forEach((item)=>{
        liMaker(item);
    })



    liMaker(input.value);
    input.value='';
})

button.addEventListener('click',function(){
    localStorage.clear();
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
})