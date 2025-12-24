import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Home/Home";
import Hero from "../Components/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
           path:"/",
           element:<Home></Home> 
        },
    ]
  },
]);

export default router;
