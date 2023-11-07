import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/counter/Counter";
import LoginStatus from "./state-management/auth/LoginStatus";
import TaskList from "./state-management/tasks/TaskList";
import { Dispatch } from "react";
import TasksContext from "./state-management/tasks/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthContext from "./state-management/auth/authContext";
import AuthProvider from "./state-management/auth/AuthProvider";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
