import { Outlet } from "react-router-dom";
import UserListPage from "./UserList";

const UsersPage = () => {
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
