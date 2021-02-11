import React from "react";

function ToDoItem(props) {
  console.log(props);
  return (
    // <div className="todo-item">
    //   <input type="checkbox" />
    //   <p>Placeholder text here</p>
    // </div>
    <div className="todo-item">
      <input type="checkbox" checked={props.todo.completed} />
      <p>{props.todo.text}</p>
    </div>
  );
}

export default ToDoItem;
