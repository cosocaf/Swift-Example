import React, { useState } from "react";

import styles from "../sass/component/accordion.scss";

type AccordionProps = {
  showMessage: string;
  hideMessage: string;
  children?: React.ReactNode;
};
export const Accordion = ({
  showMessage,
  hideMessage,
  children,
}: AccordionProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.accordion} data-show={show}>
      <button className={styles.toggleButton} onClick={() => setShow(!show)}>
        {show ? hideMessage : showMessage}
      </button>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
