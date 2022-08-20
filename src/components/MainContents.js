import styles from "../css_modules/mainContents.module.css";
const MainContents = (prop) => {
  return <div className={styles.mainContents_box}>{prop.children}</div>;
};
export default MainContents;
