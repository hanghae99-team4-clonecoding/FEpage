import Header from "../components/common/header";
import MainList from "../components/MainList";
import PostLayout from "../components/common/PostLayout";
import Sidebar from "../components/Sidebar";
import MainContents from "../components/MainContents";
import Layout from "../components/common/layout";
const PostPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <PostLayout>
          <MainContents>
            <MainList />
          </MainContents>
          <Sidebar />
        </PostLayout>
      </Layout>
    </>
  );
};
export default PostPage;
