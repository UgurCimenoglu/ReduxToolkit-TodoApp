import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  todo: string;
  isCompleted: boolean;
};

const initialState: Todo[] = [];

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((t) => t.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      state.map((t) => {
        if (t.id === action.payload) {
          t.isCompleted = true;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
