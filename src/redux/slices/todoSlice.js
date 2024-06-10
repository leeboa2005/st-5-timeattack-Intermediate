// TODO: todoSlice 를 작성하세요.
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
