import React, {useState} from 'react';
import {TasksType} from "../../types";
import {useDispatch} from "react-redux";
import {markTaskDone} from "../../containers/ToDoApp/toDoAppThunks";

interface Props {
  task: TasksType;
  checkedTask: () => void;
}

const TaskCard: React.FC<Props> = ({task, checkedTask}) => {
  const dispatch = useDispatch();
  const [currentTask, setCurrentTask] = useState<TasksType>({
    task: task.task,
    status: task.status,
    id: task.id
  });

  const onCheckboxClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    setCurrentTask(prev => ({...prev, [name]: checked}));
    checkedTask();
    await dispatch(markTaskDone(currentTask)); // Не могу понять как правильно передать в thunk аргумент.
  };

  return (
    <div className="card mb-2 w-50">
      <div className="card-body">
        <p className="card-text"><b>To do: </b>{task.task}</p>
        <div className="form-check">
          <input className="form-check-input" onChange={onCheckboxClick} name="status" type="checkbox" checked={currentTask.status}/>
          <label className="form-check-label">Switch if you did your task</label>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;