import styles from "../css_modules/sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_box}>
      <input placeholder="Search Twitter" />
      <div className={styles.trendBox}>
        <h2>나를 위한 트렌드</h2>
        <div className={styles.textBox}>
          <p>아이브</p>
        </div>
        <div className={styles.textBox}>
          <p>forever1</p>
        </div>
        <div className={styles.textBox}>
          <p>#소녀시대</p>
        </div>
        <div className={styles.textBox}>
          <p>#좋은 노래 추천 </p>
        </div>
        <div className={styles.textBox}>
          <p>#남자아이돌 노래 </p>
        </div>
        <div className={styles.textBox}>
          <p>new jeans</p>
        </div>
        <div className={styles.textBox}>
          <p>국내여름 팝송</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
