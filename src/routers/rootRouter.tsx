import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostDetails from "@/pages/PostDetails";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/posts/:id",
    element: <PostDetails />,
  },
]);

export default rootRouter;
