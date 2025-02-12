import {createBrowserRouter} from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Anime from "./pages/Anime";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {path: "/", element: <Home />},
      {
        path: "/anime/:id",
        element: <Anime />,
      },
    ],
  },
]);

export default router;
