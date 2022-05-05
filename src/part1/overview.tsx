import React from "react";
import { Breadcrumbs } from "../component/breadcrumbs";
import { PublicBasedLink } from "../component/public_based_link";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Overview = () => {
  useTitle("第一部 Swift入門");
  useScrollHistory();
  return (
    <main>
      <h1>第一部 Swift入門</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
        ]}
      />
      <p>
        SwiftはiOS/MacOS向けのアプリを開発するための言語です。基本的に
        <a href="https://developer.apple.com/jp/xcode/">Xcode</a>
        での開発になります。
      </p>
      <p>
        第一部ではSwiftの環境構築から基礎的な知識について学んでいきます。以下、目次です。
      </p>
      <ul>
        <li>
          第一章 <PublicBasedLink to="part1/chapter1">環境構築</PublicBasedLink>
        </li>
        <li>
          第二章
          <PublicBasedLink to="part1/chapter2">
            プログラムの基本構造
          </PublicBasedLink>
        </li>
        <li>
          第三章
          <PublicBasedLink to="part1/chapter3">式と演算子</PublicBasedLink>
        </li>
        <li>
          第四章 <PublicBasedLink to="part1/chapter4">条件分岐</PublicBasedLink>
        </li>
        <li>
          第五章 <PublicBasedLink to="part1/chapter5">繰り返し</PublicBasedLink>
        </li>
        <li>
          第六章 <PublicBasedLink to="part1/chapter6">配列</PublicBasedLink>
        </li>
        <li>
          第七章 <PublicBasedLink to="part1/chapter7">構造体</PublicBasedLink>
        </li>
        <li>
          第八章 <PublicBasedLink to="part1/chapter8">関数</PublicBasedLink>
        </li>
        <li>
          第九章
          <PublicBasedLink to="part1/chapter9">
            オブジェクト指向の導入
          </PublicBasedLink>
        </li>
        <li>
          第十章
          <PublicBasedLink to="part1/chapter10">
            クラスとインスタンス
          </PublicBasedLink>
        </li>
        <li>
          第十一章
          <PublicBasedLink to="part1/chapter11">メソッド</PublicBasedLink>
        </li>
        <li>
          第十二章
          <PublicBasedLink to="part1/chapter12">カプセル化</PublicBasedLink>
        </li>
        <li>
          第十三章 <PublicBasedLink to="part1/chapter13">継承</PublicBasedLink>
        </li>
        <li>
          第十四章
          <PublicBasedLink to="part1/chapter14">プロトコル</PublicBasedLink>
        </li>
        <li>
          第十五章
          <PublicBasedLink to="part1/chapter15">
            エラーハンドリング
          </PublicBasedLink>
        </li>
        <li>
          第十六章
          <PublicBasedLink to="part1/chapter16">標準ライブラリ</PublicBasedLink>
        </li>
      </ul>
    </main>
  );
};
