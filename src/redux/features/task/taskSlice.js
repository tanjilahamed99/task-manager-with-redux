import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.task.push(payload);
    },
  },
});

export const {addTask} =  taskSlice.actions

export default taskSlice.reducer;
