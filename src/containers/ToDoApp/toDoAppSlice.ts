import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TasksApi, TasksType, TaskType} from "../../types";
import {RootState} from "../../app/store";
import axiosApi from "../../axiosApi";
import {fetchTasks} from "./toDoAppThunks";

interface TasksState {
  tasks: TasksType[];
  fetchLoading: boolean;
}

const initialState: TasksState = {
  tasks: [],
  fetchLoading: false,
}



// export const addNewTask = createAsyncThunk<void, undefined, {state: RootState}>(
//   'toDoApp/addTask',
//   async (arg) => {
//     await axiosApi.post('/tasks.json',  arg);
//   }
// )

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
    })
  }
});

export const toDoAppReducer = toDoAppSlice.reducer