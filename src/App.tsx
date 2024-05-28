import { RouterProvider } from "react-router-dom";
import rootRouter from "./routers/rootRouter";
import UserListArea from "./contexts/UserListArea";
import PostListArea from "./contexts/PostListArea";

function App() {
  return (
    <PostListArea>
      <UserListArea>
        <RouterProvider router={rootRouter} />
      </UserListArea>
    </PostListArea>
  );
}

export default App;
