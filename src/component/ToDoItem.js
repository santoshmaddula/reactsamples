import React from "react";

function ToDoItem(props) {
  console.log(props);
  return (
    // <div className="todo-item">
    //   <input type="checkbox" />
    //   <p>Placeholder text here</p>
    // </div>
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        //onChange={() => console.log("changed")}

        onChange={() => props.handleClick(props.todo.id)}
      />
      <p>{props.todo.text}</p>
    </div>
  );
}

export default ToDoItem;
