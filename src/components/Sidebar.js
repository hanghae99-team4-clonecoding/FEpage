import styles from "../css_modules/sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_box}>
      <input placeholder="Search Twitter" />
      <div className={styles.sidebar_trendBox}>
        <div>Trends for you</div>
        <div>내용 추가 예정....</div>
      </div>
    </div>
  );
};
export default Sidebar;
