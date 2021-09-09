import { useAppDispatch, useAppSelector } from 'store';
import { Todo } from 'types/todo';
import { addTodo, removeTodo, todosSelector } from 'store/todosSlice';

const useTodos = () => {
  const todos = useAppSelector(todosSelector);
  const dispatch = useAppDispatch();

  return {
    todos,
    addTodo(todo: Todo) {
      dispatch(addTodo(todo));
    },
    removeTodo(atIndex: number) {
      dispatch(removeTodo(atIndex));
    },
  };
};

export default useTodos;
