import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./views/Index";
import Login from "./views/Login/Index";
import Signup from "./views/Signup/Index";
import Home from "./views/Post/Index";
import CreateBlog from "./views/Post/create.jsx";
import EditBlog from "./views/Post/edit";
import About from "./views/About/index.jsx";
import Contact from "./views/Contact/Index.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />,
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
        path: "/user/index",
        element: <Home />,
      },
      {
        path: "/user/create-blog",
        element: <CreateBlog />,
      },
      {
        path: "/user/edit-blog",
        element: <EditBlog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
