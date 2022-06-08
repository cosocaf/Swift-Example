import React, { useCallback, useMemo, useState } from "react";
import { Parser } from "../parser/parser";

import styles from "../sass/component/code_frame.scss";

type CodeFrameProps = {
  code: string;
  lang: "text" | "swift";
};
export const CodeFrame = ({ code, lang }: CodeFrameProps) => {
  const [src, formattedCode] = useMemo(() => {
    const lines = code.split("\n");

    let minIndent = Infinity;
    for (const line of lines) {
      const indent = line.search(/\S/g);
      if (indent !== -1) {
        minIndent = Math.min(minIndent, indent);
      }
    }

    let begin = false;
    const src = lines
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

    const result = [];
    switch (lang) {
      case "text":
        result.push(src);
        break;
      case "swift": {
        const parser = new Parser();
        const tokens = parser.parse(src);
        let line = 0;
        let char = 0;
        for (const token of tokens) {
          if (line < token.line) {
            do {
              result.push("\n");
            } while (++line < token.line);
            char = 0;
          }
          if (char < token.char) {
            result.push(" ".repeat(token.char - char));
          }
          const key = `${line}-${token.char}:${token.char + token.code.length}`;
          result.push(
            <span key={key} data-role={token.role}>
              {token.code}
            </span>,
          );
          char = token.char + token.code.length;
        }
        break;
      }
    }
    return [src, result];
  }, [code, lang]);
  const [buttonMessage, setButtonMessage] = useState("copy");
  const onClick = useCallback(() => {
    void navigator.clipboard.writeText(src).then(() => {
      setButtonMessage("Copied!");
      setTimeout(() => setButtonMessage("Copy"), 1000);
    });
  }, [src]);
  return (
    <div className={styles.codeFrame}>
      <button className={styles.copyButton} onClick={onClick}>
        {buttonMessage}
      </button>
      <div className={styles.codeWrapper}>
        <pre>
          <code>{formattedCode}</code>
        </pre>
      </div>
    </div>
  );
};
