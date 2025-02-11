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
        loader: async ({params}) => {
          const res = await fetch(
            `${import.meta.env.VITE_ANIMEHIVE_API}/api/v2/hianime/anime/${
              params.id
            }`
          );
          if (!res.ok) throw new Response("Not Found", {status: 404});
          return res.json();
        },
      },
    ],
  },
]);

export default router;
