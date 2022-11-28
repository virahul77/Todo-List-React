import React, { useContext } from "react";
import todoContex from "../contex/todoContex";
import ListRender from "./ListRender";

const Today = () => {
  const date = new Date();
  const list = useContext(todoContex).todoList;
  const filteredList = list.filter(task => {
    let taskDate = new Date(task.date);
    if(date.getFullYear() !== taskDate.getFullYear()) return false;
    if(date.getMonth() !== taskDate.getMonth()) return false;
    if(date.getDate() !== taskDate.getDate()) return false;
    return true;
  })
  return (
    <div id="today-list">
      <h2>Today,s Task</h2>
      <ListRender list={filteredList} />
    </div>
  );
};

export default Today;
