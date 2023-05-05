import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Blog from "../components/Blog";
import ChefDetails from "../components/ChefDetails";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoutes>
            <ChefDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://foody-bd-server.vercel.app/chef/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path :'/profile',
        element : <PrivateRoutes> <Profile/> </PrivateRoutes>
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
