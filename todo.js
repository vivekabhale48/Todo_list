const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('button');
const todoList = document.getElementById('todoList');


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let inputValue = todoInput.value.trim();
    if (inputValue == '') {
        alert('Enter some todo item before adding')
    }
    else {

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between p-3';
        li.innerHTML = `<span>
                            <input type="checkbox" />
                            <div class="edit-input d-inline d-none">
                                <input type="text" placeholder="Updated Value">
                                <button class="btn btn-sm btn-primary">Update</button>
                                <button class="btn btn-danger btn-sm">Cancel</button>
                            </div>
                            <p class="todo-input d-inline">${inputValue}</p>
                        </span>
                        <div>
                            <i class="bi bi-pencil-square"></i>
                            <i class="bi bi-trash"></i>
                        </div>`
        
        
        todoList.append(li);

        const trash = li.querySelector('div > i:last-child');
        const edit = li.querySelector('div > i:first-child');
        const p = li.querySelector('p.todo-input'); 
        // const p = li.getElementByClassName('todo-input');
        const checkbox = li.querySelector('input');

        const editContainer = li.querySelector('.edit-input');
        const editInput = li.querySelector('.edit-input>input'); 
        const btnUpdate = li.querySelector('.edit-input>button.btn-primary');
        const btnCancel = li.querySelector('.edit-input>button.btn-danger');


        
        trash.addEventListener('click', () => {
            li.remove();
        })

        edit.addEventListener('click', () => {
             editInput.value = inputValue;
             p.classList.toggle('d-none');
             editContainer.classList.toggle('d-none');   
        })

        btnUpdate.addEventListener('click',()=>{
            const editedValue = editInput.value.trim();
            if(editedValue == ''){
                alert('Enter some value before editing');
            }
            else{
                inputValue = editedValue; //Also works without this line
                p.textContent = editedValue;
                p.classList.toggle('d-none');
                editContainer.classList.toggle('d-none');
            }
        })
        // console.log(btnUpdate);

        btnCancel.addEventListener('click',()=>{
            p.classList.toggle('d-none');
            editContainer.classList.toggle('d-none');
        })
        
    }
})

