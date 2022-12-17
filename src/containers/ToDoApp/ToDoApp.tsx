import React, {useEffect} from 'react';
import TaskForm from "../../components/TaskForm/TaskForm";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchTasks} from "./toDoAppThunks";
import Spinner from "../../components/Spinner/Spinner";
import TaskCard from "../../components/TaskCard/TaskCard";

const ToDoApp = () => {

  const dispatch = useAppDispatch();
  const tasksState = useAppSelector(state =>  state.toDoApp.tasks);
  const loadingState = useAppSelector(state =>  state.toDoApp.fetchLoading);

  useEffect( () => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex flex-column align-items-center">{loadingState ? <Spinner/> : tasksState.map((task) =>(
       <TaskCard key={task.id} task={task}/>
      ))}</div>
      <TaskForm/>
    </div>
  );
};

export default ToDoApp;