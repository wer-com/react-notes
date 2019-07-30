import React from 'react'
import starIcon from '../img/star-4-xxl.png'
import trashIcon from '../img/trash-2-xxl.png'
import starClickedIcon from '../img/star-xxl.png' 

const Main = props => {

    const length = props.todoList.length;

    const noFavourite = index => <img alt="star" className="starIcon" src={starIcon} onClick={()=>props.updateFavourite(index)}/>;
    const favourite = index => <img alt="star" className="starIcon" src={starClickedIcon} onClick={()=>props.updateFavourite(index)}/>;

    return (
        <main>
            {length?props.todoList.map((i,index)=>(
                <div key={index} className="note-list">
                    <div className="title">{i.title}</div>
                    <div className="desc">{i.description}</div>
                    <div>
                        {i.isFavourite?favourite(index):noFavourite(index)}
                        </div>
                    <div>
                        <img alt="trash" className="starIcon" src={trashIcon} onClick={()=>props.deleteHandler(index)}/>
                        </div>
                </div>

            )):<h3>You don't have any notes :(</h3>}
        </main>
    )
}

export default Main;