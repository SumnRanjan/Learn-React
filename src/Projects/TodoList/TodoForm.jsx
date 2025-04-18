import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
  const [inputValue, setInputValue] = useState({})
  const handleInputChange = (value) => {
    setInputValue({id : value , content : value , checked : false});
  }; 

  const handleFormSumbit = (event) =>{
    event.preventDefault()
    onAddTodo(inputValue)
    setInputValue({id : "" , content : "" , checked : false})
  }

  return (
    <section className="form">
      <form onSubmit={handleFormSumbit}>
        <input
          type="text"
          className="todo-input"
          autoComplete="off"
          placeholder="Enter a task"
          value={inputValue.content}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <button className="todo-btn" type="submit">
          Add Task
        </button>
      </form>
    </section>
  );
};
