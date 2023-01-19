import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux/users/users-operations";
import { usersSelectors } from "./redux/users/users-selectors";
import { useEffect } from "react";
import "./App.css";
import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound";
import { Posts } from "./pages/Posts/Posts";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelectors.getUsers);

  useEffect(() => {
    if (!users.length) dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users/:id/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
