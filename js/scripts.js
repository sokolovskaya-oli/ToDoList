let toDo = function Todo(){
    let todoArr =[ ]    
    

   this.create = function(){
let htmlTodo =   `<div class="todo_option">
                    <input type="text" id="todo_input">
                     </div>
                    <div class="todos">
                      <ul id="todos_lists">
                      </ul>
                    </div> `
    let element = document.querySelector('.todo_list')
    element.innerHTML =  htmlTodo

    let input = document.querySelector('#todo_input')
    input.addEventListener('keyup', (event)=>{
    if (event.keyCode == '13'){
      
        this.add(event.target.value)
         event.target.value =" "
    }
    })

   }

    this.add = function(task){
        let todoTask = {
            todo: task, 
            flag: false
        }
    todoArr.push(todoTask)
    console.log(todoArr)

    this.show()
}
    this.delete = function(id){
        todoArr.splice(id,1)
        this.show()
       
    }

    this.edited = function(id){
        let editText = todoArr[id].textContent =prompt();
        todoArr.splice(id,1, editText)
        this.show()
    }


    this.show = function(){
    let elementUl = document.querySelector('#todos_lists')

    elementUl.innerHTML ="";
    
    
    todoArr.forEach((item, index)=>{
        let li = document.createElement('li')
        li.classList.add('todo_li')
        li.innerHTML =`${item.todo} <br> <button class="btn_edit" id="${index}">Edit</button> <br> <button class="btn_delete" id="${index}">Delete</button>`
        elementUl.appendChild(li)
        //зачеркивание дел через строки
        
        li.addEventListener('dblclick', function(){
            li.style.textDecoration ='line-through';
        })
        li.addEventListener('click', function(){
            li.style.textDecoration ='none';
        })
    })

    let deleteBtn = document.querySelectorAll('.btn_delete')
    
    deleteBtn.forEach((btn,index)=>{
        btn.addEventListener('click', (event)=>{
            let id = +event.target.id
            this.delete(id)
            } )
    })

    let editBtn = document.querySelectorAll('.btn_edit')
    
    editBtn.forEach((btn,index)=>{
        btn.addEventListener('click', (event)=>{
            let id = +event.target.id
            this.edited(id)
            } )
    })

}
}

window.addEventListener('load', ()=>{
    let todo =new toDo()
    todo.create();
})






