import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import useForm from './hooks/useform'

const App=()=> {

  const {todoList,
    todo,
    inputHandler,
    submitHandler,
    deleteHandler
    ,updateFavourite} = useForm();
  return (
    <div className="App">
      <div className="header-container">
        <Header />
        </div>
      <div className="nav-container">
        <Nav todoList={todoList}
        todo={todo}
        inputHandler={inputHandler}
        submitHandler={submitHandler}/>
        </div>
      <div className="main-container">
        <Main todoList={todoList}
        deleteHandler={deleteHandler}
        updateFavourite={updateFavourite}/>
      </div>
    </div>
  );
}

export default App;
