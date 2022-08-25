import Header from "../components/common/header";
import MainList from "../components/MainList";
import PostLayout from "../components/common/PostLayout";
import Sidebar from "../components/Sidebar";
import MainContents from "../components/MainContents";
import AddPost from "../components/AddPost";
import Layout from "../components/common/layout";

const PostPage = () => {
  return (
    <Layout>
      <PostLayout>
        <Header />
        <MainContents>
          <AddPost />
          <MainList />
        </MainContents>
        <Sidebar />
      </PostLayout>
    </Layout>
  );
};
export default PostPage;
