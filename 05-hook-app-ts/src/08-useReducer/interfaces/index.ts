export interface Todo {
    id: number;
    description: string;
    done: boolean;
  }
  export interface State {
    todos: Todo[];
    handleDeleteTodo: (id: number) => void;
    handleToggleTodo: (id: number) => void;
    handleNewTodo: (todo: Todo) => void;
    todosCount: number;
    pendingTodosCount: number;
  }
  
  export interface UseTodoType {
    todos: Todo[];
    handleDeleteTodo: (id: number) => void;
    handleToggleTodo: (id: number) => void;
    handleNewTodo: (todo: Todo) => void;
    todosCount: number;
    pendingTodosCount: number;
  }
  
  export type TodoAction =
    | { type: "[TODO] Add Todo"; payload: Todo }
    | { type: "[TODO] Remove todo"; payload: number }
    | { type: "[TODO] Toggle todo"; payload: number };