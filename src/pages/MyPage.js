import Header from "../components/common/header";
import PostLayout from "../components/common/PostLayout";
import Sidebar from "../components/Sidebar";
import MainContents from "../components/MainContents";
import Layout from "../components/common/layout";
import MyProfile from "../components/MyProfile";
import AddPost from "../components/AddPost";
const MyPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <PostLayout>
          <MyProfile />

          <Sidebar />
        </PostLayout>
      </Layout>
    </>
  );
};
export default MyPage;
