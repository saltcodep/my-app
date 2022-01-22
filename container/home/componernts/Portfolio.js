import React from "react";
import styles from "./Default.module.css";
import CardPortfolio from "../../../components/card-portfolio";

const data = [
  {
    name: "Post Title1",
    img: "",
    src: "",
    info: "Modulized guide for online courses with step by step intructions",
  },
  {
    name: "Post Title2",
    img: "",
    src: "",
    info: "Modulized guide for online courses with step by step intructions",
  },
  {
    name: "Post Title3",
    img: "",
    src: "",
    info: "Modulized guide for online courses with step by step intructions",
  },
];

function Portfolio() {
  return (
    <section className={styles.s1}>
      <div className={styles.maincontainer}>
        <h3 style={{ "text-align": "center" }}>Some of my past projects</h3>
        <div className={styles.postwrapper}>
          <div style={{ display: "flex" }}>
            {data.map((val, idx) => (
              <CardPortfolio name={val.name} img={val.img} info={val.info} src={val.src} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
