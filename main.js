const divOne = document.querySelector('.one');
let divTwo;
const wrapper = document.querySelector('.wrapper');
const hide = document.querySelector('.btn-ok');
const unhide = document.querySelector('.unhide');
const listName = document.querySelector('.input');
const h1 = document.createElement('h1');;
const add = document.createElement('button');
const addItem = document.createElement('input');
let ul;
const anotherList = document.createElement('button');
const previousLists = document.getElementById('prev');


const appendToDiv = (div, el_one, el_two, el_three, el_four) => {
     div.appendChild(el_one);
     div.appendChild(el_two);
     div.appendChild(el_three);
     div.appendChild(el_four);
}

const makeButton = (div, name, text, cl) => {
    name = document.createElement('button');
    div.appendChild(name);
    name.textContent = text;
    name.className = cl;

    return name;
}

const addButtons = (element) => {
    const div = document.createElement('div');
    makeButton(div, 'up', '▲', 'up');
    makeButton(div, 'down', '▼', 'down');
    makeButton(div, 'del', 'x', 'delete');

    div.className = 'buttons';
    element.appendChild(div);

    whatButtonsDo();

}

 const whatButtonsDo = () => {
    $('.up').on('click', (e) => {
        const li = e.target.parentNode.parentNode;
        const parent = li.parentNode;
        if (li.previousElementSibling) {
        parent.insertBefore(li, li.previousElementSibling);
        localStorage.removeItem('list');
        localStorage.setItem('list', $('ul').html());
    }
    })
    $('.down').on('click', (e) => {
    const li = e.target.parentNode.parentNode;
    const parent = li.parentNode;
    if (li.nextElementSibling) {
        parent.insertBefore(li.nextElementSibling, li);
        localStorage.removeItem('list');
    localStorage.setItem('list', $('ul').html());
    }
    })
    $('.delete').on('click', (e) => {
    const li = e.target.parentNode.parentNode;
    const parent = li.parentNode;
    parent.removeChild(li);
    localStorage.removeItem('list');
    localStorage.setItem('list', $('ul').html());
    }) 
 }
  



hide.addEventListener('click', () => {

    if (listName.value === '') {

     listName.setAttribute('placeholder', 'Please, name your list');
   
    } else {

        localStorage.clear();

        listName.setAttribute('placeholder', '');

        hide.style.opacity = '0';
        divOne.style.opacity = '0';

        divTwo = document.createElement('div');
        ul = document.createElement('ul');
        
        divTwo.className = 'two';
        wrapper.appendChild(divTwo);

        appendToDiv(divTwo, h1, addItem, add, ul);

        setTimeout(() => {
            hide.style.display = 'none';
            divOne.style.display = 'none';  
        }, 1000)

        localStorage.setItem('listName', listName.value);

        h1.textContent = listName.value;
        h1.className = 'listName';
        
        listName.value = '';

        addItem.className = 'input';
      
        add.className = 'btn-ok';
        add.textContent = 'Add Item';
       
        ul.className = 'ul';

    }
    
})

previousLists.addEventListener('click', () => {

    hide.style.opacity = '0';
    divOne.style.opacity = '0';

    divTwo = document.createElement('div');
    ul = document.createElement('ul');
    
    divTwo.className = 'two';
    wrapper.appendChild(divTwo);

    appendToDiv(divTwo, h1, addItem, add, ul);

    setTimeout(() => {
        hide.style.display = 'none';
        divOne.style.display = 'none';  
    }, 1000)


    h1.textContent = localStorage.getItem('listName');
    h1.className = 'listName';
    
    listName.value = '';

    addItem.className = 'input';
  
    add.className = 'btn-ok';
    add.textContent = 'Add Item';
   
    ul.className = 'ul';

    $('ul').html(localStorage.getItem('list'));
    whatButtonsDo();
})

add.addEventListener('click', () => {

    if (addItem.value === '') {

        addItem.setAttribute('placeholder', 'Tell me what to add');
  
    } else {


        const li = document.createElement('li');

        addItem.setAttribute('placeholder', '');

        

        li.className = 'li';
        ul.appendChild(li);
        li.textContent = addItem.value;
        addItem.value = '';
        addButtons(li);
        
        divTwo.appendChild(anotherList);
        anotherList.className = 'btn-ok';
        anotherList.classList.add('btn-another-list');
        
        anotherList.textContent = 'Create Another List'

        localStorage.removeItem('list');
        localStorage.setItem('list', $('ul').html());
        
    }
})



anotherList.addEventListener('click', () => {
    hide.style.display = 'block';
    divOne.style.display = "block";

    

    setTimeout(() => {
        hide.style.opacity = '1';
        divOne.style.opacity = '1';
    }, 100)

    divTwo.removeChild(ul);
    wrapper.removeChild(divTwo);


})