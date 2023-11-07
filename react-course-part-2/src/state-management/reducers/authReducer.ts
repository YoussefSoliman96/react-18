interface loginAction {
  type: "Login";
  username: "mosh.hamedani";
}

interface logoutAction {
  type: "Logout";
}

type authAction = loginAction | logoutAction;

const authReducer = (state: string, action: authAction): string => {
  if (action.type === "Login") {
    return action.username;
  }
  if (action.type === "Logout") {
    return "";
  }
  return state;
};

export default authReducer;
