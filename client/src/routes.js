import { Navigate } from "react-router-dom";
import Main from "./components/Main";
import Admin from "./components/Admin";
import ToolsUpload from "./components/ToolsUpload";
import Suggest from "./components/Suggest";
import SignIn from "./components/SignIn";
import About from "./components/About";

const routes = (isAuthenticated) => [
  {
    path: "/admin",
    element: isAuthenticated ? <Admin /> : <Navigate to="/signin?next=admin" />,
  },
  {
    path: "/admin/upload",
    element: isAuthenticated ? (
      <ToolsUpload />
    ) : (
      <Navigate to="/signin?next=admin/images" />
    ),
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
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Main />,
  },
];

export default routes;
