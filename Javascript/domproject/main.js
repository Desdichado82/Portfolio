let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// form submit event 

form.addEventListener('submit',addItem);

//Delete from list 
itemList.addEventListener('click',removeItem);


// filter event 

filter.addEventListener('keyup',filterItems);

//add item 

function addItem(e){
    e.preventDefault();
    
    // get input value 

    let newItem = document.getElementById('item').value;

    // Create new li element 

    let li = document.createElement('li');

    // Add class 

    li.className = 'list-group-item';

    // Add text node with input value 

    li.appendChild(document.createTextNode(newItem));

    // create del button element 

    let deleteBtn = document.createElement('button');

    // add classes to delete button 

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node 

    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li 

    li.appendChild(deleteBtn);

    // Append li to list 

    itemList.appendChild(li);

}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter items

function filterItems(e){
    // convert text to Lowercase
    let text = e.target.value.toLowerCase();
    //get lis

    let items = itemList.getElementsByTagName('li');
    // convert to an array 

    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display ='block';

        }else{
            item.style.display = 'none';
        }
        
    });
}