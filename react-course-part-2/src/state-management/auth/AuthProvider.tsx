import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface loginAction {
  type: "Login";
  username: "youssef.soliman";
}

interface logoutAction {
  type: "Logout";
}

export type authAction = loginAction | logoutAction;

const authReducer = (state: string, action: authAction): string => {
  if (action.type === "Login") {
    return action.username;
  }
  if (action.type === "Logout") {
    return "";
  }
  return state;
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
