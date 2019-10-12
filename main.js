const divOne = document.querySelector('.one');
let divTwo;
const wrapper = document.querySelector('.wrapper');
const hide = document.querySelector('.btn-ok');
const unhide = document.querySelector('.unhide');
const listName = document.querySelector('.input');
let h1 = document.createElement('h1');;
let add = document.createElement('button');
let addItem = document.createElement('input');
let ul;
const anotherList = document.createElement('button');



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

        

        setTimeout(() => {
            hide.style.display = 'none';
            divOne.style.display = 'none';  
        }, 1000)

        h1.textContent = listName.value;
        h1.className = 'listName';
        divTwo.prepend(h1);
        listName.value = '';


        addItem.className = 'input';
        divTwo.appendChild(addItem);

        
        add.className = 'btn-ok';
        add.textContent = 'Add Item';
        divTwo.appendChild(add);
        divTwo.appendChild(ul);
        ul.className = 'ul';

    }
    
})

add.addEventListener('click', () => {
    if (addItem.value === '') {
        addItem.setAttribute('placeholder', 'Tell me what to add');
    } else {
        addItem.setAttribute('placeholder', '');
        let li = document.createElement('li');
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

const addButtons = (element) => {
    let div = document.createElement('div');
    let del = document.createElement('button');
    let up = document.createElement('button');
    let down = document.createElement('button');

    div.className = 'buttons';

    div.appendChild(up);
    up.textContent = '▲';
    up.className = 'up';
    div.appendChild(down);
    down.textContent = '▼';
    down.className = 'down';
    div.appendChild(del);
    del.innerHTML = '<strong>x</strong>';
    del.className = 'delete'

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