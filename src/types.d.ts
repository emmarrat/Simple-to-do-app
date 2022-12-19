export interface TaskType {
  task: string;
  status: boolean;
}

export interface TasksType extends TaskType {
  id: string;
}

export interface TasksApi {
  [id: string]: TaskType;
}

export interface updateTaskType {
  id: string;
  currentTask: TaskType;
}