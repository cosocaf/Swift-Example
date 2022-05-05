import React from "react";
import { NextPrev } from "../component/next_prev";

export const Chapter3 = () => {
  return (
    <main>
      <h1>第三章 式と演算子</h1>
      <NextPrev
        prev={{ link: "/part1/chapter2", title: "第二章 プログラムの基本構造" }}
        next={{ link: "/part1/chapter4", title: "第四章 条件分岐" }}
      />
    </main>
  );
};
