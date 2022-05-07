import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter5 = () => {
  useTitle("第五章 繰り返し");
  useScrollHistory();
  return (
    <main>
      <h1>第五章 繰り返し</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter5", displayName: "第五章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>未定稿です。お待ちください。</p>
      <NextPrev
        prev={{ link: "/part1/chapter4", title: "第四章 条件分岐" }}
        next={{ link: "/part1/chapter6", title: "第六章 配列" }}
      />
    </main>
  );
};
