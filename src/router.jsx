import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Playlist from "./pages/Playlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Playlist />,
      },
      {
        path: ":id",
        element: <Playlist />,
      },
    ],
  },
]);

export default router;
