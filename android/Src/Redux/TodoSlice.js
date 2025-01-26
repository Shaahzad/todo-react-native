import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};



const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos[index] = action.payload;
        }
    }
});


export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;