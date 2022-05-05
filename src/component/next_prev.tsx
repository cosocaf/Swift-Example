import React from "react";
import { Link } from "react-router-dom";

import styles from "../sass/component/next_prev.scss";

type NextPrevProps = {
  prev?: {
    link: string;
    title: string;
  };
  next?: {
    link: string;
    title: string;
  };
};
export const NextPrev = ({ prev, next }: NextPrevProps) => {
  return (
    <div className={styles.nextPrev}>
      {prev ? (
        <Link className={styles.prev} to={prev.link}>
          <span className={styles.label}>前の章</span>
          {prev.title}
        </Link>
      ) : null}
      {next ? (
        <Link className={styles.next} to={next.link}>
          <span className={styles.label}>次の章</span>
          {next.title}
        </Link>
      ) : null}
    </div>
  );
};
