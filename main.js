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
    const up = makeButton(div, 'up', '▲', 'up');
    const down = makeButton(div, 'down', '▼', 'down');
    const del =makeButton(div, 'del', 'x', 'delete');

    div.className = 'buttons';
    element.appendChild(div);

    up.addEventListener('click', () => {
        const li = up.parentNode.parentNode;
        const parent = li.parentNode;
        if (li.previousElementSibling) {
            parent.insertBefore(li, li.previousElementSibling);
        }
    })
    down.addEventListener('click', () => {
        const li = down.parentNode.parentNode;
        const parent = li.parentNode;
        if (li.nextElementSibling) {
            parent.insertBefore(li.nextElementSibling, li);
        }
    })
    del.addEventListener('click', () => {
        const li = del.parentNode.parentNode;
        const parent = li.parentNode;
        parent.removeChild(li);
    })
}



hide.addEventListener('click', () => {

    if (listName.value === '') {

     listName.setAttribute('placeholder', 'Please, name your list');
   
    } else {

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

        h1.textContent = listName.value;
        h1.className = 'listName';
        
        listName.value = '';

        addItem.className = 'input';
      
        add.className = 'btn-ok';
        add.textContent = 'Add Item';
       
        ul.className = 'ul';

    }
    
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