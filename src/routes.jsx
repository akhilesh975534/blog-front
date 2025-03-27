import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Index from "./views/Index.jsx";
import Login from "./views/Login/Index.jsx";
import Signup from "./views/Signup/Index.jsx";
import Home from "./views/Post/Index.jsx";
import CreateBlog from "./views/Post/create.jsx";
import EditBlog from "./views/Post/edit.jsx";
import About from "./views/About/index.jsx";
import Contact from "./views/Contact/Index.jsx";
import ShowBlog from "./views/Post/show.jsx";
import ProfileEdit from "./views/Profile/Index.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/index",
        element: <Home />,
      },
      {
        path: "/create-blog",
        element: <CreateBlog />,
      },
      {
        path: "/blog/edit-blog/:id",
        element: <EditBlog />,
      },
      {
        path: "/blog/:id",
        element: <ShowBlog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profile",
        element: <ProfileEdit />
      }
    ],
  },
]);
