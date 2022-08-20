import styles from "../../css_modules/header.module.css";
import logo_twitter from "../../svg/logo_twitter.svg";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <img src={logo_twitter}></img>
      </div>

      <div className={styles.headerWarp}>
        <div className={styles.headerBox}>
          <div className={styles.header_tag}>🏠</div>
          <div className={styles.header_tag}>Home</div>
        </div>
        <div className={styles.headerBox}>
          <div className={styles.header_tag}>📌</div>
          <div className={styles.header_tag}>Explore</div>
        </div>
        <div className={styles.headerBox}>
          <div className={styles.header_tag}>🔔</div>
          <div className={styles.header_tag}>Notifications</div>
        </div>
        <div className={styles.headerBox}>
          <div className={styles.header_tag}>💌</div>
          <div className={styles.header_tag}>Messages</div>
        </div>
        <div className={styles.headerBox}>
          <div className={styles.header_tag}>📖</div>
          <div className={styles.header_tag}>Bookmarks</div>
        </div>
        <div className={styles.headerBox}>
          <div className={styles.header_tag}>📄</div>
          <div className={styles.header_tag}>Lists</div>
        </div>
        <div className={styles.headerBox}>
          <div className={styles.header_tag}>👥</div>
          <div className={styles.header_tag}>Profile</div>
        </div>
        <div className={styles.headerBox}>
          <div className={styles.header_tag}>🫥</div>
          <div className={styles.header_tag}>More</div>
        </div>
        <div className={styles.headerBox}>
          <button className={styles.header_button}>트윗하기</button>
        </div>
      </div>

    </header>
  );
};
export default Header;
