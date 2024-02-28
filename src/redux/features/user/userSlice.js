import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignedTo: "Goku",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
