import { Navigate, Outlet } from "react-router-dom";
import UserListPage from "./UserList";
import useAuth from "./hooks/useAuth";

const UsersPage = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to={"/login"}></Navigate>;
  return (
    <div className="row">
      <div className="col">
        <UserListPage></UserListPage>
      </div>
      <div className="col">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UsersPage;
