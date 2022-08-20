import icon_profile from "../svg/icon_profile.svg";
import styles from "../css_modules/mainList.module.css";

const MainList = () => {
  return (
    <div className={styles.mainWarp}>

      <div className={styles.profileImg}>
        <img src={icon_profile} />
      </div>

      <div className={styles.list_container}>
        <div className={styles.profileWarp}>
          <div className={styles.list_profile}></div>
        </div>

        <div className={styles.userId}>id</div>
        <div className={styles.list_contents}>
          <div className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, itaque. Animi deleniti earum voluptatem quisquam! Voluptatem eligendi, ea debitis iusto ratione, odit asperiores ullam quas sint, veniam quia recusandae tempore!</div>
          <div className={styles.imgArea}>
            <img src="https://via.placeholder.com/356x500" alt="" />
          </div>
          <div>좋아요와 댓글</div>
        </div>
      </div>

    </div>
  );
};
export default MainList;