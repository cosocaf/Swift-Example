import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../component/breadcrumbs";
import { CodeFrame } from "../component/code_frame";
import { LastUpdate } from "../component/last_update";
import { Message } from "../component/message";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter2 = () => {
  useTitle("第二章 プログラムの基本構造");
  useScrollHistory();
  return (
    <main>
      <h1>第二章 プログラムの基本構造</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter2", displayName: "第二章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>
        <Link to="/part1/chapter1">前章</Link>では、画面に「Hello,
        World!」と表示されるプログラムを実行してみました。
      </p>
      <CodeFrame
        code={`
        print("Hello, World!")
      `}
      />
      <h2>画面に好きな文字を表示させよう</h2>
      <p>
        先ほどのプログラムの&quot;Hello,
        World!&quot;書き換えてみてください。日本語でも構いません。書き換えたら⌘+Rで実行できます。
      </p>
      <CodeFrame
        code={`
          print("吾輩は猫である。")
        `}
      />
      <CodeFrame
        code={`
          実行結果：
          吾輩は猫である。
        `}
      />
      <p>
        もしプログラムに誤りがあれば、エラーとなり実行できません。よくある誤りとして以下のように書いてしまうことがあります。
      </p>
      <CodeFrame
        code={`
          print(Hello)
        `}
      />
      <p>さて、このコードは何がいけないのでしょうか。</p>
      <p>
        Helloの周りをよく見ると、&quot;(ダブルクォート)がありません。以下のように修正すれば正しく実行できます。
      </p>
      <CodeFrame
        code={`
          print("Hello")
        `}
      />
      <h2>複数行の文章を表示しよう</h2>
      <p>二行以上の文章を表示することもできます。以下のように書くだけです。</p>
      <CodeFrame
        code={`
          print("吾輩は猫である。")
          print("名前はまだない。")
          print("どこで生れたか頓と見当がつかぬ。")
        `}
      />
      <CodeFrame
        code={`
          実行結果：
          吾輩は猫である。
          名前はまだない。
          どこで生れたか頓と見当がつかぬ。
        `}
      />
      <p>上から順に実行されていることがポイントです。</p>
      <h2>数字を表示しよう</h2>
      <p>
        今までは文字列を表示していただけでしたが、今度は数字を表示してみましょう。文字列と違い、数字は&quot;で囲いません。
      </p>
      <CodeFrame
        code={`
          print(123)
        `}
      />
      <CodeFrame
        code={`
          実行結果：
          123
        `}
      />
      <h2>計算をしよう</h2>
      <p>
        数字同士は+や-などの「演算子」と組み合わせて計算することができます。
      </p>
      <CodeFrame
        code={`
          print(2 + 3)
        `}
      />
      <CodeFrame
        code={`
          実行結果：
          5
        `}
      />
      <p>
        ほんの一例ですが、以下のような演算子があります。詳しくは
        <Link to="/part1/chapter3">第三章</Link>で説明します。
      </p>
      <ul>
        <li>加算: +演算子</li>
        <li>減算: -演算子</li>
        <li>乗算: *演算子</li>
        <li>除算: /演算子</li>
        <li>剰余: %演算子</li>
      </ul>
      <h2>文字列を+演算子でくっつけよう</h2>
      <p>+演算子は加算だけではなく文字列同士をくっつけることもできます。</p>
      <CodeFrame
        code={`
          print("春は" + "あけぼの")
        `}
      />
      <CodeFrame
        code={`
          実行結果：
          春はあけぼの
        `}
      />
      <h2>コメントについて</h2>
      <p>
        今はせいぜい数行のソースコードですが、今後長くなっていくとどこに何を書いているのかが(それを書いた自分自身ですら)わからなくなってしまいます。
        そこでプログラムを読みやすくするため、ソースコード中に説明文を書き込むことができます。これを「コメント」といい、プログラムの実行時に一切影響を与えません。単に無視されます。コメントには二通りの書き方があります。
      </p>
      <h3>一行コメント</h3>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <p>//と入力することで、そこから行末までがコメントになります。</p>
      <CodeFrame
        code={`
          print("hello") // helloと出力します。
          // print("world") 先頭に//を書いているため、worldは出力されません。
        `}
      />
      <h3>ブロックコメント</h3>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <p>/*と*/がペアになり、その間のすべてが行を超えてコメントになります。</p>
      <CodeFrame
        code={`
          /*
            これはブロックコメントです。
            複数行にわたってコメントになります。
          */
          print("hello")
          print(/* 
            こんなところにも入ります。
            コメントは単純に無視されるのでちゃんとworldと出力されます。 
            */ "world")
        `}
      />
      <p>
        main.swiftの上のほうにある//からはじまるプロジェクトの名前や作成者に関する記述もコメントです。あってもなくても問題なく動作します。
      </p>
      <h2>変数</h2>
      <p>
        今まではprintの中に直接出力したいものを入れていました。複雑な計算式の結果を出力したいときは気合と根性で書くしかないのでしょうか。
        また、情報に修正があった場合、書き直しが大変になりそうです。
      </p>
      <p>次の問題を考えます。</p>
      <p>
        商品AからDがあり、それぞれの単価は150円、320円、400円、560円です。
        太郎さんはこれらをそれぞれ4個、3個、10個、8個買いました。
        さて、合計いくらでしょうか。
      </p>
      <p>実際にコードを書いてみましょう。</p>
      <CodeFrame
        code={`
          print(150 * 4 + 320 * 3 + 400 * 10 + 560 * 8)
        `}
      />
      <p>
        気まぐれな太郎さんは商品Cを15個買うことにしました。また、運よく商品Bの割引券を入手し、一つ220円で買うことができます。
        その場合の合計金額はいくらでしょうか。
      </p>
      <CodeFrame
        code={`
          print(150 * 4 + 220 * 3 + 400 * 15 + 560 * 8)
        `}
      />
      <p>
        かいてみてどうでしたか？
        式が複雑になると修正が大変になりそうだということが分かったかと思います。
        これを楽にするために「変数」というものを使ってみましょう。
      </p>
      <p>
        let A =
        50と記述することで、変数Aを定義し、その変数に50を代入する。という意味になります。
      </p>
      <CodeFrame
        code={`
          let A = 150 * 4
          let B = 320 * 3
          let C = 40 * 10
          let D = 560 * 8
          print(A + B + C + D)
        `}
      />
      <p>
        もとのプログラムより記述が長くなってしまいましたが、こちらのほうがすっきり記述できているかと思います。
      </p>
      <h2>変数宣言</h2>
      <p>
        変数宣言とは、新たな変数を用意しろとコンピュータに指示する命令です。変数とは数学の変数と少し異なり、データを格納するための箱のようなものだと考えてください。
      </p>
      <p>
        let Aのような形で使用します。
        これは新たな変数Aを用意しろとコンピュータに指示しています。
      </p>
      <h2>変数の名前</h2>
      <p>
        今までの例では変数の名前を基本的に一文字にしていました。しかし、実際は任意の名前を付けることができます。ただし、半角英数字、アンダーバー、ドルマークのみ使用可能です。厳密にはひらがな、漢字なども使えないこともないのですが、推奨されないのでやめましょう。
      </p>
      <CodeFrame
        code={`
          let name = "Tom"
          let age = 23
          // 下二行はエラーにはならないが推奨されない。
          let 名前 = "太郎"
          let 年齢 = 30
        `}
      />
      <p>
        また、変数名の大文字・小文字は区別されます。
        例えば、次のコードはエラーとなり実行できません。
      </p>
      <CodeFrame
        code={`
        let name = "Tom"
        print(Name)
      `}
      />
      <h2>変数の命名規則</h2>
      <p>
        守らなくてもエラーにはなりませんが、コードの可読性を高めるために以下のルールに則った変数名をつけることが推奨されます。
      </p>
      <ul>
        <li>半角英数字、アンダーバー、ドルマークのみを使用する</li>
        <li>小文字で始める</li>
        <li>
          複数単語で構成する場合は二つ目以降の単語の頭文字を大文字にしてつなげる
        </li>
        <li>
          次章以降で解説する特別な例外を除き、１文字のみの名前や、省略形にした名前は避ける
        </li>
      </ul>
      <CodeFrame
        code={`
        let name = "Tom"                      // OK
        let mailAddress = "xxx@xxx.xxx"       // OK
        let Age = 20                          // NG: 先頭の文字は小文字にする → age
        let telephonenumber = "000-000-0000"  // NG: 単語の区切りは大文字にする → telephoneNumber
        let a = "hello"                       // NG: １文字のみでは何を表す変数なのかがわからない
        let msg = "hello"                     // NG: 省略形にしない → message
      `}
      />
      <h2>変数の使い方</h2>
      <p>
        Swiftでは、文字列を意味する&quot;hello&quot;や数字を意味する100とおなじように変数を使用できます。
      </p>
      <CodeFrame
        code={`
          let first = "春は"
          let second = "あけぼの"
          print(first + second)
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          春はあけぼの
        `}
      />
      <h2>入力を受け取る</h2>
      <p>
        print()を使うことで画面に文字列を出力できましたが、逆に画面から文字列を入力するにはどうしたらよいでしょうか。
      </p>
      <CodeFrame
        code={`
        let input = readLine()!
        print("あなたは" + input + "と入力しました。")
      `}
      />
      <p>print()で出力される画面と同じ画面に入力ができます。</p>
      <p>
        readLine()!とすることでキーボードから入力された一行を読み込むことができます。Lが大文字であることと「!」がつくことに注意してください。
      </p>
      <Message level="warning">
        2022/05/07現在、最新版のXcode(ver.
        13.3.1)では日本語入力を使用するとXcode自体がフリーズするバグがあります。
        アルファベットで入力するか、入力したい文字をコピペしましょう。
      </Message>
      <h2>練習問題：ちょっとしたノベルゲーム</h2>
      <p>
        さて、これまでの知識を応用して、ちょっとしたノベルゲームを作ってみましょう！以下の内容のプログラムを作成してください。
      </p>
      <ol>
        <li>画面に「魔王が世界を滅ぼそうとしている...」と表示する</li>
        <li>画面に「主人公の名前を入力してください」と表示する</li>
        <li>キーボードから一行入力を受け取り、変数nameに代入する</li>
        <li>画面に「勇者(主人公の名前)は冒険の旅に出た!」と表示する</li>
      </ol>

      <p>できましたか？それでは解答例です。</p>
      <CodeFrame
        code={`
          print("魔王が世界を滅ぼそうとしている...")
          print("主人公の名前を入力してください")
          let name = readLine()!
          print("勇者" + name + "は冒険の旅に出た!")
        `}
      />

      <NextPrev
        prev={{ link: "/part1/chapter1", title: "第一章 環境構築" }}
        next={{ link: "/part1/chapter3", title: "第三章 式と演算子" }}
      />
    </main>
  );
};
