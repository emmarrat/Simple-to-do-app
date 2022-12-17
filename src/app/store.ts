import {configureStore} from "@reduxjs/toolkit";
import {toDoAppReducer} from "../containers/ToDoApp/toDoAppSlice";

export const store = configureStore({
  reducer: {
    toDoApp: toDoAppReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;