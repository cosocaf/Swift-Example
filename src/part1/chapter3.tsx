import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter3 = () => {
  useTitle("第三章 式と演算子");
  useScrollHistory();
  return (
    <main>
      <h1>第三章 式と演算子</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter3", displayName: "第三章" },
        ]}
      />
      <NextPrev
        prev={{ link: "part1/chapter2", title: "第二章 プログラムの基本構造" }}
        next={{ link: "part1/chapter4", title: "第四章 条件分岐" }}
      />
    </main>
  );
};
