import { useNavigate } from "react-router-dom";
import styles from "../../css_modules/header.module.css";
import icon_bell from "../../svg/icon_bell.svg";
import icon_bookmark from "../../svg/icon_bookmark.svg";
import icon_hashtag from "../../svg/icon_hashtag.svg";
import icon_home from "../../svg/icon_home.svg";
import icon_list from "../../svg/icon_list.svg";
import icon_mail from "../../svg/icon_mail.svg";
import icon_more from "../../svg/icon_more.svg";
import logo_twitter from "../../svg/logo_twitter.svg";
import icon_people from "../../svg/icon_people.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.headerContainer}>
      <div style={{ position: "fixed" }}>
        <div className={styles.headerLogo}>
          <img src={logo_twitter}></img>
        </div>

        <div className={styles.headerWarp}>
          <div className={styles.headerBox} onClick={() => navigate("/home")}>
            <div className={styles.header_tag}>
              {" "}
              <img src={icon_home}></img>
            </div>
            <div className={styles.header_tag}>Home</div>
          </div>
          <div className={styles.headerBox}>
            <div className={styles.header_tag}>
              {" "}
              <img src={icon_hashtag}></img>
            </div>
            <div className={styles.header_tag}>Explore</div>
          </div>
          <div className={styles.headerBox}>
            <div className={styles.header_tag}>
              {" "}
              <img src={icon_bell}></img>
            </div>
            <div className={styles.header_tag}>Notifications</div>
          </div>
          <div className={styles.headerBox}>
            <div className={styles.header_tag}>
              {" "}
              <img src={icon_mail}></img>
            </div>
            <div className={styles.header_tag}>Messages</div>
          </div>
          <div className={styles.headerBox}>
            <div className={styles.header_tag}>
              {" "}
              <img src={icon_bookmark}></img>
            </div>
            <div className={styles.header_tag}>Bookmarks</div>
          </div>
          <div className={styles.headerBox}>
            <div className={styles.header_tag}>
              {" "}
              <img src={icon_list}></img>
            </div>
            <div className={styles.header_tag}>Lists</div>
          </div>
          <div className={styles.headerBox} onClick={() => navigate("/mypage")}>
            <div className={styles.header_tag}>
              {" "}
              <img src={icon_people}></img>
            </div>
            <div className={styles.header_tag}>Profile</div>
          </div>
          <div className={styles.headerBox}>
            <div className={styles.header_tag}>
              <img src={icon_more}></img>
            </div>
            <div className={styles.header_tag}>More</div>
          </div>
          <div className={styles.headerBox}>
            <button className={styles.header_button}>트윗하기</button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
