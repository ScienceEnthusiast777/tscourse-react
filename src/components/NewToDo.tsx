import React, { useRef } from "react";

interface INewToDoProps {
  addHandler: (toDoText : string) => void;
}

const NewToDo: React.FC<INewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const toDoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.addHandler(enteredText);
  };

  return (
    <form onSubmit={toDoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">ToDo Text</label>
        <input type="text" id="todo_text" ref={textInputRef} />
      </div>
      <button type="submit">ADD ITEM</button>
    </form>
  );
};

export default NewToDo;
