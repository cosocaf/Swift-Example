import React from "react";

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
        <a className={styles.prev} href={prev.link}>
          <span className={styles.label}>前の章</span>
          {prev.title}
        </a>
      ) : null}
      {next ? (
        <a className={styles.next} href={next.link}>
          <span className={styles.label}>次の章</span>
          {next.title}
        </a>
      ) : null}
    </div>
  );
};
