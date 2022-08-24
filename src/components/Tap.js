import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyPosts } from "../redux/modules/myPageSlice";
import styles from "../css_modules/tap.module.css";
import icon_profile from "../svg/icon_profile.svg";
import icon_likes from "../svg/icon_likes.svg";
import icon_comment from "../svg/icon_comment.svg";

const Tap = ({ tap }) => {
  const data = useSelector((state) => state.myPostSlice.myPosts);
  const email = useSelector((state) => state.myPostSlice.email);
  const dispatch = useDispatch();
  console.log(data);
  console.log(email);
  // useEffect(() => {
  //   dispatch(getMyPosts());
  // }, []);

  if (tap === 0) {
    return (
      <div className={styles.tap_box}>
        {data.map((x, i) => {
          return (
            <div key={x.postId} className={styles.mainWarp}>
              <div className={styles.profileImg}>
                <img src={icon_profile} />
              </div>

              <div className={styles.list_container}>
                <div className={styles.profileWarp}>
                  <div className={styles.list_profile}></div>
                </div>

                <span>{email}</span>
                <div className={styles.list_contents}>
                  <div className={styles.desc}>{x.content}</div>
                  <div className={styles.imgArea}>
                    <img src={x.image} alt="" />
                  </div>
                  <div className={styles.list_info}>
                    <div>
                      <img className={styles.info_icon} src={icon_likes}></img>
                      <span className={styles.info_number}>2</span>
                    </div>
                    <div>
                      <img
                        className={styles.info_icon}
                        src={icon_comment}
                      ></img>
                      <span className={styles.info_number}>3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  if (tap === 1) {
    return <div className={styles.tap_box}>You don’t have any likes yet</div>;
  }
  if (tap === 2) {
    return (
      <div className={styles.tap_box}>You don’t have any comments yet</div>
    );
  }
};
export default Tap;
