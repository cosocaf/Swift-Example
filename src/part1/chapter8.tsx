import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter8 = () => {
  useTitle("第八章 関数");
  useScrollHistory();
  return (
    <main>
      <h1>第八章 関数</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter8", displayName: "第八章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>未定稿です。お待ちください。</p>
      <NextPrev
        prev={{ link: "/part1/chapter7", title: "第七章 構造体" }}
        next={{
          link: "/part1/chapter9",
          title: "第九章 オブジェクト指向の導入",
        }}
      />
    </main>
  );
};
