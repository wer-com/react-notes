import React from 'react'

const Create = (props)=> {
    return (
        <div className="create-container">
            <div className="note-header">New Note 
                <p onClick={()=>props.setCreating(false)}>x</p>
                </div>
            <form onSubmit={props.submitHandler}>
                <div className="title-note">
                    <input
                    value={props.todo.title}
                    onChange={props.inputHandler}
                    name="title"
                    type="text"/>
                </div>
                <div className="description">
                    <textarea 
                    name="description"
                    value={props.todo.description}
                    onChange={props.inputHandler}></textarea>
                </div>
                <div className="send-button-div">
                    <button type="submit"className="send-button">
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Create;