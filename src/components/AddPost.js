import React from "react";
import icon_profile from "../svg/icon_profile.svg";
import styles from "../css_modules/addPost.module.css"

const AddPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fixed}>
        <h2>홈</h2>
      </div>
      <div className={styles.postWarp}>
        <div className={styles.addPostArea}>
          <div className={styles.profileImg}>
            <img src={icon_profile} />
          </div>
          <textarea name="" id="" cols="30" rows="1" placeholder="무슨일이 일어나고 있나요?"></textarea>
        </div>
        <div className={styles.btnWarp}>
          <button>트윗하기</button>
        </div>
      </div>
    </div>
  )
}

export default AddPost