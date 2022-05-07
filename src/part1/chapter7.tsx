import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter7 = () => {
  useTitle("第七章 構造体");
  useScrollHistory();
  return (
    <main>
      <h1>第七章 構造体</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter7", displayName: "第七章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>未定稿です。お待ちください。</p>
      <NextPrev
        prev={{ link: "/part1/chapter6", title: "第六章 配列" }}
        next={{ link: "/part1/chapter8", title: "第八章 関数" }}
      />
    </main>
  );
};
