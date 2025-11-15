import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../../components/layout/Layout";
import Home from "../../components/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
