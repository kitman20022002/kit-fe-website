// eslint-disable-next-line import/extensions
import Canvas from "../../components/Canvas/Canvas";
import styles from "./Categories.module.scss";

type CategoriesProps = {
  classes: string;
  title: string;
  children: any;
};

export const Categories = (props: CategoriesProps) => {
  const { classes, title, children } = props;
  return (
    <div className={[classes, styles.category].join(" ")}>
      <h3 style={{ minWidth: "300px" }}>{title}</h3>
      <Canvas />
      <div className="full-width">{children}</div>
    </div>
  );
};

export default Categories;
