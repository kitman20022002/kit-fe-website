// eslint-disable-next-line import/extensions
import { useEffect, useRef, useState } from "react";
import style from "./PostCard.module.css";
import CanvasPost from "../../components/CanvasPost/CanvasPost";

type PostCardProps = {
  classes: string;
  title: string;
  children: any;
};

export const PostCard = (props: PostCardProps) => {
  const { title, children, classes } = props;
  const inputRef = useRef(null);
  // @ts-ignore
  const [width, setWidth] = useState(0);
  // @ts-ignore
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (inputRef === null) {
      return;
    }
    // @ts-ignore
    setHeight(inputRef?.current?.offsetHeight);
    // @ts-ignore
    setWidth(inputRef?.current?.offsetWidth);
  }, [inputRef]);
  return (
    <div className={[style.post__card, classes].join(" ")} ref={inputRef}>
      <h2 className={style.post__title}>{title}</h2>
      <div className={["full-width", "text-left", style.content].join(" ")}>
        {children}
      </div>
      <CanvasPost width={width} height={height} />
    </div>
  );
};

export default PostCard;
