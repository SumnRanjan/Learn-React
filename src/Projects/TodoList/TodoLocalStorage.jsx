const todoKey = "reactTodo"
export const getLocalStorageTodoData = () =>{
    try {
        const rawTodos = localStorage.getItem(todoKey);
        if (!rawTodos || rawTodos === "undefined") return [];
        return JSON.parse(rawTodos);
      } catch (err) {
        console.error("Failed to parse localStorage data", err);
        return [];
      }
}

export const setLocalStorageTodoData = (task) =>{
    return localStorage.setItem(todoKey , JSON.stringify(task))
}