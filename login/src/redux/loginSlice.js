import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name:'login',
    initialState:{
        user:false
    },
    reducers: {
        getUser:(state, action) => {
            state.user = action.payload;
        },
        close: (state) => {
            state.user = false;
        }
    }
})

export const { getUser, close } = loginSlice.actions;

export default loginSlice.reducer;