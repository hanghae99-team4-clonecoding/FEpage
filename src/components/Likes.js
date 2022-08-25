import icon_likesfilled from "../svg/icon_likesfilled.svg";
import icon_likes from "../svg/icon_likes.svg";
import styles from "../css_modules/mainList.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { likes_handler } from "../redux/modules/mainListSlice";

const Likes = ({ postId, count }) => {
  const dispatch = useDispatch();
  const [test, setTest] = useState(0);
  const number = Number(postId);
  const [counter, setCounter] = useState(count);
  //!좋아요 이벤트 ==> 값 바꿔주는 것도 해보기
  const [likesToggle, setLikesToggle] = useState(true);
  const likes = () => {
    setLikesToggle(!likesToggle);
    dispatch(likes_handler(postId));
    console.log(postId);
    setCounter((counter) => counter + 1);
  };
  // useEffect(() => {
  //   dispatch(likes_handler(test));
  // }, [test]);

  return (
    <>
      {likesToggle ? (
        <img
          className={styles.info_icon}
          src={icon_likes}
          onClick={likes}
        ></img>
      ) : (
        <img
          className={styles.likes_red}
          src={icon_likesfilled}
          onClick={likes}
        ></img>
      )}

      <span className={styles.info_number}>{counter}</span>
    </>
  );
};
export default Likes;
