import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])

export default router;