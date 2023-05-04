import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ChefDetails from "../components/ChefDetails";

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
                element: <ChefDetails/>,
                loader: ({params}) => fetch(`https://foody-bd-server.vercel.app/chef/${params.id}`),
            }
        ]
    },
    {
        path: "*",
        element: <h1>Not Found</h1>
    }
])

export default router;