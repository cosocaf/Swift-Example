import React from "react";
import { Link } from "react-router-dom";
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
            第一部 <Link to="/part1">Swift入門</Link>
          </h3>
          <ul>
            <li>
              第一章
              <Link to="/part1/chapter1">環境構築</Link>
            </li>
            <li>
              第二章
              <Link to="/part1/chapter2">プログラムの基本構造</Link>
            </li>
            <li>
              第三章
              <Link to="/part1/chapter3">式と演算子</Link>
            </li>
            <li>
              第四章
              <Link to="/part1/chapter4">条件分岐</Link>
            </li>
            <li>
              第五章
              <Link to="/part1/chapter5">繰り返し</Link>
            </li>
            <li>
              第六章 <Link to="/part1/chapter6">配列</Link>
            </li>
            <li>
              第七章
              <Link to="/part1/chapter7">構造体</Link>
            </li>
            <li>
              第八章 <Link to="/part1/chapter8">関数</Link>
            </li>
            <li>
              第九章
              <Link to="/part1/chapter9">オブジェクト指向の導入</Link>
            </li>
            <li>
              第十章
              <Link to="/part1/chapter10">クラスとインスタンス</Link>
            </li>
            <li>
              第十一章
              <Link to="/part1/chapter11">メソッド</Link>
            </li>
            <li>
              第十二章
              <Link to="/part1/chapter12">カプセル化</Link>
            </li>
            <li>
              第十三章
              <Link to="/part1/chapter13">継承</Link>
            </li>
            <li>
              第十四章
              <Link to="/part1/chapter14">プロトコル</Link>
            </li>
            <li>
              第十五章
              <Link to="/part1/chapter15">エラーハンドリング</Link>
            </li>
            <li>
              第十六章
              <Link to="/part1/chapter16">標準ライブラリ</Link>
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
