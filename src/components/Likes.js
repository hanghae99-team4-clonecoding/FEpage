import icon_likesfilled from "../svg/icon_likesfilled.svg";
import icon_likes from "../svg/icon_likes.svg";
import styles from "../css_modules/mainList.module.css";
import { useState } from "react";

const Likes = ({ i }) => {
  //!좋아요 이벤트 ==> 값 바꿔주는 것도 해보기
  const [likesToggle, setLikesToggle] = useState(true);
  const likes_handler = () => {
    setLikesToggle(!likesToggle);
  };

  return (
    <>
      {likesToggle ? (
        <img
          className={styles.info_icon}
          src={icon_likes}
          onClick={likes_handler}
        ></img>
      ) : (
        <img
          className={styles.likes_red}
          src={icon_likesfilled}
          onClick={likes_handler}
        ></img>
      )}

      <span className={styles.info_number}>2</span>
    </>
  );
};
export default Likes;
