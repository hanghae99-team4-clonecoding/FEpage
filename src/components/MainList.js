import icon_profile from "../svg/icon_profile.svg";
import icon_likes from "../svg/icon_likes.svg";
import icon_comment from "../svg/icon_comment.svg";
import styles from "../css_modules/mainList.module.css";
import Loading from "./Loading";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/modules/mainListSlice";
import { useEffect, useState } from "react";

const MainList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postSlice.posts);
  const emails = useSelector((state) => state.postSlice.email);
  const [id, setId] = useState([]);

  const [data, setData] = useState([]);
  const [loadingToggle, setLoadingToggle] = useState(true);
  console.log(id);
  //!처음에 빈배열로 들어온다.
  useEffect(() => {
    dispatch(getPosts());
    // setTimeout(() => {
    //   setLoadingToggle(false);
    // }, 3000);

    if (data.length === 0) {
      setData((current) => [...current, ...posts]);
      setId(emails.map((x) => x.split("@")));
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

                <div>{id[i][0]}</div>
                <div className={styles.list_contents}>
                  <div>{x.content}</div>
                  <div className={styles.imgArea}>
                    <img src={x.image} alt="" />
                  </div>
                  <div>
                    <div>
                      <img src={icon_likes}></img>
                      <span>2</span>
                    </div>
                    <div>
                      <img src={icon_comment}></img>
                      <span>3</span>
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
