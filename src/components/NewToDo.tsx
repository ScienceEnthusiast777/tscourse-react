import React, { useRef } from "react";
import "./NewToDo.css";
interface INewToDoProps {
  addHandler: (toDoText: string) => void;
}

const NewToDo: React.FC<INewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const toDoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInputRef.current!.value.length > 0) {
      const enteredText = textInputRef.current!.value;
      props.addHandler(enteredText);
      textInputRef.current!.value = "";
    }
  };

  return (
    <form className="form-control" onSubmit={toDoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">ToDo Text</label>
        <input type="text" id="todo_text" ref={textInputRef} />
      </div>
      <button type="submit">ADD ITEM</button>
    </form>
  );
};

export default NewToDo;
