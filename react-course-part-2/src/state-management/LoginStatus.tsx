import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "Logout" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "Login", username: "youssef.soliman" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
