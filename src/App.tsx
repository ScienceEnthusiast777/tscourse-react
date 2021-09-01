import React from "react";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import { useState } from "react";
import { ToDo } from "./todo.model";
const App: React.FC = () => {
  const [todos, setToDos] = useState<ToDo[]>([]);
  // const todos = [
  //   { id: "t1", text: "do something fun" },
  //   { id: "t2", text: "do something sporty" },
  //   { id: "t3", text: "do something clever" },
  //   { id: "t4", text: "do something foolish" },
  // ];
  const toDoDeleteHandler = (toDoId: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((toDo) => {
        return toDo.id !== toDoId;
      });
    });
  };
  const toDoAddHandler = (text: string) => {
    setToDos((prevToDos) => [
      ...prevToDos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  return (
    <div className="App">
      <ToDoList items={todos} onDeleteToDo={toDoDeleteHandler} />
      <NewToDo addHandler={toDoAddHandler}></NewToDo>
    </div>
  );
};

export default App;
