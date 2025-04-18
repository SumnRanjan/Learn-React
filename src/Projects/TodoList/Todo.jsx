import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData  , setLocalStorageTodoData} from "./TodoLocalStorage";


export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());
  
  const handleFormSumbit = (inputValue) => {
    const {id , content , checked}  = inputValue;
    if (!content) return;
    // if (task.includes(content)) {
    //   return;
    // }
    const ifTodoContentMatched = task.find((curTask) => curTask.content === content)
    if(ifTodoContentMatched) return;

    setTask((prevtask) => [...prevtask, {id , content ,checked}]);
  };


  //todo delete
  const handleDeleteTodo = (value) => {
    const updateTask = task.filter((curTask) => curTask.content !== value);
    setTask(updateTask);
  };

  const handleClearTodoData = () => {
    setTask([]);
  };

  //todo handelchecked
  const handleCheckedTodo = (value) =>{
    const updatedTask = task.map((currTask) =>{
      if(currTask.content === value){
        return {...currTask , checked : !currTask.checked}
      }else{
        return currTask;
      }
    })
    setTask(updatedTask);
  }

  //local storge
  setLocalStorageTodoData(task);

  return (
    <section className="todo-container">
      <header className="header">
        <h1>Todo List</h1>
        <TodoDate/>
      </header>
      <TodoForm onAddTodo={handleFormSumbit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return <TodoList 
            key={curTask.id} 
            data={curTask.content}
            checked={curTask.checked} 
            onHandleDeleteTodo={handleDeleteTodo}
            onHandleCheckedTodo={handleCheckedTodo}
            />;
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};
