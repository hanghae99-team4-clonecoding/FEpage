import Header from "../components/common/header";
import PostLayout from "../components/common/PostLayout";
import Sidebar from "../components/Sidebar";
import MainContents from "../components/MainContents";
import Layout from "../components/common/layout";
import MyProfile from "../components/MyProfile";

const MyPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <PostLayout>
          <MainContents>
            <MyProfile />
          </MainContents>
          <Sidebar />
        </PostLayout>
      </Layout>
    </>
  );
};
export default MyPage;
