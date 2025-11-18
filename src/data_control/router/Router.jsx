import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../../components/layout/Layout";
import Home from "../../components/pages/Home";
import ErrorPage from "../../components/error/ErrorPage";
import AllCropPost from "../../components/pages/AllCropPost";
import Registration from "../../components/pages/Registration";
import Login from "../../components/pages/Login";
import AddCrop from "../../components/pages/AddCrop";
import CropsDetails from "../../components/pages/CropsDetails";
import PrivateRouter from "./PrivateRouter";
import MyPost from "../../components/pages/MyPost";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all_crop_post",
        element: <AllCropPost></AllCropPost>,
        loader: () => fetch("http://localhost:3000/crops"),
      },
      {
        path: "/add-crop",
        element: <AddCrop></AddCrop>,
      },
      {
        path: "/crops-details/:id",
        element: (
          <PrivateRouter>
            <CropsDetails></CropsDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/crops/${params.id}`),
      },
      {
        path: "/my-post",
        element: (
          <PrivateRouter>
            <MyPost></MyPost>
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
