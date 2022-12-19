import React, {useState} from 'react';
import {TasksType, TaskType, updateTaskType} from "../../types";

interface Props {
  task: TasksType;
  updateApiTask: (task: updateTaskType, index: number) => void;
  index: number
}

const TaskCard: React.FC<Props> = ({task: {id, status, task}, updateApiTask, index}) => {

  const [currentTask, setCurrentTask] = useState<TaskType>({
    task: task,
    status: status,
  });

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    setCurrentTask(prev => ({...prev, [name]: checked}));
    updateApiTask({id: id, currentTask: {task: task, status: checked}}, index);
  };

  return (
    <div className="card mb-2 w-50">
      <div className="card-body">
        <p className="card-text"><b>To do: </b>{task}</p>
        <div className="form-check ">
          <label className="form-check-label">{ status ? 'Task is completed!' : 'Mark the box if you did the task'}</label>
          <input
            className="form-check-input"
            onChange={onCheckboxClick}
            name="status"
            type="checkbox"
            checked={currentTask.status}/>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;