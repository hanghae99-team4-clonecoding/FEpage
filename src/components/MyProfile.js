import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../css_modules/myProfile.module.css";
import icon_profile from "../svg/icon_profile.svg";
import Tap from "./Tap";
import { getMyPosts } from "../redux/modules/myPageSlice";

const MyProfile = () => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  console.log(email);

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
            <div className={styles.layoutEdit}>
              <img className={styles.myInfo_icon} src={icon_profile}></img>
              <section className={styles.myInfo_editBtn}>
                {" "}
                <button className={styles.editBtn_btn}>Edit Profile</button>
              </section>
            </div>

            <p className={styles.myInfo_email}>{email}</p>
            <p className={styles.myInfo_follower}>Joined July 2022</p>
            <span className={styles.myInfo_follower}>
              <span className={styles.number}>5</span>Following{" "}
              <span className={styles.number}> 3</span>Followers
            </span>
            <section className={styles.myInfo_tab}>
              {" "}
              <button
                className={styles.tab_button}
                onClick={() => {
                  setTap(0);
                }}
              >
                트윗
              </button>
              <button
                className={styles.tab_button}
                onClick={() => {
                  setTap(1);
                }}
              >
                좋아요
              </button>
              <button
                className={styles.tab_button}
                onClick={() => {
                  setTap(2);
                }}
              >
                댓글
              </button>
              <Tap tap={tap} />
            </section>
          </section>
        </div>
      </div>
    </>
  );
};
export default MyProfile;
