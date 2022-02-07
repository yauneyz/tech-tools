import { Navigate } from "react-router-dom";
import Main from "./components/Main";
import Admin from "./components/Admin";
import Suggest from "./components/Suggest";
import SignIn from "./components/SignIn";


const routes = (isAuthenticated) => [
  {
    path: "/admin",
    element: isAuthenticated ? <Admin /> : <Navigate to="/signin" />,
  },
  {
    path: "/suggest",
    element: isAuthenticated ? <Suggest /> : <Navigate to="/signin" />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Main />,
  },
];

export default routes;
