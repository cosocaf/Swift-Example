import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter13 = () => {
  useTitle("第十三章 継承");
  useScrollHistory();
  return (
    <main>
      <h1>第十三章 継承</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter13", displayName: "第十三章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>未定稿です。お待ちください。</p>
      <NextPrev
        prev={{ link: "/part1/chapter12", title: "第十二章 カプセル化" }}
        next={{ link: "/part1/chapter14", title: "第十四章 プロトコル" }}
      />
    </main>
  );
};
