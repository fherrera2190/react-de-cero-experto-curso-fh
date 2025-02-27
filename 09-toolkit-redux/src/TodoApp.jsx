import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  const nextTodo=()=>{
    setTodoId(todoId + 1);
  }

  const prevTodo=()=>{
    if(todoId <= 1) return;
    setTodoId(todoId - 1);
  }


  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "Done" : "Pending"}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
      <button onClick={prevTodo}>Prev todo</button>
      <button onClick={nextTodo}>Next todo</button>
    </>
  );
};
