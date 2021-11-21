import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.scss";

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Card;
