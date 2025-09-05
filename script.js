const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');


// Add Event Listerer
function addEvent(e) {
  e.preventDefault();

  //Validation Rule
  const input = itemInput.value;
  if (input === '') {
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

clearFilter();
  itemInput.value = '';
  
}
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  clearFilter();
  return button;
}
function createIcon(classes) {
  const i = document.createElement('i');
  i.className = classes;
  return i;
}
function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    confirm('are you sure?')
    e.target.parentElement.parentElement.remove();
clearFilter();
  }
}
function clearItems() {
  while (itemList.firstElementChild) {
    itemList.firstElementChild.remove();
  }
  clearFilter();
}
function clearFilter() {
  const items = itemList.querySelectorAll('li')
  if(items.length === 0) {
  filter.style.display = 'none';
  clearBtn.style.display = 'none';
} 
else {
  filter.style.display = 'block';
   clearBtn.style.display = 'block';
}
}

function itemFilter(e){
  const items = itemList.querySelectorAll('li')
  const text = e.target.value.toLowerCase();
  
  items.forEach(item => {
    const filter = item.textContent.toLowerCase();

    if(filter.indexOf(text) != -1){
      item.style.display = 'flex';
    } else{
      item.style.display = 'none';
    }
  })


}


itemForm.addEventListener('submit', addEvent);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
filter.addEventListener('input', itemFilter);




clearFilter();