import { Navigate, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Playlist from "./pages/Playlist";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/playlist" replace />,
  },
  {
    path: "/playlist",
    element: <App />,
    children: [
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/playlist/:id",
        element: <Playlist />,
      },
    ],
  },
]);

export default router;
