import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      desc:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Goku",
      priority: "high",
    },
  ],
  userTask: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.task.at(-1);
        state.task.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    updateTask: (state, { payload }) => {
      const target = state.task.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
    deleteTask: (state, { payload }) => {
      state.task = state.task.filter((item) => item.id !== payload);
    },

    specifyUser: (state, { payload }) => {
      state.userTask = state.task.filter((item) => item.assignedTo === payload);
    },
  },
});

export const { addTask, updateTask, deleteTask, specifyUser } =
  taskSlice.actions;

export default taskSlice.reducer;
