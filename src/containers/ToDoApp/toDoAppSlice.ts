import { createSlice} from "@reduxjs/toolkit";
import { TasksType} from "../../types";

import {addNewTask, fetchTasks} from "./toDoAppThunks";

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
  reducers: {},
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
  }
});

export const toDoAppReducer = toDoAppSlice.reducer