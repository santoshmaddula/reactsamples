import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoData from "./ToDoData";
import ToDoItem from "./ToDoItem";

// function ToDo() {
//   const todocomponent = ToDoData.map(data => {
//     return <ToDoItem key={data.id} todo={data} />;
//   });

//   return (
//     // <div className="todo-list">
//     //   // <ToDoItem />
//     //   // <ToDoItem />
//     //   // <ToDoItem />
//     //   // <ToDoItem />

//     // </div>

//     <div className="todo-list">{todocomponent}</div>
//   );
// }

/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments
 * in the code for some help on accomplishing this one
 *
 * Challenge:
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ToDoData,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.boxClick = this.boxClick.bind(this);
  }

  boxClick() {
    console.log("I was clicked");
    this.setState(prevState => {
      return {
        todo: prevState.todo,
        count: prevState.count + 1
      };
    });
  }

  handleClick(id) {
    // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)

    console.log("I was clicked", id);
    this.setState(prevState => {
      const updatedToDo = prevState.todo.map(item => {
        if (item.id === id) {
          //item.completed = !item.completed;
          console.log("isnide the otem", item);
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
      return {
        todo: updatedToDo
      };
    });
  }

  render() {
    const todocomponent = this.state.todo.map(data => {
      return (
        <ToDoItem key={data.id} todo={data} handleClick={this.handleClick} />
      );
    });

    return (
      <div>
        <img
          onMouseOver={() => console.log("Hovered!")}
          src="https://www.fillmurray.com/200/100"
        />
        <h1>{this.state.count}</h1>
        <div className="todo-list">{todocomponent}</div>
        <button onClick={this.boxClick}>Click!</button>
      </div>
    );
  }
}

export default ToDo;
