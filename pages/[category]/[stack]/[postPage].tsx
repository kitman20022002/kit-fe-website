import { getPost } from "@/api/kitmanyiuapis";
import Menu from "@/components/Menu/Menu";
import Skills from "@/hoc/Skills/Skills";
import style from "../../../styles/Post.module.css";
import Post from "@/hoc/Post/Post";
import { capitalizeFirstLetter } from "@/utils/utils";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "./postPage.scss";
import { useEffect } from "react";
import Head from "next/head";

export async function getServerSideProps(context: any) {
  try {
    const { category, stack, postPage } = context.params;

    const res: any = await getPost(category, stack, postPage);
    return {
      props: {
        postData: res.data,
        category,
        stack,
        post: postPage,
      },
    };
  } catch (e) {
    return {
      props: {
        postData: null,
        category: null,
        stack: null,
        post: null,
      },
    };
  }
}

interface IPostPageParams {
  postData: any;
  category: string;
  stack: string;
  post: string;
}

enum KEYPOINT {
  DEFINITION,
  BENEFITS,
  EXAMPLE,
}

const PostPage = (props: IPostPageParams) => {
  console.log(props);
  const { name, keyPoint, description } = props.postData;
  const { post, category } = props;
  console.log(props);
  useEffect(() => {
    Prism.highlightAll();
    // console.log("dsf", styles);
  }, []);

  if (!props.postData) {
    return <h1>Page Not Found</h1>;
  }

  return (
    <div>
      <Head>
        <title>
          {name || capitalizeFirstLetter(post).replace("-", " ")} | Kitman Yiu
          Blog
        </title>
        <meta
          name="description"
          content={
            keyPoint[KEYPOINT.DEFINITION].replace("Definition: ", "") +
            " " +
            keyPoint[KEYPOINT.BENEFITS].replace("Benefits: ", "")
          }
        />
        <meta
          property="og:title"
          content={`${
            name || capitalizeFirstLetter(post).replace("-", " ")
          } | Kitman Yiu Blog`}
          key="title"
        />
        <meta
          property="og:description"
          content={
            keyPoint[KEYPOINT.DEFINITION].replace("Definition: ", "") +
            " " +
            keyPoint[KEYPOINT.BENEFITS].replace("Benefits: ", "")
          }
        />
        <meta
          name="twitter:title"
          content={`${
            name || capitalizeFirstLetter(post).replace("-", " ")
          } | Kitman Yiu Blog`}
        />
        <meta
          name="twitter:description"
          content={
            keyPoint[KEYPOINT.DEFINITION].replace("Definition: ", "") +
            " " +
            keyPoint[KEYPOINT.BENEFITS].replace("Benefits: ", "")
          }
        />
      </Head>
      <Menu classes={style.menuClass} />
      <Skills title={category} classes={"card__post"}>
        <Post
          title={name || capitalizeFirstLetter(post).replace("-", " ")}
          classes="card__post flex"
        >
          <ul>
            {keyPoint?.map((item: any) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Post>
      </Skills>
    </div>
  );
};

export default PostPage;
