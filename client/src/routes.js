import { Navigate } from "react-router-dom";
import Main from "./components/Main";
import Admin from "./components/Admin";
import Suggest from "./components/Suggest";
import SignIn from "./components/SignIn";

const routes = (isAuthenticated) => [
  {
    path: "/admin",
    element: isAuthenticated ? <Admin /> : <Navigate to="/signin?next=admin" />,
  },
  {
    path: "/suggest",
    element: isAuthenticated ? (
      <Suggest />
    ) : (
      <Navigate to="/signin?next=suggest" />
    ),
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
