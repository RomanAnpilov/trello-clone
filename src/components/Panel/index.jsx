import React from "react";

import styles from "./Panel.module.scss";

import { Card, AddForm } from "../index";

const Panel = ({ title, cards }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.inner}>
        {title && (
          <div className={styles.title}>
            <b>{title}</b>
          </div>
        )}
        {cards && (
          <div className={styles.items}>
            {cards.map((card, index) => (
              <Card key={index}>{card}</Card>
            ))}
          </div>
        )}
        <AddForm />
      </div>
    </div>
  );
};

// Panel.propTypes = {
//     children: PropTypes.
// }

export default Panel;
