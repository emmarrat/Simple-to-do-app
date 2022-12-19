import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { TasksType} from "../../types";

import {addNewTask, deleteTask, fetchTasks} from "./toDoAppThunks";

interface TasksState {
  tasks: TasksType[];
  fetchLoading: boolean;
}

const initialState: TasksState = {
  tasks: [],
  fetchLoading: false,
};


export const toDoAppSlice = createSlice({
  name: 'toDoApp',
  initialState,
  reducers: {
    toggleCheckBox: (state, action: PayloadAction<number>,) => {
      state.tasks[action.payload].status = !state.tasks[action.payload].status;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.fetchLoading = false;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(addNewTask.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(addNewTask.fulfilled, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(addNewTask.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(deleteTask.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(deleteTask.rejected, (state) => {
      state.fetchLoading = false;
    });
  }
});
export const {toggleCheckBox} = toDoAppSlice.actions;
export const toDoAppReducer = toDoAppSlice.reducer