import React, { useContext } from "react";
import todoContex from "../contex/todoContex";

const ListRender = (props) => {
  const dispatch = useContext(todoContex).dispatch;
  const markHandler = (task) => {
    console.log(task);
    dispatch({type:'toggle',id:task.id})
  }
  return (
    <>
      {props.list.map((task) => {
        return (
          <div className={`box ${task.completed?'done':'not-done'}`} key={task.id}>
            <div className="task">
              {task.title} ({new Date(task.date).toLocaleDateString()})
            </div>
            <div>
              <button className="btn" onClick={()=>{markHandler(task)}}>Mark {!task.completed?'Completed':'Not-Completed'}</button>
              <button className="btn" onClick={()=>dispatch({type:'Delete',id:task.id})}>Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListRender;
