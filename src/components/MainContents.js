import styles from "../css_modules/mainContents.module.css";
const MainContents = (prop) => {
  return <div className={styles.mainContents_box}>
    <div className={styles.fixed}>
      <h2>홈</h2>
    </div>
    {prop.children}
  </div>;
};
export default MainContents;
