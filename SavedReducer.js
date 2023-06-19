import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
    name:"gifts",
    initialState:{
        gifts:[],
    },
    reducers:{
        savedgifts:(state,action) => {
            state.gifts.push({...action.payload})
        }
    }
});


export const {savedgifts} = SavedSlice.actions

export default SavedSlice.reducer