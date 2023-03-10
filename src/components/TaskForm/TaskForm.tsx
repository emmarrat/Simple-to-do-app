import React, {useState} from 'react';
import {TaskType} from "../../types";
import {useAppDispatch} from "../../app/hooks";
import {addNewTask, fetchTasks} from "../../containers/ToDoApp/toDoAppThunks";

const TaskForm = () => {
  const dispatch = useAppDispatch();

  const [task, setTask] = useState<TaskType>({
    task: '',
    status: false,
  });

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setTask(prevState => ({
      ...prevState,
        [name]: value,
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(addNewTask(task));
    await dispatch(fetchTasks());
    setTask(prevState => ({
      ...prevState,
      task: '',
    }));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Enter your task</label>
          <input
            onChange={onFormChange}
            type="text"
            name="task"
            value={task.task}
            className="form-control"
            placeholder="learn coding..."
            required
          />
        </div>
        <div>
          <button className="btn btn-success" type="submit">Add to to-do list</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;