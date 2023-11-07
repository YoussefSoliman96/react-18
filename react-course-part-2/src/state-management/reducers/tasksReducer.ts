interface Task {
  id: number;
  title: string;
}

interface addTask {
  type: "ADD";
  task: Task;
}

interface deleteTask {
  type: "DELETE";
  taskId: number;
}

type TaskAction = addTask | deleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id != action.taskId);
  }
};

export default tasksReducer;
