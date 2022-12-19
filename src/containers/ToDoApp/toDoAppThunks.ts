import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {TasksApi, TasksType, TaskType, updateTaskType} from "../../types";
import {RootState} from "../../app/store";




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

export const addNewTask = createAsyncThunk(
  'toDoApp/addTask',
  async (arg: TaskType) => {
    await axiosApi.post('/tasks.json',  arg);
  }
);

export const updateTask = createAsyncThunk<void, updateTaskType, {state: RootState}>(
  'toDoApp/update',
  async (params) => {
    await axiosApi.put('/tasks/' + params.id + '.json' , params.currentTask);
  }
);
