import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";

interface TasksContexType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContexType>(
  {} as TasksContexType
);
export default TasksContext;
