import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter10 = () => {
  useTitle("第十章 クラスとインスタンス");
  useScrollHistory();
  return (
    <main>
      <h1>第十章 クラスとインスタンス</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter10", displayName: "第十章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>未定稿です。お待ちください。</p>
      <NextPrev
        prev={{
          link: "/part1/chapter9",
          title: "第九章 オブジェクト指向の導入",
        }}
        next={{ link: "/part1/chapter11", title: "第十一章 メソッド" }}
      />
    </main>
  );
};
