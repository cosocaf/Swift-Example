import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "../component/accordion";
import { Breadcrumbs } from "../component/breadcrumbs";
import { CodeFrame } from "../component/code_frame";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter3 = () => {
  useTitle("第三章 式と演算子");
  useScrollHistory();
  return (
    <main>
      <h1>第三章 式と演算子</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter3", displayName: "第三章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>
        <Link to="/part1/chapter2">前章</Link>
        では、変数を使って単純な文章を表示できるようになりました。
      </p>
      <p>今回は式と演算子について学びます。</p>
      <h2>データ型</h2>
      <p>式を構成する最小単位を「値」といいます。</p>
      <CodeFrame
        lang="swift"
        code={`
          let userId = 100
          let message = "hello"
        `}
      />
      <ul>
        <li>100</li>
        <li>&quot;hello&quot;</li>
        <li>userId</li>
        <li>message</li>
      </ul>
      <p>
        これらはすべて「値」です。値にはそれぞれ扱っているデータの種類が決まっており、それを「データ型」または単に「型」と呼ばれています。(本サイトでは単に「型」といいます。)
        Swiftには数多くの型がありますが、とりあえず以下の型だけ覚えておけば十分です。
      </p>
      <h3>Int</h3>
      <p>
        整数を表します。整数を意味するIntegerに由来します。32bit環境ではInt32、64bit環境ではInt64と同じです。
      </p>
      <h3>Int8</h3>
      <p>8bitで整数を表します。-128から127を表せます。</p>
      <h3>Int16</h3>
      <p>16bitで整数を表します。-32768から32767を表せます。</p>
      <h3>Int32</h3>
      <p>32bitで整数を表します。-2147483648から2147483647を表せます。</p>
      <h3>Int64</h3>
      <p>
        64bitで整数を表します。-9223372036854775808から9223372036854775807を表せます。
      </p>
      <h3>UInt</h3>
      <p>
        符号なし整数を表します。符号なし整数を表すUnsigned
        Integerに由来します。32bit環境ではUInt32、64bit環境ではUInt64と同じです。
      </p>
      <h3>UInt8</h3>
      <p>8bitで符号なし整数を表します。0から255を表せます。</p>
      <h3>UInt16</h3>
      <p>16bitで符号なし整数を表します。0から65535を表せます。</p>
      <h3>UInt32</h3>
      <p>32bitで符号なし整数を表します。0から4294967295を表せます。</p>
      <h3>UInt64</h3>
      <p>
        64bitで符号なし整数を表します。0から18446744073709551615を表します。
      </p>
      <h3>Float</h3>
      <p>
        32bitで実数を表します。浮動小数点を意味するFloating Pointに由来します。
      </p>
      <h3>Double</h3>
      <p>
        64bitで実数を表します。倍精度浮動小数点を意味するDouble Precision
        Floating Pointに由来します。
      </p>
      <h3>String</h3>
      <p>文字列を表します。</p>
      <h3>Bool</h3>
      <p>真偽値を表します。値はtrueとfalseのみです。</p>
      <h2>リテラル</h2>
      <p>
        100や&quot;hello&quot;のように、ソースコード中に直接書かれた値を「リテラル」といいます。100はInt型、&quot;hello&quot;はString型のリテラルです。
      </p>
      <CodeFrame
        lang="swift"
        code={`
          let userId = 100      // 変数userIdにInt型のリテラル「100」を代入
          let message = "hello" // 変数messageにString型のリテラル「"hello"」を代入
          let result = true     // 変数resultにBool型のリテラル「true」を代入
        `}
      />
      <h2>変数の型</h2>
      <p>
        リテラルと同様に変数にも「型」があります。
        基本的には代入したリテラルの型と同様の型が自動的に割り振られます。ただし、ソースコード上に明示することもできます。
      </p>
      <CodeFrame
        lang="swift"
        code={`
          let userId: Int = 100
        `}
      />
      <p>
        このように、変数名の直後に:(コロン)と型を記述することで、その変数の型を明示することができます。大抵の場合は自動で割り当てられるもので十分ですが、可読性やバグの防止のために明示できるなら明示しておきましょう。
      </p>
      <CodeFrame
        lang="swift"
        code={`
          let userId: Int = "hello" // エラー: Int型の変数にString型の変数は代入できない
        `}
      />
      <h2>変数の宣言と代入の分離</h2>
      <p>Swiftでは、変数の宣言と代入を分離することができます。</p>
      <CodeFrame
        lang="swift"
        code={`
          let message: String
          message = "hello"
        `}
      />
      <p>
        このように一行目で=の先を書かずに別の行で代入できます。特に一行目を「変数の宣言」二行目を「変数の代入」といいます。変数の宣言と代入を分離する場合、宣言には必ず型を明示しなければなりません。
      </p>
      <CodeFrame
        lang="swift"
        code={`
          let message       // エラー
          message = "hello"
        `}
      />
      <h2>変数の再代入</h2>
      <p>ときどき、一度代入した変数に別の値を代入したくなる時があります。</p>
      <CodeFrame
        lang="swift"
        code={`
          let message: String

          message = "hello"
          print(message)

          message = "こんにちは"
          print(message)
        `}
      />
      <p>
        試してみると、二回目の代入でエラーになると思います。
        Swiftでは、letではなく「var」で宣言した変数は何度でも代入ができます。
      </p>
      <CodeFrame
        lang="swift"
        code={`
          var message: String

          message = "hello"
          print(message)

          message = "こんにちは"
          print(message)
        `}
      />
      <CodeFrame
        lang="text"
        code={`
          出力結果：
          hello
          こんにちは
        `}
      />
      <p>
        実行結果からわかるように、変数に再代入すると新しい値に内容が書き換わります。
      </p>
      <p>しかし、大抵の変数は再代入されては困ります。</p>
      <CodeFrame
        lang="swift"
        code={`
        var userName = "Tom"
        print("あなたの名前は" + userName + "です。")

        // ...たくさんの長い処理

        userName = "James" // 誤って書き換えてしまった

        // ...たくさんの長い処理

        print("あなたの名前は" + userName + "です。")
      `}
      />
      <CodeFrame
        lang="text"
        code={`
          出力結果：
          あなたの名前はTomです。
          あなたの名前はJamesです。
        `}
      />
      <p>
        大変です!本来変わってはいけないはずのユーザー名が変わってしまいました。
        このようなバグを未然に防ぐためにも、基本的にはletを使いましょう!
      </p>
      <CodeFrame
        lang="swift"
        code={`
        let userName = "Tom" // varからletに修正
        print("あなたの名前は" + userName + "です。")

        // ...たくさんの長い処理

        userName = "James" // エラー: 再代入できない

        // ...たくさんの長い処理

        print("あなたの名前は" + userName + "です。")
      `}
      />
      <h2>式</h2>
      <p>
        それでは本章の本題です。評価されることによって値となる組み合わせを総称して「式」といいます。なんだか抽象的ですね。では具体例を示します。
      </p>
      <ul>
        <li>100</li>
        <li>&quot;hello&quot;</li>
        <li>true</li>
        <li>100 + 200</li>
        <li>message</li>
      </ul>
      <p>
        これらはすべて「式」です。100、&quot;hello&quot;、trueなどのリテラルやmessageなどの変数、100
        + 200などの式と演算子を組み合わせたものも式です。
      </p>
      <p>
        式を構成する値のことを「オペランド」、+や=などを「演算子」といいます。式を構成するすべての要素はオペランドと演算子に分類できます。
      </p>
      <h2>式の評価</h2>
      <p>
        式に従い、計算を実行することを「評価」といいます。
        評価は式の一部から少しずつ処理され、最後には式全体が処理されます。例えば「100
        + 200 - 50」の場合、+演算子が100と200を使い、「300 -
        50」に評価されます。つぎに-演算子が300と50を使い、「250」に評価されます。このようにして式全体が「250」に評価されました。
      </p>
      <h2>評価の優先順位</h2>
      <p>
        式に演算子が複数ある場合は優先順位の高い演算子から順に評価されます。演算子ごとに優先順位のグループが定まっており、+演算子よりも*演算子のほうが先に評価されます。
      </p>
      <p>
        例えば、「1 + 2 * 3」は「1 + 6」に評価され、「7」に評価されます。「1 +
        2」を先に評価したい場合は、その部分を()で囲います。「(1 + 2) * 3」は「3
        * 3」に評価され、「9」に評価されます。
      </p>
      <h2>演算子</h2>
      <p>
        +や=以外にも、Swiftにはたくさんの演算子が定められています。全ては紹介しきれませんが、代表的な演算子を紹介します。
      </p>
      <h3>算術演算子</h3>
      <p>四則演算を行う演算子です。算術演算子といいます。</p>
      <h4>+演算子</h4>
      <p>加算を行います。「10 + 20」を「30」に評価します。</p>
      <h4>-演算子</h4>
      <p>減算を行います。「20 - 10」を「10」に評価します。</p>
      <h4>*演算子</h4>
      <p>乗算を行います。「2 * 3」を「6」に評価します。</p>
      <h4>/演算子</h4>
      <p>
        除算を行います。「10 /
        5」を「2」に評価します。ただし、Int型での除算は結果が切り捨てられるため注意が必要です。
      </p>
      <h4>%演算子</h4>
      <p>剰余を行います。「5 % 2」を「1」に評価します。</p>
      <h3>文字列結合演算子</h3>
      <p>文字列同士を結合する演算子です。</p>
      <h4>+演算子</h4>
      <p>
        文字列を結合します。「&quot;春は&quot; +
        &quot;あけぼの&quot;」を「&quot;春はあけぼの&quot;」に評価します。
      </p>
      <h3>代入演算子</h3>
      <p>
        右オペランドの内容を左オペランドに代入する演算子です。ただし、左オペランドは代入可能な変数でなければなりません。いずれも優先順位が最低です。
      </p>
      <h4>=演算子</h4>
      <p>
        左オペランドに右オペランドを代入します。「a =
        10」でaに10が代入されます。
      </p>
      <h4>+=演算子</h4>
      <p>
        左オペランドに左オペランド+右オペランドを代入します。「a += 10」でaにa +
        10が代入されます。
      </p>
      <h4>-=演算子</h4>
      <p>
        左オペランドに左オペランド-右オペランドを代入します。「a -= 10」でaにa -
        10が代入されます。
      </p>
      <h4>*=演算子</h4>
      <p>
        左オペランドに左オペランド*右オペランドを代入します。「a *= 10」でaにa *
        10が代入されます。
      </p>
      <h4>/=演算子</h4>
      <p>
        左オペランドに左オペランド/右オペランドを代入します。「a /= 10」でaにa /
        10が代入されます。
      </p>
      <h4>%=演算子</h4>
      <p>
        左オペランドに左オペランド%右オペランドを代入します。「a %= 10」でaにa %
        10が代入されます。
      </p>
      <h3>比較演算子</h3>
      <p>
        左オペランドと右オペランドを比較し、それが真であれば「true」に、偽であれば「false」に評価する演算子です。Bool型に評価されます。
      </p>
      <h4>&lt;演算子</h4>
      <p>
        左オペランドが右オペランド未満であれば「true」そうでなければ「false」に評価します。「10
        &lt; 20」は「true」に評価されます。
      </p>
      <h4>&lt;=演算子</h4>
      <p>
        左オペランドが右オペランド以下であれば「true」そうでなければ「false」に評価します。「20
        &lt;= 20」は「true」に評価されます。
      </p>
      <h4>&gt;演算子</h4>
      <p>
        左オペランドが右オペランドより大きければ「true」そうでなければ「false」に評価します。「50
        &gt; 40」は「true」に評価されます。
      </p>
      <h4>&gt;=演算子</h4>
      <p>
        左オペランドが右オペランド以上であれば「true」そうでなければ「false」に評価します。「20
        &gt;= 40」は「false」に評価されます。
      </p>
      <h4>==演算子</h4>
      <p>
        左オペランドが右オペランドと等しければ「true」そうでなければ「false」に評価します。「10
        == 10」は「true」に評価されます。
      </p>
      <h4>!=演算子</h4>
      <p>
        左オペランドが右オペランドと等しくなければ「true」そうでなければ「false」に評価します。「5
        != 10」は「true」に評価されます。
      </p>
      <h2>型の変換</h2>
      <p>以下のコードを書いてみてください。</p>
      <CodeFrame
        lang="swift"
        code={`
          let name = "勇者"
          let level = 20
          print(name + "のレベルは" + level + "です。")
        `}
      />
      <p>きっとエラーになって実行できないでしょう。なぜだかわかりますか？</p>
      <p>
        式の評価を順に追っていくと、「&quot;のレベルは&quot; +
        level」の部分で左右のオペランドが異なる型(StringとInt)になってしまっています。Swiftはこのように異なる型同士の演算は原則としてできません。
      </p>
      <p>しかし、Swiftは型を「変換」することができます。</p>
      <h3>Int → String</h3>
      <CodeFrame
        lang="swift"
        code={`
          let int = 100
          let str = String(int)
          print("str is " + str)
        `}
      />
      <CodeFrame
        lang="text"
        code={`
          出力結果：
          str is 100
        `}
      />
      <p>
        このように、String()の中に値を入れることでその値をString型に変換できます。
      </p>
      <h3>String → Int</h3>
      <CodeFrame
        lang="swift"
        code={`
          let str = "100"
          let int = Int(str)!
          print(int + 20)
        `}
      />
      <CodeFrame
        lang="text"
        code={`
          出力結果：
          120
        `}
      />
      <p>
        このように、Int()!の中に値を入れることでその値をInt型に変換できます。String()のときと違い、「!」がついているところがポイントです。簡単に言うとInt()は入れた文字列が数字に変換できない値だった時に空の値を返すからなのですが、詳しくは別の章で解説します。今のところはおまじないのようなものだと思っていてください。
      </p>
      <h3>コードの修正</h3>
      <p>
        では、先ほどのコードを修正しましょう。下のコードを見ずに自分で書いてから先に進むようにしてください。
      </p>
      <CodeFrame
        lang="swift"
        code={`
          let name = "勇者"
          let level = 20
          print(name + "のレベルは" + String(level) + "です。")
        `}
      />
      <CodeFrame
        lang="text"
        code={`
          出力結果：
          勇者のレベルは20です。
        `}
      />
      <h2>便利な命令</h2>
      <p>
        今までに学んだ通り、Swiftには「画面に表示する」「キーボードから入力を受け取る」「型を変換する」などの命令があります。詳しくは
        <Link to="/part1/chapter8">第八章</Link>
        で学びますが、これらの機能を「関数」といいます。
      </p>
      <p>
        これらのほかにも関数はたくさんあります。その中から便利な関数をいくつか紹介します。
      </p>
      <h3>乱数生成</h3>
      <CodeFrame
        lang="swift"
        code={`
          // 1から10の範囲でランダムな整数を生成
          let randomInt = Int.random(in: 1...10)
        `}
      />
      <p>
        なにやら「.」や「in:」や「1...10」などのよくわからない記述がありますが、とにかくこのように記述することで1から10のランダムな整数値を生成できます。予想がつくかもしれませんが「1...10」を「20...30」にすれば20から30のランダムな整数値が生成されます。
      </p>
      <h3>二つのうち大きいほう/小さいほうを取得</h3>
      <CodeFrame
        lang="swift"
        code={`
          let x = 10
          let y = 20
          let a = min(x, y)
          let b = max(x, y)
          print(a)
          print(b)
        `}
      />
      <CodeFrame
        lang="text"
        code={`
          出力結果：
          10
          20
        `}
      />
      <p>
        min(x, y)とすることで、xとyの小さいほうを取得できます。同様にmax(x,
        y)とすることで、xとyの大きいほうを取得できます。
      </p>
      <h2>第三章のまとめ</h2>
      <p>今回は次のことを学びました。</p>
      <ul>
        <li>式を構成する最小単位を「値」という</li>
        <li>値には必ず「データ型」が存在する</li>
        <li>評価されることによって値に代わるものを「式」という</li>
        <li>式は「オペランド」と「演算子」で構成される</li>
        <li>オペランド同士の型は同じでなければならない</li>
        <li>演算子には優先順位がある</li>
        <li>letではなくvarで変数を作成することで再代入ができる</li>
        <li>String()やInt()で値の型を変換できる</li>
        <li>Int.random()やmin()、max()など、様々な機能がある</li>
      </ul>
      <h2>練習問題：ちょっとしたノベルゲーム２</h2>
      <p>
        前章の練習問題の続きです。以下のようなプログラムを作成してください。
      </p>
      <ol>
        <li>変数levelに整数1を代入する</li>
        <li>画面に「勇者のレベルは(level)だ。」と表示する</li>
        <li>画面に「勇者は特訓を始めた！」と表示する</li>
        <li>1から100までのランダムな整数を生成し、変数expに代入する</li>
        <li>画面に「(exp)ポイントの経験値を獲得！」と表示する</li>
        <li>変数levelにexpを加算する</li>
        <li>画面に「特訓の結果、(level)レベルに成長した！」と表示する</li>
      </ol>
      <p>できましたか？それでは解答例です。</p>
      <Accordion showMessage="解答を表示する" hideMessage="解答を隠す">
        <CodeFrame
          lang="swift"
          code={`
            var level = 1
            print("勇者のレベルは" + String(level) + "だ。")
            print("勇者は特訓を始めた！")
            let exp = Int.random(in: 1...100)
            print(String(exp) + "ポイントの経験値を獲得！")
            level += exp
            print("特訓の結果、" + String(level) + "レベルに成長した！")
          `}
        />
      </Accordion>
      <p>どうでしょうか？次章の練習問題ではいよいよ魔王に挑んでみます。</p>
      <NextPrev
        prev={{ link: "/part1/chapter2", title: "第二章 プログラムの基本構造" }}
        next={{ link: "/part1/chapter4", title: "第四章 条件分岐" }}
      />
    </main>
  );
};
