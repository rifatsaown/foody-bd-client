import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ChefDetails from "../components/ChefDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../components/ErrorPage";
import Blog from "../components/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/chef/:id",
                element: <PrivateRoutes><ChefDetails/></PrivateRoutes>,
                loader: ({params}) => fetch(`https://foody-bd-server.vercel.app/chef/${params.id}`),
            },{
                path: "/blog",
                element: <Blog/>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage/>
    }
])

export default router;