import React from "react";
import "./ToDoList.css";

interface IToDoListProps {
  items: { id: string; text: string }[];
  onDeleteToDo: (id: string) => void;
}

const ToDoList: React.FC<IToDoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteToDo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
