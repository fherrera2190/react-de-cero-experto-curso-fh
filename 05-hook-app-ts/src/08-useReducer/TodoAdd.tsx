import { useForm } from "../hooks/useForm";
import { Todo } from "./interfaces";

interface TodoAddProps {
  onNewTodo: (todo: Todo) => void;
}

export const TodoAdd = ({ onNewTodo }: TodoAddProps) => {
  const {
    formState: { description },
    onInputChange,
    onResetForm,
  } = useForm({
    description: "",
  });

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (description.length < 1) return;
    const newTodo: Todo = {
      id: new Date().getTime() * 3,
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-primary mt-3">
        Agregar
      </button>
    </form>
  );
};
