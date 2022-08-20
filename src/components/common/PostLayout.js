import styles from "../../css_modules/postLayout.module.css"

const PostLayout = (prop) => {
  return <div className={styles.warp}>{prop.children}</div>;
};
export default PostLayout;
