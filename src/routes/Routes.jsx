import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

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
            }
        ]
    },
    {
        path: "*",
        element: <h1>Not Found</h1>
    }
])

export default router;