import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const CardPortfolio = (props) => {
  const { name, img, src, info } = props;

  return (
    <div className={styles.post}>
      <img className={styles.thumbnail} src={img} />
      <div className={styles.postperview}>
        <h6>{name}</h6>
        <p>{info}</p>
        <a href={src}>Read More</a>
      </div>
    </div>
  );
};

CardPortfolio.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  src: PropTypes.string,
  info: PropTypes.string,
};

CardPortfolio.defaultProps = {
  info: "test",
};

export default CardPortfolio;
