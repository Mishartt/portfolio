const addBtn = document.querySelector('.add__wrapper');
const input = document.getElementById('inp');
const myTasks = document.querySelector('.my__tasks');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todos = [];

function Task(description){
    this.description = description;
    this.completed = false;
};
let x;
const newTemp = (task,i) =>{
   ///////
   if(tasks[i].completed){
    x = 'checked';
    console.log('+');
    }else{
        x = '';
    }
    return `<div class="todo__item ${x}">
                <div class="description" onclick="complete(${i})">
                <input  class="checkbox" type="checkbox" ${task.completed ? 'checked' : ''}  >
               <h3>${task.description}</h3>
            </div>
            <div onclick="del(${i})" class="del">
                    <span class = "xxx"> X </span>
                    </div>
            </div>`
   
}

const filter = () =>{
    const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    
    const completedTasks = tasks.length && tasks.filter(item => item.completed == true)
    
    tasks = [...activeTasks,...completedTasks];
}

const html = () =>{
    myTasks.innerHTML = '';
   if(tasks.length > 0){
       filter();
       tasks.forEach((item,i)=> { 
           myTasks.innerHTML += newTemp(item,i);
       });

       todos = document.querySelectorAll('.todo__item')
       
   }
}

html();


const update = () =>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
};

const complete = i => {
    
    console.log(i);
    tasks[i].completed = !tasks[i].completed;
    if(tasks[i].completed){
        console.log('1');
        todos[i].classList.add('checked');
        

    }else{
        todos[i].classList.remove('checked');
        console.log('2');
    }

    update();
    html();
    // todos[i].classList.add('checked')
    // console.log(todos[i]);
    

  
}



addBtn.addEventListener('click', ()=>{
    console.log('x');
    tasks.push(new Task(input.value));
    
    update();
    html();
    input.value = ' '
});

const del = i => {

   tasks.splice(i,1);
  
   update();
   html();
 
}