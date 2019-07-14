var addButton = document.getElementById('addButton');
var removeButton = document.getElementById('removeButton');
var removeAllButton = document.getElementById('removeAllButton')
var ul = document.getElementById('list');

addButton.addEventListener('click', addFunction);
removeButton.addEventListener('click', removeFunction);
removeAllButton.addEventListener('click', removeEverything)

function addFunction() {
    let textForLabel = document.getElementById('textInput')
    if (textForLabel.value === '') {
        return;
    } else {
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        let label = document.createElement('label');

        textNode = document.createTextNode(textForLabel.value);


        checkbox.setAttribute('type', 'checkbox');
        label.appendChild(textNode);

        li.appendChild(checkbox);
        li.appendChild(label);

        ul.appendChild(li);

        textForLabel.value = '';

    }
}

function removeFunction() {
    let li = ul.children;
    for (let index = 0; index < li.length; index++) {
        console.log(index);
        if (li[index].children[0].checked) {
            ul.removeChild(li[index]);
            index--;
        }

        console.log(index);
    }
}

function removeEverything() {
    let li = ul.children;
    for (let index = 0; index < li.length;) {
        ul.removeChild(li[index])
    }
}
