import React from "react";

import styles from "./Panel.module.scss";

import { Card, AddForm } from "../index";

const Panel = ({ items }) => {
  return (
    <div className={styles.panel}>
      {items && (
        <div className={styles.items}>
          {items.map((card, index) => (
            <Card key={index}>{card.text}</Card>
          ))}
        </div>
      )}
      <AddForm />
    </div>
  );
};

// Panel.propTypes = {
//     children: PropTypes.
// }

export default Panel;
