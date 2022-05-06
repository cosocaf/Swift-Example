import React from "react";

import styles from "../sass/component/last_update.scss";

type LastUpdateProps = {
  date: string;
};
export const LastUpdate = ({ date }: LastUpdateProps) => {
  return <div className={styles.lastUpdate}>最終更新日: {date}</div>;
};
