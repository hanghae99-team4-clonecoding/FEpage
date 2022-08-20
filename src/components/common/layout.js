import styles from "../../css_modules/layout.module.css";

const Layout = (prop) => {
  return <div className={styles.layout}>{prop.children}</div>;
};
export default Layout;
