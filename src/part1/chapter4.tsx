import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";

export const Chapter4 = () => {
  return (
    <main>
      <h1>第四章 条件分岐</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter4", displayName: "第四章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <NextPrev
        prev={{ link: "/part1/chapter3", title: "第三章 式と演算子" }}
        next={{ link: "/part1/chapter5", title: "第五章 繰り返し" }}
      />
    </main>
  );
};
