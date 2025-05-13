import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import MainLayout from "../Layout/MainLayout";
import Aboutme from "../Aboutme";
import Expirence from "../Expirence";
import Mywork from "../Mywork";
import NotFound from "../NotFound";

const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutme",
        element: <Aboutme />,
      },
      {
        path: "expirence",
        element: <Expirence />,
      },
      {
        path: "mywork",
        element: <Mywork />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);
export default mainRoute;
