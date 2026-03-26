import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllAppPage from "../pages/AllAppPage/AllAppPage";
import AppDetails from "../pages/AppDetails/AppDetails";
import AllAppInstalled from "../pages/AllAppInstalled/AllAppInstalled";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("appData.json"),
      },
      {
        path: "/allAppPage",
        Component: AllAppPage,
      },

      {
        path: "/appDetails/:id",
        loader: () => fetch("./appData.json"),
        Component: AppDetails,
      },

      // {
      //   path: "/installApp",
      //   loader: () => fetch("appData.json"),
      //   Component: AllAppInstalled,
      // },

      {
        path: "installApp",
        loader: async () => {
          const res = await fetch("/appData.json");
          return res.json();
        },
        element: <AllAppInstalled />,
        errorElement: <p>Something went wrong</p>,
      },
    ],
  },
]);
