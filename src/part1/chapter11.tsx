import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter11 = () => {
  useTitle("第十一章 メソッド");
  useScrollHistory();
  return (
    <main>
      <h1>第十一章 メソッド</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter11", displayName: "第十一章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>未定稿です。お待ちください。</p>
      <NextPrev
        prev={{
          link: "/part1/chapter10",
          title: "第十章 クラスとインスタンス",
        }}
        next={{ link: "/part1/chapter12", title: "第十二章 カプセル化" }}
      />
    </main>
  );
};
