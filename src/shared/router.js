import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccessPage from "../pages/AccessPage";
import MyPage from "../pages/MyPage";
import PostPage from "../pages/PostPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccessPage />} />
        <Route path="/home" element={<PostPage></PostPage>} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
