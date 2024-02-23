import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeMode : localStorage.getItem("theme")?  localStorage.getItem("theme") : "light",
}

export const darkModeSlice = createSlice({
    name : "mode" ,
    initialState ,
    reducers : {
        setMode: (state , action) => {
            state.themeMode = action.payload;
        }
    }
})


export const {setMode} = darkModeSlice.actions;


export default darkModeSlice.reducer;