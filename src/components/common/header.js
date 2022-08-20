import styles from "../../css_modules/header.module.css";
import logo_twitter from "../../svg/logo_twitter.svg";

const Header = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerBox_icon}>
          <img src={logo_twitter}></img>
        </div>

        <div className={styles.header_box}>
          <div className={styles.header_tag}>집</div>
          <div className={styles.header_tag}>Home</div>
        </div>
        <div className={styles.header_box}>
          <div className={styles.header_tag}>해쉬태그</div>
          <div className={styles.header_tag}>Explore</div>
        </div>
        <div className={styles.header_box}>
          <div className={styles.header_tag}>종</div>
          <div className={styles.header_tag}>Notifications</div>
        </div>
        <div className={styles.header_box}>
          <div className={styles.header_tag}>편지</div>
          <div className={styles.header_tag}>Messages</div>
        </div>
        <div className={styles.header_box}>
          <div className={styles.header_tag}>책갈피</div>
          <div className={styles.header_tag}>Bookmarks</div>
        </div>
        <div className={styles.header_box}>
          <div className={styles.header_tag}>종이</div>
          <div className={styles.header_tag}>Lists</div>
        </div>
        <div className={styles.header_box}>
          <div className={styles.header_tag}>사람</div>
          <div className={styles.header_tag}>Profile</div>
        </div>
        <div className={styles.header_box}>
          <div className={styles.header_tag}>점</div>
          <div className={styles.header_tag}>More</div>
        </div>

        <div className={styles.header_box}>
          <button className={styles.header_button}>Tweet</button>
        </div>
      </header>
    </>
  );
};
export default Header;
