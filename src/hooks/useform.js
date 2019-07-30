import {useState} from 'react'


const useForm=() =>{

    const [todo,setTodo] = useState({
        title:'title',
        description:'description',
        isFavourite:false
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
        const temp = todoList.map(i=>i);
        temp.push({title:todo.title,description:todo.description,isFavourite:todo.isFavourite})
        setTodoList(temp);
    }

    const deleteHandler = id =>{
        const temp = todoList.filter((i,index)=>(
            index!==id?i:''
        ));
        setTodoList(temp);
    }

    const updateFavourite = id =>{
        const favourite = todoList.filter((i,index)=>(
            index===id?i:''
        ));
        favourite[0].isFavourite=!favourite[0].isFavourite;
        const temp = todoList.filter((i,index)=>(
            index!==id?i:favourite[0]
        ));
        setTodoList(temp);
    }

    return {
        todoList,
        todo,
        inputHandler,
        submitHandler,
        deleteHandler,
        updateFavourite
    }
    
}

export default useForm;