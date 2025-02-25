import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
import { Todo, TodoAction } from "../08-useReducer/interfaces";

const init = (): Todo[] => {
  return JSON.parse(localStorage.getItem("todos") as string) || [];
};

export const useTodo = (initialState: Todo[] = []) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  const handleNewTodo = (todo: Todo) => {
    const action: TodoAction = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id: number) => {
    const action: TodoAction = {
      type: "[TODO] Remove todo",
      payload: id,
    };
    dispatch(action);
  };
  const handleToggleTodo = (id: number) => {
    const action: TodoAction = {
      type: "[TODO] Toggle todo",
      payload: id,
    };
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
