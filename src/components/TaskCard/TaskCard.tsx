import React from 'react';
import {TasksType} from "../../types";

interface Props {
  task: TasksType;
}

const TaskCard: React.FC<Props> = ({task}) => {
  return (
    <div className="card mb-2 w-50">
      <div className="card-body">
        <p className="card-text"><b>To do: </b>{task.task}</p>
      </div>
    </div>
  );
};

export default TaskCard;