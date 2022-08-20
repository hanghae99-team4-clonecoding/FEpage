import icon_profile from "../svg/icon_profile.svg";
import styles from "../css_modules/mainList.module.css";

const MainList = () => {
  return (
    <div>
      <div className={styles.profile_img}>
        <img src={icon_profile} />
      </div>
      <div className={styles.list_container}>
        <div className={styles.list_profile}>
          <div>id</div>
          <div className={styles.list_contents}>
            <div>글</div>
            <div>이미지</div>
            <div>좋아요와 댓글</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainList;
