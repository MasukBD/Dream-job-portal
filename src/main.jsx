import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './component/LayOut/Main';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Statistics from './component/Statistics/Statistics';
import AppliedJob from './component/AppliedJob/AppliedJob';
import Blogs from './component/Blogs/Blogs';
import Home from './component/Home/Home';
import { loadData } from './HandleAPI/HandleAPIData';
import JobDetails from './component/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: loadData,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistic",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedJob",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => { return params.id },
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
