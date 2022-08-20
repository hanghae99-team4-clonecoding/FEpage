import styles from "../css_modules/sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_box}>
      <input placeholder="Search Twitter" />
      <div className={styles.trendBox}>
        <h2>나를 위한 트렌드</h2>
        <div className={styles.textBox}>
          <div>Trends for you</div>
          <p>내용 추가 예정....</p>
        </div>
        <div className={styles.textBox}>
          <div>Trends for you</div>
          <p>내용 추가 예정....</p>
        </div>
        <div className={styles.textBox}>
          <div>Trends for you</div>
          <p>내용 추가 예정....</p>
        </div>
        <div className={styles.textBox}>
          <div>Trends for you</div>
          <p>내용 추가 예정....</p>
        </div>
        <div className={styles.textBox}>
          <div>Trends for you</div>
          <p>내용 추가 예정....</p>
        </div>
        <div className={styles.textBox}>
          <div>Trends for you</div>
          <p>내용 추가 예정....</p>
        </div>
        <div className={styles.textBox}>
          <div>Trends for you</div>
          <p>내용 추가 예정....</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
