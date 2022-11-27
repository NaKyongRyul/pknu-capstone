import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
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
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
  },
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
]);

export default function App() {
  return <RouterProvider router={router} />;
}

// import React from "react";
// import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import NotFound from "./pages/NotFound.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }
