import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {TasksApi, TasksType} from "../../types";

export const fetchTasks = createAsyncThunk(
  'toDoApp/fetch',
  async () => {
    const tasksResponse = await axiosApi.get<TasksApi | null>('/tasks.json');
    const tasks = tasksResponse.data;

    let newTasks: TasksType[] = [];

    if(tasks) {
      newTasks = Object.keys(tasks).map(id => {
        const task = tasks[id];
        return {
          ...task,
          id,
        }
      });
    }
    return newTasks;
  }
);