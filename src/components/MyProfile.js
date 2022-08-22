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
  //!----------여기부터는 무한스크롤 테스트
  // const [page, setPage] = useState(1);
  // const handleScroll = () => {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;
  //   console.log("스크롤 이벤트 발생");
  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     console.log("페이지 끝에 스크롤이 닫았음. ");
  //     setPage((prev) => prev + 1);
  //   }
  // };

  // const getdata = () => {
  //   console.log("get함수 호출");
  //!여기에 이제 파라미터로 페이지 번호 넣기
  //   dispatch(getMyPosts());
  // };
  //!페이지가 달라질 때마다 getdata함수를 호출
  // useEffect(() => {
  //   getdata();
  // }, [page]);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
