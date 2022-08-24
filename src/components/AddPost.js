import React, { useState, useEffect } from "react";
import icon_profile from "../svg/icon_profile.svg";
import styles from "../css_modules/addPost.module.css"
import axios from "axios";

const AddPost = () => {

  const [post, setPost] = useState(
    {
      email: "",
      content: "",
      image: ""
    }
  )

  const [postContet, setPostContent] = useState({ content: "" })
  const [email, setEmail] = useState({ email: "never@naver.com" })
  const [image, setImage] = useState({ image: "https://item.kakaocdn.net/do/41584ca0a4d4fe7f0d1bf82c6ec512f615b3f4e3c2033bfd702a321ec6eda72c" })

  // 데이터 전송
  const sendPost = async () => {
    const json = await axios.post("http://43.200.177.45/api/test/post", post)
    alert(json.data.message)
  }

  const onChangeHandler = (e) => {
    setPostContent({ content: e.target.value })
    setPost({ ...post, ...postContet, ...email, ...image })
  }
  console.log(postContet)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    sendPost()
  }

  return (
    <form onSubmit={onSubmitHandler} className={styles.container}>
      <div className={styles.postWarp}>
        <div className={styles.addPostArea}>
          <div className={styles.profileImg}>
            <img src={icon_profile} />
          </div>
          <textarea
            onChange={onChangeHandler}
            name="content" id="" cols="30" rows="1" placeholder="무슨일이 일어나고 있나요?"></textarea>
        </div>
        <div className={styles.btnWarp}>
          <button>트윗하기</button>
        </div>
      </div>
    </form>
  )
}

export default AddPost