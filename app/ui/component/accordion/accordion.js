"use client";
import React, { useState } from "react";
import styles from "./accordion.module.css";

const AccordionsCust = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);

  return (
    <div className={styles.accordion}>
      <button onClick={toggleExpand}>
        Header <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && <div className={styles.content}>accordion Content</div>}
    </div>
  );
};

export default AccordionsCust;
