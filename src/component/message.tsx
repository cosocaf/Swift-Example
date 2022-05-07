import React from "react";

import styles from "../sass/component/message.scss";

type MessageProps = {
  level: "info" | "warning" | "error";
  children?: React.ReactNode;
};
export const Message = ({ level, children }: MessageProps) => {
  return (
    <div className={styles.message} data-level={level}>
      {children}
    </div>
  );
};
