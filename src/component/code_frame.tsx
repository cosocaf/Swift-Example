import React, { useCallback, useMemo, useState } from "react";

import styles from "../sass/component/code_frame.scss";

type CodeFrameProps = {
  code: string;
};
export const CodeFrame = ({ code }: CodeFrameProps) => {
  const memo = useMemo(() => {
    const lines = code.split("\n");

    let minIndent = Infinity;
    for (const line of lines) {
      const indent = line.search(/\S/g);
      if (indent !== -1) {
        minIndent = Math.min(minIndent, indent);
      }
    }

    let begin = false;
    return lines
      .map((line) => line.slice(minIndent))
      .filter((value) => {
        if (value === "" && !begin) {
          return false;
        } else {
          begin = true;
          return true;
        }
      })
      .join("\n");
  }, [code]);
  const [buttonMessage, setButtonMessage] = useState("copy");
  const onClick = useCallback(() => {
    void navigator.clipboard.writeText(memo).then(() => {
      setButtonMessage("Copied!");
      setTimeout(() => setButtonMessage("Copy"), 1000);
    });
  }, [memo]);
  return (
    <div className={styles.codeFrame}>
      <button className={styles.copyButton} onClick={onClick}>
        {buttonMessage}
      </button>
      <div className={styles.codeWrapper}>
        <pre>
          <code>{memo}</code>
        </pre>
      </div>
    </div>
  );
};
