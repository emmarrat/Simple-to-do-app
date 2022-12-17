import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {TasksApi, TasksType, TaskType} from "../../types";

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

export const markTaskDone = createAsyncThunk(
  'toDoApp/markTaskDone',
  async (arg: TasksType) => {
    await axiosApi.put('/tasks/' + arg.id + '.json' , arg);
    // не могу понять как правильно передать аргументы в thunk. понимаю, что уже не правильно указаны, так как в put запросе должен уйти обьект без id
    // но как передать два аргумента? Если использовать thunkAPI, то как взять правильный индекс обьекта в массиве задач, чтобы указать id?
  }
);
