import Link from "next/link";
import { homeColorTheme } from "../../config/apis";
import styles from "./Category.module.scss";
import RandomMatrix from "../RandomMatrix/RandomMatrix";
import { convertToPostUrl, convertToStackUrl } from "@/utils/utils";
import { useRouter } from "next/router";

interface ICategory {
  item: any;
  category: any;
  stack: any;
}

const defaultStyle = {
  color: "black",
  textAlign: "center",
  width: "15px",
  fontSize: "10px",
};

export const Category = ({ item, category, stack }: ICategory) => {
  const color: any = item?.themeColor ? item?.themeColor : "#263b5e";
  if (!stack) {
    return <></>;
  }
  return (
    <div
      className={[styles.removeUnderline, styles.category].join(" ")}
      style={{ color }}
    >
      <div
        className={[
          styles.header__card,
          // homeColorTheme[color]?.priColor,
        ].join(" ")}
      >
        <div className={styles.icon__container}>{item.icon}</div>
        <h1 className={styles.header}>{`< ${item.name.toUpperCase()} />`}</h1>
        <div className={[styles.tag__container, "text-left"].join(" ")}>
          <span className={styles.tag} style={{ backgroundColor: color }}>
            {Object.keys(item.items).length || 0} Concepts
          </span>
        </div>
        <Link href={convertToStackUrl(category, item.name)} passHref>
          View more
        </Link>
        <RandomMatrix style={defaultStyle} className={styles.matrix} />
      </div>
    </div>
  );
};

export default Category;
