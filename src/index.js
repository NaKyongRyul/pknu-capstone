import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import RoomEnter from "./pages/RoomEnter";
import RoomMake from "./pages/RoomMake";
import CodeEditStu from "./pages/CodeEditStu";
import CodeEditPro from "./pages/CodeEditPro";
import StuManage from "./pages/StuManage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/roomEnter",
        element: <RoomEnter />,
      },
      {
        path: "/roomMake",
        element: <RoomMake />,
      },
      {
        path: "/codeEditStu",
        element: <CodeEditStu />,
      },
      {
        path: "/codeEditPro",
        element: <CodeEditPro />,
      },
      {
        path: "/stuManage",
        element: <StuManage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
