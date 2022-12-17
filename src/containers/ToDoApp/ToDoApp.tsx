import React, {useEffect} from 'react';
import TaskForm from "../../components/TaskForm/TaskForm";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchTasks} from "./toDoAppThunks";
import Spinner from "../../components/Spinner/Spinner";

const ToDoApp = () => {

  const dispatch = useAppDispatch();
  const tasksState = useAppSelector(state =>  state.toDoApp.tasks);
  const loadingState = useAppSelector(state =>  state.toDoApp.fetchLoading);

  useEffect( () => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <div>{loadingState ? <Spinner/> : tasksState.map((task) =>(
        <div key={task.id}>{task.task}</div>
      ))}</div>
      <TaskForm/>
    </div>
  );
};

export default ToDoApp;