import styles from "./BlogInfo.module.css";
import global from "../Global/global.module.css";
import configuration from "../../../config/config";

export const BlogInfo = (props) => {
  const { data, category } = props;
  const { name, keyPoint } = data;
  //styles
  return (
    <div className={styles.blogContainer}>
      <h2 className={[global.h2, styles.headerText].join(" ")}>{name}</h2>
      <p className={styles.list}>
        {keyPoint
          .join(" ")
          .substring(0, 250)
          .replace("Definition: ", " ")
          .replace("Benefits: ", " ")
          .replace("Keywords: ", " ") + "..."}
      </p>
      <a
        href={
          configuration.api.skills_frontend + "front-end/react-core/" + category
        }
        target="_blank"
        className={[global.link, styles.link].join(" ")}
      >
        View more
      </a>
    </div>
  );
};
