import styles from "../css_modules/loading.module.css";
const Loading = () => {
  return (
    <div className={styles.loadingBox}>
      <h3>로딩중..</h3>
      <div className={styles.dim}></div>
      <div className={styles.circle}></div>
    </div>
  );
};
export default Loading;
