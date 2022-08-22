import icon_profile from "../svg/icon_profile.svg";
import icon_likesfilled from "../svg/icon_likesfilled.svg";
import icon_likes from "../svg/icon_likes.svg";
import icon_comment from "../svg/icon_comment.svg";
import styles from "../css_modules/mainList.module.css";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/modules/mainListSlice";
import { useEffect, useState } from "react";
import Likes from "./Likes";

const MainList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postSlice.posts);
  console.log(posts);
  //const email = useSelector((state) => state.postSlice.email);
  // const [id, setId] = useState([]);

  const [data, setData] = useState([]);
  const [loadingToggle, setLoadingToggle] = useState(true);
  // console.log(id);
  //!처음에 빈배열로 들어온다.
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getPosts(page));
    // setTimeout(() => {
    //   setLoadingToggle(false);
    // }, 3000);

    if (data.length === 0) {
      setData((current) => [...current, ...posts]);
      // setId(emails.map((x) => x.split("@")));
      setLoadingToggle(true);
    } else setLoadingToggle(false);
  }, [data]);

  return (
    <>
      {loadingToggle ? (
        <Loading />
      ) : (
        data.map((x, i) => {
          // const email = x.email.split("@");
          // setId(email[0]);
          return (
            <div key={x.postId} className={styles.mainWarp}>
              <div className={styles.profileImg}>
                <img src={icon_profile} />
              </div>

              <div className={styles.list_container}>
                <div className={styles.profileWarp}>
                  <div className={styles.list_profile}></div>
                </div>

                <span>{x.email}</span>
                <div className={styles.list_contents}>
                  <div className={styles.desc}>{x.content}</div>
                  <div className={styles.imgArea}>
                    <img src={x.image} alt="" />
                  </div>
                  <div className={styles.list_info}>
                    <div>
                      <Likes i={i} />
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
        })
      )}
    </>
  );
};
export default MainList;
