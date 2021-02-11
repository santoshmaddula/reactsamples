import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoData from "./ToDoData";
import ToDoItem from "./ToDoItem";

function ToDo() {
  const todocomponent = ToDoData.map(data => {
    return <ToDoItem key={data.id} todo={data} />;
  });

  return (
    // <div className="todo-list">
    //   // <ToDoItem />
    //   // <ToDoItem />
    //   // <ToDoItem />
    //   // <ToDoItem />

    // </div>

    <div className="todo-list">{todocomponent}</div>
  );
}

export default ToDo;
