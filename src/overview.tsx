import React from "react";
import { PublicBasedLink } from "./component/public_based_link";
import { useScrollHistory } from "./hooks/use_scroll_history";
import { useTitle } from "./hooks/use_title";

export const Overview = () => {
  useTitle("概要");
  useScrollHistory();
  return (
    <main>
      <h1>概要</h1>
      <p>
        このサイトはSwift初心者向けに作られたソース集です。
        プログラミング自体初めてという方にも読めるように作る予定です。
      </p>
      <h2>目次</h2>
      <ul>
        <li>
          <h3>
            第一部 <PublicBasedLink to="part1">Swift入門</PublicBasedLink>
          </h3>
          <ul>
            <li>
              第一章
              <PublicBasedLink to="part1/chapter1">環境構築</PublicBasedLink>
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
              第四章
              <PublicBasedLink to="part1/chapter4">条件分岐</PublicBasedLink>
            </li>
            <li>
              第五章
              <PublicBasedLink to="part1/chapter5">繰り返し</PublicBasedLink>
            </li>
            <li>
              第六章 <PublicBasedLink to="part1/chapter6">配列</PublicBasedLink>
            </li>
            <li>
              第七章
              <PublicBasedLink to="part1/chapter7">構造体</PublicBasedLink>
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
              第十三章
              <PublicBasedLink to="part1/chapter13">継承</PublicBasedLink>
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
              <PublicBasedLink to="part1/chapter16">
                標準ライブラリ
              </PublicBasedLink>
            </li>
          </ul>
        </li>
        <li>
          <h3>第二部 SwiftUIでミニゲーム作成</h3>
          <p>Coming soon.</p>
        </li>
      </ul>
      <p>
        このサイトのリポジトリは
        <a href="https://github.com/cosocaf/Swift-Example">ここ</a>にあります。
      </p>
    </main>
  );
};
