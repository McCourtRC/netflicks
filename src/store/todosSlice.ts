import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from 'types/todo';

interface TodosState {
  list: Todo[];
}

const initialState: TodosState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  // uses immer for immutable updates
  reducers: {
    addTodo({ list }, action: PayloadAction<Todo>) {
      list.push(action.payload);
    },
    removeTodo({ list }, action: PayloadAction<number>) {
      list.splice(action.payload, 1);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;

export const todosSelector = (state: { todos: TodosState }) => state.todos.list;
