import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter16 = () => {
  useTitle("第十六章 標準ライブラリ");
  useScrollHistory();
  return (
    <main>
      <h1>第十六章 標準ライブラリ</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter16", displayName: "第十六章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>未定稿です。お待ちください。</p>
      <NextPrev
        prev={{
          link: "/part1/chapter15",
          title: "第十五章 エラーハンドリング",
        }}
        next={{ link: "/part2", title: "第二部 概要" }}
      />
    </main>
  );
};
