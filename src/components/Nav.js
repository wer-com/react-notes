import React,{useState} from 'react';
import Create from './Create';
import addIcon from '../img/add-xxl.png'
import starIcon from '../img/star-4-xxl.png'
import timeIcon from '../img/time-8-xxl.png'

const Nav = (props) => {
    
    const [isCreating,setCreating] = useState(false);
    return (
        <React.Fragment>
            <nav className="nav">
                <div className="add-container" onClick={()=>setCreating(!isCreating)}>
                    <div className="add">
                    <img alt="plus" src={addIcon}/>
                    </div>  
                    <div  className="nav-element create">
                        Create
                    </div>
                </div> 
                <div className="history-container"> 
                    <div className="history">
                        <img alt="plus" src={timeIcon}/> 
                    </div>
                    <div className="nav-element">
                        History
                    </div>
                    </div>
                <div className="fav-container">
                    <div className="fav">
                        <img alt="plus" src={starIcon}/>
                    </div>
                    <div className="nav-element">
                        Favourites
                    </div>
                </div>
            </nav>
            {isCreating?<Create setCreating={setCreating}
            todoList={props.todoList}
            todo={props.todo}
            inputHandler={props.inputHandler}
            submitHandler={props.submitHandler}/>:''}
        </React.Fragment>
    )
}

export default Nav;