// eslint-disable-next-line import/extensions
import { getType } from "../api/kitmanyiuapis";
import Categories from "../hoc/Categories/Categories";
import Concept from "../components/Concept/Concept";
import Skills from "../hoc/Skills/Skills";
import configuration from "../config/apis";
import Menu from "../components/Menu/Menu";
import style from "../styles/Category.module.css";
import { convertToPostUrl } from "@/utils/utils";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const v = {
    paths: configuration.categories.map((item: any) => ({
      params: {
        category: item.slug,
      },
    })),
    fallback: false,
  };

  return v;
};

export const getStaticProps = async (context: any) => {
  const cat = context.params.category;
  const res: any = await getType(cat);
  return {
    props: {
      result: res.data,
      category: context.params.category,
    },
    revalidate: 300,
  };
};

interface CategoryPageParams {
  result: any;
  category: string;
}

const CategoryPage = ({ result, category }: CategoryPageParams) => {
  const router = useRouter();
  const { stackName = "" } = router.query;

  if (!result) {
    return <></>;
  }

  return (
    <div>
      <Menu classes={style.menuClass} />
      <Skills title={category} classes="card__categories" key={category}>
        {result
          ?.filter((stack: any) =>
            stackName === ""
              ? stack
              : stack.name.toLowerCase() ===
                (stackName as string).toLowerCase().replace("-", " ")
          )
          .map((stack: any) => (
            <Categories
              title={stack.name}
              classes="card__categories flex"
              key={stack.name}
            >
              {stack?.items?.map(
                (i: any) =>
                  i && (
                    <Concept
                      title={i.name}
                      status={i.status || "In Progress"}
                      slug={convertToPostUrl(category, stack.name, i.slug)}
                      key={i.name}
                    />
                  )
              )}
            </Categories>
          ))}
      </Skills>
    </div>
  );
};

export default CategoryPage;
