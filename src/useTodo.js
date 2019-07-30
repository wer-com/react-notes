import {useState} from 'react'

const useTodo=() => {

    const [todo,setTodo] = useState({
        title:'',
        description:'',
        done:false
      });

    const [todoList,setTodoList] = useState([]);

      const inputHandler = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setTodo({...todo,[name]:value})
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const tab = todoList.map(i=>i);
        tab.push({title:todo.title,description:todo.description,done:todo.done});
        setTodoList(tab)
      }

    return {
        todo,
        inputHandler,
        submitHandler,
        todoList
    }
}

export default useTodo;