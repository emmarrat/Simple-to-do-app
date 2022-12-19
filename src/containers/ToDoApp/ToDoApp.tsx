import React, {useEffect} from 'react';
import TaskForm from "../../components/TaskForm/TaskForm";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchTasks, updateTask} from "./toDoAppThunks";
import Spinner from "../../components/Spinner/Spinner";
import TaskCard from "../../components/TaskCard/TaskCard";
import {toggleCheckBox} from "./toDoAppSlice";
import {updateTaskType} from "../../types";

const ToDoApp = () => {

  const dispatch = useAppDispatch();
  const tasksState = useAppSelector(state => state.toDoApp.tasks);
  const loadingState = useAppSelector(state => state.toDoApp.fetchLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const updateApiTask = async (task: updateTaskType, index: number) => {
    await dispatch(toggleCheckBox(index));
    await dispatch(updateTask(task));
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h2 className="mb-5">To-do list</h2>
        {loadingState ? <Spinner/> : tasksState.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            updateApiTask={updateApiTask}
            index={index}
          />
        ))}
      </div>
      <div className="mt-5">
        <TaskForm/>
      </div>
    </>
  );
};

export default ToDoApp;