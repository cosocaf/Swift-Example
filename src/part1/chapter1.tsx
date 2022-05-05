import React from "react";

import img1 from "../../assets/part1-chapter1-img1.png";
import { NextPrev } from "../component/next_prev";

export const Chapter1 = () => {
  return (
    <main>
      <h1>第一章 環境構築</h1>
      <p>第一章ではSwiftで開発をするための環境構築について説明します。</p>
      <h2>App Storeからインストール</h2>
      <ul>
        <li>App Storeの左上検索ボックスに「Xcode」と入力</li>
        <li>Xcodeを探し、「入手」をクリック</li>
      </ul>
      <p>※Xcodeはファイルサイズが大きいのでダウンロードに時間を要します。</p>
      <h2>Xcodeを起動し、新規プロジェクトを作成</h2>
      <ul>
        <li>Xcodeを起動する</li>
        <li>Create a new Xcode projectを選択</li>
        <li>macOS→Command Line Toul→Next</li>
        <li>Product Nameに任意の名前を付ける(半角英数字)</li>
        <li>LanguageにSwiftが選択されていることを確認</li>
        <li>Nextをクリック</li>
        <li>プロジェクトのファイル一式が入るフォルダを選択</li>
        <li>Createをクリック</li>
      </ul>
      <p>
        もし、左のファイル群に拡張子が表示されていない場合(main.swiftではなく単にmainである場合)はメニュー→Xcode→Preferences→GeneralにあるFile
        ExtentionsをShow Allに変更してください。
      </p>
      <h2>プログラムを実行してみる</h2>
      <p>
        main.swiftをクリックすると<code>print("Hello, World!")</code>
        と書かれた画面が出てくると思います。 これこそがSwiftのソースコードです。
      </p>
      <p>
        試しに⌘+Rを押してみましょう。もし、パスワードの入力が求められたら入力し、許可を押します。
      </p>
      <p>
        しばらく待つと(長ければ数分かかるかもしれません)、画面下のほうからタブが出てきて
        <code>Hello, World!</code>と表示されます。
      </p>
      <figure>
        <img src={img1} alt="成功例の画像" />
        <figcaption>成功例</figcaption>
      </figure>
      <NextPrev
        prev={{ link: "/part1", title: "第一部 Swift入門" }}
        next={{ link: "/part1/chapter2", title: "第二章 プログラムの基本構造" }}
      />
    </main>
  );
};
