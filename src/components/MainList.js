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
import axios from "axios";

const MainList = () => {
  const [test, setTest] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.postSlice.posts);
  const [error, setError] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  if (error == true) {
    console.log("마지막 페이지 입니다.");
  }
  const [loadingToggle, setLoadingToggle] = useState(false);

  const [page, setPage] = useState(1);

  console.log(data)

  // post 삭제 기능
  const onClickDelete = (e) => {
    setDeleteId(e.target.value)
    deleteAxios()
  }

  const deleteAxios = async () => {
    const json = await axios.delete(`http://43.200.176.108/api/test/post/${deleteId}`);
    console.log(json)
  };

  console.log(deleteId)

  //!무한스크롤 기능구현--------------
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log("스크롤 이벤트 발생");
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("페이지 끝에 스크롤이 닫았음. ");
      setPage((prev) => prev + 1);
    }
  };

  const getData = () => {
    dispatch(getPosts({ page, setError }));
  };
  //페이지가 달라질 때마다 getData함수를 호출
  useEffect(() => {
    getData();
  }, [page]);

  //!스크롤이 될때마다 발생
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {loadingToggle ? (
        <Loading />
      ) : (
        data.map((x, i) => {
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
                    <img src={x.image} alt="" className={styles.img} />
                  </div>
                  <div className={styles.list_info}>
                    <div>
                      <Likes postId={x.postId} setTest={setTest} />
                    </div>
                    <div>
                      <img
                        className={styles.info_icon}
                        src={icon_comment}
                      ></img>
                      <span className={styles.info_number}>3</span>
                    </div>
                    <button onClick={onClickDelete} value={x.postId}>삭제하기</button>
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
