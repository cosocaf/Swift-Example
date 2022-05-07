import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter6 = () => {
  useTitle("第六章 配列");
  useScrollHistory();
  return (
    <main>
      <h1>第六章 配列</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter6", displayName: "第六章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>未定稿です。お待ちください。</p>
      <NextPrev
        prev={{ link: "/part1/chapter5", title: "第五章 繰り返し" }}
        next={{ link: "/part1/chapter7", title: "第七章 構造体" }}
      />
    </main>
  );
};
