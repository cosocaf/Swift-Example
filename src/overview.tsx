import React from "react";

export const Overview = () => {
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
            第一部 <a href="/part1">Swift入門</a>
          </h3>
          <ul>
            <li>
              第一章 <a href="/part1/chapter1">環境構築</a>
            </li>
            <li>
              第二章 <a href="/part1/chapter2">プログラムの基本構造</a>
            </li>
            <li>
              第三章 <a href="/part1/chapter3">式と演算子</a>
            </li>
            <li>
              第四章 <a href="/part1/chapter4">条件分岐</a>
            </li>
            <li>
              第五章 <a href="/part1/chapter5">繰り返し</a>
            </li>
            <li>
              第六章 <a href="/part1/chapter6">配列</a>
            </li>
            <li>
              第七章 <a href="/part1/chapter7">構造体</a>
            </li>
            <li>
              第八章 <a href="/part1/chapter8">関数</a>
            </li>
            <li>
              第九章 <a href="/part1/chapter9">オブジェクト指向の導入</a>
            </li>
            <li>
              第十章 <a href="/part1/chapter10">クラスとインスタンス</a>
            </li>
            <li>
              第十一章 <a href="/part1/chapter11">メソッド</a>
            </li>
            <li>
              第十二章 <a href="/part1/chapter12">カプセル化</a>
            </li>
            <li>
              第十三章 <a href="/part1/chapter13">継承</a>
            </li>
            <li>
              第十四章 <a href="/part1/chapter14">プロトコル</a>
            </li>
            <li>
              第十五章 <a href="/part1/chapter15">エラーハンドリング</a>
            </li>
            <li>
              第十六章 <a href="/part1/chapter16">標準ライブラリ</a>
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
