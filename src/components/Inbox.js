import React, { useState, useRef, useContext } from "react";
import todoContex from "../contex/todoContex";
import ListRender from "./ListRender";

const Inbox = (props) => {
  const [newTask,setNewTask] = useState(false);
  const titleRef = useRef();
  const calenderRef = useRef();
  const todoCtx = useContext(todoContex);
  const list = todoCtx.todoList;
  const addHandler = (e)=>{
    e.preventDefault();
    let title = titleRef.current.value;
    if(!title) return alert('Task cannot be empty');
    todoCtx.dispatch({type:'AddTodo',title})
    setNewTask(false);
  }

  return (
    <div>
      <h2>Inbox</h2>
      {!newTask && (
        <button className="mybtn" onClick={()=>setNewTask(true)} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={titleRef}></input>
          <div className="buttons">
            <button className="mybtn" id="add-list" onClick={addHandler}>
              Add Task
            </button>
            <button className="mybtn" onClick={()=>setNewTask(false)}>
              Cancel
            </button>
            <input
              type="date"
              ref={calenderRef}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        <ListRender list={list} />
      </div>
    </div>
  );
};

export default Inbox;
