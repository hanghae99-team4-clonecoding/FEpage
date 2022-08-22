import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../css_modules/myProfile.module.css";
import icon_profile from "../svg/icon_profile.svg";
import Tap from "./Tap";
import { getMyPosts } from "../redux/modules/myPageSlice";

const MyProfile = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.myPostSlice.email);
  // const [id, address] = email.split("@");
  // console.log(id);
  const [tap, setTap] = useState(0);
  useEffect(() => {
    dispatch(getMyPosts());
  }, []);

  return (
    <>
      <div className={styles.mainWarp}>
        <div className={styles.fixed}>
          <h2>프로필</h2>
        </div>
        <div className={styles.postWarp}>
          <section className={styles.profile_background}></section>
          <section className={styles.profile_myInfo}>
            <img className={styles.myInfo_icon} src={icon_profile}></img>
            <p>{email}</p>
            <button>Edit Profile</button>
            <p>
              Following <span>5</span>
            </p>
            <p>
              Followers <span>3</span>
            </p>
            <a
              onClick={() => {
                setTap(0);
              }}
            >
              트윗
            </a>
            <a
              onClick={() => {
                setTap(1);
              }}
            >
              좋아요
            </a>
            <a
              onClick={() => {
                setTap(2);
              }}
            >
              댓글
            </a>
            <Tap tap={tap} />
          </section>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
