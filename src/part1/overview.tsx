import React from "react";
import { Link } from "react-router-dom";

import { Breadcrumbs } from "../component/breadcrumbs";
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
          第一章 <Link to="/part1/chapter1">環境構築</Link>
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
          第四章 <Link to="/part1/chapter4">条件分岐</Link>
        </li>
        <li>
          第五章 <Link to="/part1/chapter5">繰り返し</Link>
        </li>
        <li>
          第六章 <Link to="/part1/chapter6">配列</Link>
        </li>
        <li>
          第七章 <Link to="/part1/chapter7">構造体</Link>
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
          第十三章 <Link to="/part1/chapter13">継承</Link>
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
    </main>
  );
};
