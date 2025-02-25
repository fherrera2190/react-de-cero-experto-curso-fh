import { Todo, TodoAction } from "./interfaces";


export const todoReducer = (
  initialState: Todo[] = [],
  action: TodoAction
): Todo[] => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];
    case "[TODO] Remove todo":
      return initialState.filter((todo) => action.payload !== todo.id);
    case "[TODO] Toggle todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
