import React from "react";

import styles from "../sass/component/next_prev.scss";
import { PublicBasedLink } from "./public_based_link";

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
        <PublicBasedLink className={styles.prev} to={prev.link}>
          <span className={styles.label}>前の章</span>
          {prev.title}
        </PublicBasedLink>
      ) : null}
      {next ? (
        <PublicBasedLink className={styles.next} to={next.link}>
          <span className={styles.label}>次の章</span>
          {next.title}
        </PublicBasedLink>
      ) : null}
    </div>
  );
};
