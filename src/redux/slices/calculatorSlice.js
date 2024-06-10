// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    result: 0,
};
const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addValue: (state, action) => {
            state.result += action.payload;
        },
        subtractValue: (state, action) => {
            state.result -= action.payload;
        },
    },
});

export const { addValue, subtractValue } = calculatorSlice.actions;
export default calculatorSlice.reducer;
