import "./quiz";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import AdminPage from "./AdminPage";
import QuizPage from "./QuizPage";
import "./index.css";
import { Provider } from "hooks-for-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    children: [
      {
        path: "AdminPage",
        element: <AdminPage />,
      },
      {
        path: "QuizPage",
        element: <QuizPage />,
      },
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
