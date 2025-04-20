// eslint-disable-next-line import/extensions
import Canvas from "../../components/Canvas/Canvas";
import styles from "./Post.module.scss";

type CategoriesProps = {
  classes: string;
  title: string;
  children: any;
};

export const Post = (props: CategoriesProps) => {
  const { classes, title, children } = props;
  return (
    <div className={[classes, styles.background].join(" ")}>
      <h1 className={styles.header}>{title}</h1>
      <div style={{ width: "100%" }}>
        <p>
          <strong>Created by:</strong> Kitman Yiu
        </p>
        <p>
          <strong>Updated at:</strong> 1 day ago
        </p>
      </div>
      <Canvas />
      <div className="children">{children}</div>
    </div>
  );
};

export default Post;
