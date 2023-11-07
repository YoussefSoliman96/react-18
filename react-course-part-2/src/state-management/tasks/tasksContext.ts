import React, { Dispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TasksContexType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContexType>(
  {} as TasksContexType
);
export default TasksContext;
