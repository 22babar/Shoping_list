const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById('item-list');

// Add Event Listerer
function addEvent(e) {
    e.preventDefault();

    //Validation Rule
    const input = itemInput.value;
    if(input === ''){
        alert('You need to enter value');
        return;
    }
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input));

    const button = createButton('remove-item btn-link text-red');
    const i = createIcon('fa-solid fa-xmark');
    button.appendChild(i);

    li.appendChild(button);

    itemList.appendChild(li);
    itemInput.value = '';
}
function createButton(classes){
 const button = document.createElement('button');
 button.className = classes;
 return button;
}
function createIcon(classes){
    const i = document.createElement('i');
    i.className = classes;
    return i;
}
itemForm.addEventListener('submit',addEvent)