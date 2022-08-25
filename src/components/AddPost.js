import React, { useState, useEffect, useRef } from "react";
import icon_profile from "../svg/icon_profile.svg";
import styles from "../css_modules/addPost.module.css";
import axios from "axios";
import icon_picture from "../svg/icon_picture.svg";
import { upload } from "@testing-library/user-event/dist/upload";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../api/firebase";
import Loading from "./Loading";
import { getCookie } from "../api/cookie";


const AddPost = () => {
  const [post, setPost] = useState({
    email: "",
    content: "",
    image: "",
  });

  const userEmail = localStorage.getItem("email");
  const [postContet, setPostContent] = useState({ content: "" });
  const [email, setEmail] = useState({ email: userEmail });
  console.log(userEmail)
  const [isLoading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setPost({ ...post, ...email, content: e.target.value });
  };


  //!firebase이미지 전송
  const file_link_ref = useRef(null);
  const uploadFb = async (e) => {
    console.log(e.target.files);
    setLoading(true);
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
  setTimeout(() => {
    if (isLoading === true) {
      setLoading(false);
    }
  }, 4000);

  // 데이터 전송
  const sendPost = async () => {
    const res = await axios({
      method: "post",
      data: post,
      url: `http://43.200.176.108/api/post`,
      headers: {
        authorization: `Bearer ${getCookie("is_login")}`,
      },
    });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    sendPost();
    // window.location.reload()
    setTimeout(() => {
      window.location.reload()
    }, 300);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.container}>
      {isLoading ? <Loading /> : null}
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
