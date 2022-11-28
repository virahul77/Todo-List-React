import React, { useContext } from "react";
import todoContex from "../contex/todoContex";
import ListRender from "./ListRender";

const Next7Days = () => {
  const date = new Date();
  const list = useContext(todoContex).todoList;
  const filteredList = list.filter(task => {
    const timeDiff = Math.abs(new Date(task.date) - date);
    const daysDiff = Math.ceil(timeDiff/(1000*60*60*24));
    return daysDiff < 8;
  })

  return (
    <div id="next-list">
      <h2>Next 7 Days</h2>
      <ListRender list={filteredList}/>
    </div>
  );
};

export default Next7Days;
