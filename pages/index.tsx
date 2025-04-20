import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { homeColorTheme } from "../config/apis";
import ImgContainer from "../components/ImgContainer/ImgContainer";
import styles from "../styles/Home.module.scss";
import Menu from "../components/Menu/Menu";
import Category from "../components/Category/Category";
import { getSkills } from "@/api/kitmanyiuapis";
import {
  Background,
  BackgroundVariant,
  Position,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export async function getServerSideProps() {
  const res: any = await getSkills();
  return {
    props: {
      skillsData: res.data,
    },
  };
}

const initialNodes = [
  {
    id: "5",
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: {
      x: -50,
      y: 650,
    },
    style: {
      width: 250,
      height: 550,
      backgroundColor: "rgba(240, 240, 240, 0.5)",
      border: "1px solid #ddd",
      borderRadius: "8px",
    },
    data: {
      label: "Rabbit Broker",
    },
  },
  {
    id: "-4",
    data: {
      label: "AMQP",
      note: "set of rules/protocol that defines how message work",
    },
  },
  {
    id: "0",
    data: {
      label: "Message",
      note: "Send Message to rabbitMQ",
    },
  },
  {
    id: "-2",
    data: {
      label: "Virtual Host",
      note: "Send Message to rabbitMQ",
    },
  },
  {
    id: "1",
    data: {
      label: "Producer(s)",
      note: "Send Message to rabbitMQ",
    },
    children: [
      { id: "1-1", data: { label: "Routing Key" } },
      { id: "1-2", data: { label: "Exchange Name" } },
      { id: "1-3", data: { label: "Message Body" } },
      { id: "1-4", data: { label: "Message Properties(Optional)" } },
      { id: "1-4", data: { label: "Persistent Delivery Mode(Optional)" } },
      { id: "1-4", data: { label: "Headers(Optional)" } },
    ],
  },
  {
    id: "2",
    data: { label: "Exchange(s)" },
    children: [
      { id: "2-1", data: { label: "Default Exchange" } },
      { id: "2-2", data: { label: "Direct Exchange" } },
      { id: "2-3", data: { label: "Fanout Exchange" } },
      { id: "2-4", data: { label: "Topic Exchange" } },
      { id: "2-5", data: { label: "Headers Exchange" } },
      { id: "2-6", data: { label: "Dead Letter Exchange" } },
      { id: "2-7", data: { label: "Delayed Exchange(Plugin)" } },
      { id: "2-8", data: { label: "Consistent Hashing Exchange(Plugin)" } },
      { id: "2-9", data: { label: "Sharded Exchange(Plugin)" } },
      { id: "2-10", data: { label: "Federated Exchange(Plugin)" } },
      { id: "2-11", data: { label: "Alternate Exchange(Plugin)" } },
    ],
  },
  {
    id: "3",
    data: { label: "Queue(s)" },
    children: [
      { id: "3-1", data: { label: "Classis Queue (Durable,Exclusive)" } },
      { id: "3-2", data: { label: "Quorum Queues" } },
      { id: "3-3", data: { label: "Stream Queues" } },
      { id: "3-4", data: { label: "Dead Letter Queues" } },
      { id: "3-5", data: { label: "Sharded Queues" } },
    ],
  },
  { id: "4", data: { label: "Consumer(s)" } },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },
  { id: "e2-2", source: "2", target: "3", animated: true, label: "Bindings" },
  { id: "e3-2", source: "3", target: "4", animated: true },
];

const calNode = () => {
  // Layout configuration variables
  const CHILD_WIDTH = 200;
  const CHILD_HEIGHT = 100;
  const GROUP_PADDING = 40;
  const GROUP_X_POSITION = 250;
  const CHILD_HORIZONTAL_MARGIN = GROUP_X_POSITION + 50;
  const CHILD_VERTICAL_MARGIN = 20;
  const NODE_VERTICAL_SPACING = 100;
  const GROUP_VERTICAL_MARGIN = 60;
  const MAX_CHILDREN_PER_ROW = 3;

  let allNodes = [];
  let yOffset = 0;

  initialNodes.forEach((item, i) => {
    // Position the main node

    const mainNode = item.position
      ? item
      : {
          ...item,
          position: { x: 0, y: yOffset },
        };

    // Remove the children array from the node we'll add to the result
    const { children, ...nodeWithoutChildren } = mainNode;
    allNodes.push(nodeWithoutChildren);

    if (item.children && item.children.length > 0) {
      // Create a group node (container box)
      const groupId = `group-${item.id}`;

      // Calculate group dimensions
      const numChildren = item.children.length;
      const rows = Math.ceil(numChildren / MAX_CHILDREN_PER_ROW);
      const cols = Math.min(numChildren, MAX_CHILDREN_PER_ROW);
      const boxWidth = rows * CHILD_WIDTH + GROUP_PADDING;
      const boxHeight = cols * CHILD_HEIGHT + GROUP_PADDING;

      // Create the group/container node
      const groupNode = {
        id: groupId,
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        position: {
          x: GROUP_X_POSITION,
          y: yOffset - CHILD_VERTICAL_MARGIN,
        },
        style: {
          width: boxWidth,
          height: boxHeight,
          backgroundColor: "rgba(240, 240, 240, 0.5)",
          border: "1px solid #ddd",
          borderRadius: "8px",
        },
        data: {
          label: "",
        },
      };
      allNodes.push(groupNode);

      // Add connection from main node to group
      initialEdges.push({
        id: `e-${item.id}-${groupId}`,
        source: item.id,
        target: groupId,
        animated: true,
      });

      // Position and add the children inside the group
      item.children.forEach((child, childIndex) => {
        const row = Math.floor(childIndex / MAX_CHILDREN_PER_ROW);
        const col = childIndex % MAX_CHILDREN_PER_ROW;

        const childNode = {
          ...child,
          parentNode: groupId,
          extent: "parent",
          position: {
            x: row * CHILD_WIDTH + CHILD_HORIZONTAL_MARGIN,
            y: col * CHILD_HEIGHT + CHILD_VERTICAL_MARGIN + yOffset,
          },
        };

        allNodes.push(childNode);
      });

      // Update yOffset to account for the group height
      yOffset += boxHeight + GROUP_VERTICAL_MARGIN;
    } else {
      // For nodes without children, just add standard spacing
      yOffset += NODE_VERTICAL_SPACING;
    }
  });

  return allNodes;
};

const Home: NextPage = (props: any) => {
  const { skillsData } = props;

  const nodes = calNode();

  let i = 1;
  return (
    <div>
      <Head>
        <title>Kitman Yiu | Skills ©</title>
        <meta
          name="description"
          content="React, Node, JAVA and more. A details look of Kitman skills"
        />
        <meta
          property="og:title"
          content="Kitman Yiu | Skills | Home"
          key="title"
        />
        <meta
          property="og:description"
          content="React, Node, JAVA and more. A details look of Kitman skills"
        />
        <meta
          name="twitter:title"
          content="React, Node, JAVA and more. A details look of Kitman skills"
        />
        <meta
          name="twitter:description"
          content="React, Node, JAVA and more. A details look of Kitman skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Menu />

        <section className={styles.bg} style={{ marginBottom: "150px" }}>
          <div className="shape shape-style-1 shape-primary">
            <span className="circle-150" />
            <span className="circle-50 delay-2s" />
            <span className="circle-50" />
            <span className="circle-75" />
            <span className="circle-100 delay-2s" />
            <span className="circle-75" />
            <span className="circle-50 delay-5s" />
            <span className="circle-100 delay-1s" />
            <span className="circle-50 delay-1s" />
            <span className="circle-100 delay-5s" />
          </div>
          <div className={styles.header__container}>
            <div>
              <h1 className={styles.header__title}>
                React | Node | JAVA | AWS
              </h1>
            </div>
          </div>

          <div className={styles.shape__bottom}>
            <div className={styles.deco__bottom}></div>
          </div>
        </section>

        <div
          style={{
            width: "80vw",
            height: "80vh",
            margin: "auto",
            border: "1px solid black",
          }}
        >
          <ReactFlow nodes={nodes} edges={initialEdges}>
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
        {Object.keys(skillsData).map((key: any) => {
          i *= -1;
          const color: string = skillsData[key].themeColor
            ? skillsData[key].themeColor
            : "";
          const bgColor = homeColorTheme[color]?.bgColor;
          const title = `${key} SKILLS`;
          console.log(title);
          const spiltTitle = title.split(" ");
          if (i === 1) {
            return (
              <div key={key}>
                <div className={styles.section__header}>
                  <div className={styles.deco__top}></div>
                  <div className={styles.full__width}>
                    <div className={"inline-block"}>
                      <h2 className="global_h2">
                        {spiltTitle[0]}
                        <span className="global_color--grey">
                          {" "}
                          {spiltTitle[1]}
                        </span>
                        <span className="global_background">
                          {spiltTitle[0]}
                        </span>
                        {!key.toUpperCase().includes("FRONTEND")
                          ? " (IN DEVELOP)"
                          : ""}
                      </h2>
                    </div>
                  </div>
                  <div className={styles.section__fe}>
                    {Object.keys(skillsData[key]).map((item: any) => {
                      return (
                        <Category
                          item={skillsData[key][item]}
                          category={key}
                          stack={item}
                          key={skillsData[key][item].name}
                        />
                      );
                    })}
                  </div>
                  <div className={styles.deco__bottom}></div>
                </div>
              </div>
            );
          }
          return (
            <>
              <div className={[styles.full__width, "text-center"].join(" ")}>
                <div className={"inline-block"}>
                  <h2 className="global_h2">
                    {spiltTitle[0]}
                    <span className="global_color--grey"> {spiltTitle[1]}</span>
                    <span className="global_background">{spiltTitle[0]}</span>
                    {!key.toUpperCase().includes("FRONTEND")
                      ? " (IN DEVELOP)"
                      : ""}
                  </h2>
                </div>
              </div>
              <div className={styles.section__fe}>
                {Object.keys(skillsData[key]).map((item: any) => {
                  return (
                    <Category
                      item={skillsData[key][item]}
                      category={key}
                      stack={item}
                      key={skillsData[key][item].name}
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </main>
      <footer className={styles.footer}>
        <div className={styles.deco__top}></div>
        <p>© Copyright 0101001 By Kitman Yiu</p>
      </footer>
    </div>
  );
};

export default Home;
