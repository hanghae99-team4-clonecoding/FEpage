import React, { useState, useEffect, useRef } from "react";
import icon_profile from "../svg/icon_profile.svg";
import styles from "../css_modules/addPost.module.css";
import axios from "axios";
import icon_picture from "../svg/icon_picture.svg";
import { upload } from "@testing-library/user-event/dist/upload";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../api/firebase";
import Loading from "./Loading";
const AddPost = () => {
  const [post, setPost] = useState({
    email: "",
    content: "",
    image: "",
  });
  const [postContet, setPostContent] = useState({ content: "" });
  const [email, setEmail] = useState({ email: "never@naver.com" });
  const [image, setImage] = useState({ image: "" });

  const onChangeHandler = (e) => {
    setPostContent({ content: e.target.value });
    setPost({ ...post, ...email, ...postContet });
    console.log(post);
  };

  //firebase이미지 전송
  const file_link_ref = useRef(null);
  const uploadFb = async (e) => {
    console.log(e.target.files);
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    console.log(uploaded_file);
    const file_url = await getDownloadURL(uploaded_file.ref);
    console.log(file_url);
    file_link_ref.current = file_url;
    setPost({ ...post, image: file_link_ref.current });
    //!로딩중 기능추가 하기
  };
  //!여기까지

  // 데이터 전송
  const sendPost = async () => {
    const json = await axios.post("http://43.200.176.108/api/test/post", post);
    alert(json.data.message);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    sendPost();
    console.log(post);
    window.location.reload();
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.container}>
      {/* <Loading /> */}
      <div className={styles.postWarp}>
        <div className={styles.addPostArea}>
          <div className={styles.profileImg}>
            <img src={icon_profile} />
          </div>
          <textarea
            onChange={onChangeHandler}
            name="content"
            id=""
            cols="30"
            rows="1"
            placeholder="무슨일이 일어나고 있나요?"
          ></textarea>
        </div>
        <div className={styles.btnWarp}>
          <img src={icon_picture}></img>
          //!이미지만
          <input type={"file"} accept="image/*" onChange={uploadFb} />
          <button>트윗하기</button>
        </div>
      </div>
    </form>
  );
};

export default AddPost;
