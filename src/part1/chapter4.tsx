import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "../component/accordion";
import { Breadcrumbs } from "../component/breadcrumbs";
import { CodeFrame } from "../component/code_frame";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter4 = () => {
  useTitle("第四章 条件分岐");
  useScrollHistory();
  return (
    <main>
      <h1>第四章 条件分岐</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter4", displayName: "第四章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>
        <Link to="/part1/chapter3">前章</Link>
        では、演算子を使って計算ができるようになりました。今回は条件によって処理を分ける「条件分岐」について学びます。
      </p>
      <h2>導入</h2>
      <p>私たちは日々、条件によって行動を変化させています。例えば、</p>
      <ul>
        <li>今日が晴れならピクニックへ行く</li>
        <li>今日が雨なら家でゲームをする</li>
      </ul>
      <p>
        この例では「晴れ」「雨」という「条件」に応じて「ピクニックへ行く」「家でゲームをする」など、「行動」を変化させています。これをプログラムで表現するにはどうしたらよいでしょうか。
      </p>
      <h2>if文</h2>
      <p>次のプログラムを見てください。</p>
      <CodeFrame
        code={`
          let isSunny = true
          if isSunny {
            print("ピクニックへ行く")
          }
          else {
            print("家でゲームをする")
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          ピクニックへ行く
        `}
      />
      <p>
        「ピクニックへ行く」とだけ表示され、「家でゲームをする」は表示されませんでした。試しにlet
        isSunny = trueをlet isSunny =
        falseにかえてみてください。どうでしたか？きっと「家でゲームをする」が表示されたはずです。
      </p>
      <p>
        察しが付いたかもしれませんが、このコードから次のことが考察できます。
      </p>
      <ul>
        <li>ifという命令は「条件」をもとに処理を「分岐」できる</li>
        <li>ifの次のisSunnyという部分には「分岐条件」を書く</li>
        <li>条件が成立していればその直後にある&#x7b;&#x7d;の中が実行される</li>
        <li>
          条件が成立しなければelseの直後にある&#x7b;&#x7d;の中が実行される
        </li>
      </ul>
      <h3>if文の要素</h3>
      <p>
        上記の考察で書いた「isSunny」の部分を「条件式」といいます。また、&#x7b;&#x7d;
        で囲われた部分を「ブロック」といいます。
      </p>
      <h3>ブロック</h3>
      <p>
        ブロックの中はブロックの外と全く同じことを記述できます。例えば、変数を定義したり、ブロックの中にさらにif文を書いたりできます。ブロックの中にさらにブロックを書くことを「ネストする」といいます。ネストはいくらでも深くできますが、深すぎるとコードの可読性が悪くなってしまいます。
      </p>
      <h4>ブロック内で宣言した変数の寿命</h4>
      <p>
        ブロックの中で宣言した変数は、そのブロックの中でしか使用できません。例えば、次のコードはエラーになります。
      </p>
      <CodeFrame
        code={`
          let isSunny = true
          if isSunny {
            let action = "ピクニック"
          }
          else {
            let action = "ゲーム"
          }
          print(action) // エラー
        `}
      />
      <p>
        このような「変数が利用可能な範囲」を変数の「スコープ」といいます。では、最後のprint(action)が実行できるように変数actionのスコープを広げてみましょう。あなたも実際に挑戦してみてください。
      </p>
      <Accordion showMessage="例を表示する" hideMessage="例を隠す">
        <CodeFrame
          code={`
          let isSunny = true
          let action: String
          if isSunny {
            action = "ピクニック"
          }
          else {
            action = "ゲーム"
          }
          print(action)
        `}
        />
        <CodeFrame
          code={`
          出力結果：
          ピクニック
        `}
        />
        <p>
          let
          actionの後につける:Stringを忘れないようにしましょう。また、actionは一度限り代入されることがわかっていますから、letで宣言できます。
        </p>
      </Accordion>
      <h2>条件式の書き方</h2>
      <p>
        条件式とは上記のisSunnyのような分岐条件を示す式のことでした。条件「式」と言っているようにここには式を記述することができます。ただし、その式はBool型に評価されなければなりません。
      </p>
      <p>
        <Link to="/part1/chapter3">前章</Link>
        を思い出してください。評価の結果Bool型になる演算子があったはずです。そう、「比較演算子」です。比較演算が使えれば、次のようなことを記述できます。
      </p>
      <CodeFrame
        code={`
          let weather = "sunny"
          // もし天気が晴れだったら...
          if weather == "sunny" {
            print("ピクニック")
          }
          // そうでなければ...
          else {
            print("ゲーム")
          }
        `}
      />
      <CodeFrame
        code={`
          let money = 200
          // もし120円以上持っていたら...
          if money >= 120 {
            print("ジュースを買う")
          }
          // そうでなければ...
          else {
            print("ジュースが買えなかった...")
          }
        `}
      />
      <p>
        注意したいことは、「等しい」かどうかを評価する演算子は「==」であることです。「=」は代入演算子なので注意が必要です。
      </p>
      <h2>文字列の比較演算</h2>
      <p>
        実は文字列も&lt;演算子や&gt;演算子などによる「大小の比較」ができます。ただし、文字列の比較の場合「辞書順」による大小の比較になります。
      </p>
      <CodeFrame
        code={`
          let money = "90円"
          if money >= "120円" {
            print("ジュースが買える")
          }
          else {
            print("ジュースが買えなかった...")
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          ジュースが買える
        `}
      />
      <p>
        120円と90円を「辞書順」で比較した場合、90円の方が大きいと評価されてしまいます。
      </p>
      <h2>複数条件による分岐</h2>
      <p>
        例えば、「年齢が20歳以上」かつ「住所が東京」のような条件を考えます。今までの書き方ならば次のようになります。
      </p>
      <CodeFrame
        code={`
          let age = 24
          let address = "Tokyo"
          // if age >= 20 address == "Tokyo"のようにはかけない
          if age >= 20 {
            if address == "Tokyo" {
              print("OK")
            }
            else {
              print("NG")
            }
          }
          else {
            print("NG")
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          OK
        `}
      />
      <p>
        少し複雑になってしまいました。このように二つ以上の条件を組み合わせて、より複雑な条件式にしたいことがあります。この場合には「論理演算子」を使います。
      </p>
      <h3>論理演算子</h3>
      <h4>&amp;&amp;演算子</h4>
      <p>
        「かつ」を表現します。左オペランドが「true」かつ、右オペランドが「true」であれば「true」に評価されます。
      </p>
      <h4>||演算子</h4>
      <p>
        「または」を表現します。左オペランドか右オペランドのどちらかが「true」であれば「true」に評価されます。
      </p>
      <p>では実際に論理演算子を使った例を見てみましょう。</p>
      <CodeFrame
        code={`
          let age = 24
          let address = "Tokyo"
          if age >= 20 && address == "Tokyo" {
            print("OK")
          }
          else {
            print("NG")
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          OK
        `}
      />
      <h2>否定形の条件</h2>
      <p>
        今までは、もし...ならばという条件でした。もし...でないならばという条件を作りたい場合はどうしたらいいでしょうか。
      </p>
      <p>
        そんな時に使えるのが!演算子です。!演算子は否定形の条件に使用できます。!演算子は優先順位が高いので、否定する条件を()でくくります。
      </p>
      <CodeFrame
        code={`
          let age = 24
          // もしageが20以上で「ない」なら...
          if !(age >= 20) {
            print("OK")
          }
          // そうでなければ
          else {
            print("NG")
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          NG
        `}
      />
      <h2>引っ掛かりやすいポイント</h2>
      <p>よくある間違えとして、次のように書いてしまうことがあります。</p>
      <CodeFrame
        code={`
          let age = 14
          // ageが13から15の中であれば...
          if 13 <= age <= 15 {
            print("中学生です。")
          }
          else {
            print("中学生ではありません。")
          }
        `}
      />
      <p>
        残念ながら、このコードはエラーとなり実行できません。演算子の評価について思い出してください。演算子はひとつづつ順番に評価されます。
      </p>
      <p>
        つまり、まず「13 &lt;= age &lt;= 15」は「true &lt;=
        15」に評価されるのです。この時点で左オペランドと右オペランドの型が一致しません。そのためエラーとなるのです。
      </p>
      <p>では、どのように記述すれば正しく実行できるかわかりますか？</p>
      <CodeFrame
        code={`
          let age = 14
          if 13 <= age && age <= 15 {
            print("中学生です。")
          }
          else {
            print("中学生ではありません。")
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          中学生です。
        `}
      />
      <h2>三つ以上に分岐する</h2>
      <p>
        晴れなら「ピクニックに行く」曇りなら「散歩をする」雨なら「ゲームをする」のように、三つに分岐することを考えます。今までの書き方ならば次のようになります。
      </p>
      <CodeFrame
        code={`
          let weather = "sunny"
          if weather == "sunny" {
            print("ピクニック")
          }
          else {
            if weather == "cloudy" {
              print("散歩")
            }
            else {
              print("ゲーム")
            }
          }
        `}
      />
      <p>
        三つならまだしも、これが四つ五つと増えていくと非常に複雑になってしまいます。
        Swiftではelseの直後にブロックを記述せず、if文を再び記述できます。これを「else-if構文」ということもあります。
      </p>
      <CodeFrame
        code={`
          let weather = "sunny"
          if weather == "sunny" {
            print("ピクニック")
          }
          else if weather == "cloudy" {
            print("散歩")
          }
          else {
            print("ゲーム")
          }
        `}
      />
      <h2>elseの省略</h2>
      <p>
        特定条件の時だけ何かを実行し、そうでないときには何もしないような場合、elseを省略できます。
      </p>
      <CodeFrame
        code={`
          let weather = "sunny"
          if weather == "sunny" {
            print("洗濯物を干す")
          }
        `}
      />
      <h2>練習問題1: おみくじゲーム</h2>
      <p>
        簡単なおみくじゲームを作ってみましょう。以下のようなプログラムを作成してください。
      </p>
      <ol>
        <li>画面に「神社にやってきました。おみくじを引きます。」と表示する</li>
        <li>1から7までのランダムな整数を生成し、変数fortuneに代入する</li>
        <li>変数fortuneが1なら「大吉」と表示する</li>
        <li>変数fortuneが2なら「中吉」と表示する</li>
        <li>変数fortuneが3なら「吉」と表示する</li>
        <li>変数fortuneが4なら「小吉」と表示する</li>
        <li>変数fortuneが5なら「末吉」と表示する</li>
        <li>変数fortuneが6なら「凶」と表示する</li>
        <li>変数fortuneが7なら「大凶」と表示する</li>
      </ol>
      <p>できましたか？それでは解答例です</p>
      <Accordion showMessage="解答例を表示する" hideMessage="解答例を隠す">
        <CodeFrame
          code={`
            print("神社にやってきました。おみくじを引きます。")
            let fortune = Int.random(in: 1...7)
            if fortune == 1 {
              print("大吉")
            }
            else if fortune == 2 {
              print("中吉")
            }
            else if fortune == 3 {
              print("吉")
            }
            else if fortune == 4 {
              print("小吉")
            }
            else if fortune == 5 {
              print("末吉")
            }
            else if fortune == 6 {
              print("凶")
            }
            else {
              print("大凶")
            }
          `}
        />
      </Accordion>
      <p>
        記述量が多く大変だったと思います。次節ではこれをもっとスマートに書く方法を解説します。
      </p>
      <h2>switch文</h2>
      <p>
        先ほどの練習問題のコードを見てください。「fortune ==
        ???」が何度も登場しています。
        このように、同じ式(ここでは変数fortune)に対して何度も比較場合にはif文よりもスマートな「switch文」に置き換えることができます。
      </p>
      <p>
        では、switch文の構文を確認しましょう。先ほどの練習問題を書き換えてみます。
      </p>
      <CodeFrame
        code={`
          print("神社にやってきました。おみくじを引きます。")
          let fortune = Int.random(in: 1...7)
          switch fortune {
          case 1:
            print("大吉")
          case 2:
            print("中吉")
          case 3:
            print("吉")
          case 4:
            print("小吉")
          case 5:
            print("末吉")
          case 6:
            print("凶")
          default:
            print("大凶")
          }
        `}
      />
      <p>まとめると、次のようになります。</p>
      <ul>
        <li>比較演算の左オペランドをswitch ??? &#x7b;の???におく</li>
        <li>比較演算の右オペランドをcase ???:の???におく</li>
        <li>if文で言うelseはdefault:になる</li>
      </ul>
      <p>if文と違い、default:を省略することはできません。</p>
      <p>
        どうでしょうか？繰り返しの記述が減り、スマートになったと思います。switch文はif文よりも登場回数が少ないですが、覚えておくといいと思います。
      </p>
      <h2>第四章のまとめ</h2>
      <p>今回は、次のことを学びました。</p>
      <ul>
        <li>条件によって処理を分岐することを「条件分岐という」</li>
        <li>if文は「条件式」と「ブロック」から構成される</li>
        <li>ブロック内で宣言した変数は、そのスコープの中でしか使用できない</li>
        <li>ブロックはいくらでもネストできる。</li>
        <li>三つ以上分岐するときはelse-if構文を使う</li>
        <li>
          複数の条件がある場合は&amp;&amp;演算子、||演算子を使用して条件を書く
        </li>
        <li>!演算子を使うことで否定形の条件を書ける</li>
        <li>elseは省略することができる</li>
        <li>switch文によってスマートに書けることがある</li>
      </ul>
      <h2>練習問題2: ちょっとしたノベルゲーム3</h2>
      <p>
        前章の練習問題の続きです。以下のようなプログラムを作成してください。
      </p>
      <ul>
        <li>変数levelに整数1を代入する</li>
        <li>画面に「勇者のレベルは(level)だ。」と表示する</li>
        <li>画面に「勇者は特訓を始めた！」と表示する</li>
        <li>1から99までのランダムな整数を生成し、変数expに代入する</li>
        <li>画面に「(exp)ポイントの経験値を獲得！」と表示する</li>
        <li>変数levelにexpを加算する</li>
        <li>画面に「特訓の結果、(level)レベルに成長した！」と表示する</li>
        <li>画面に「勇者は魔王に戦いを挑んだ。」と表示する</li>
        <li>
          もし、勇者のレベルが40以下であれば「勇者は負けてしまった...」と表示する
        </li>
        <li>
          もし、勇者のレベルが41以上80以下であれば「勇者はあと少しのところで負けてしまった...」と表示する
        </li>
        <li>
          もし、勇者のレベルが81以上であれば「勇者は見事勝利した！」と表示する
        </li>
      </ul>
      <p>できましたか？それでは解答例です。</p>
      <Accordion showMessage="解答を表示する" hideMessage="解答を隠す">
        <CodeFrame
          code={`
            var level = 1
            print("勇者のレベルは" + String(level) + "だ。")
            print("勇者は特訓を始めた！")

            let exp = Int.random(in: 1...99)
            print(String(exp) + "ポイントの経験値を獲得")

            level += exp
            print("特訓の結果、" + String(level) + "レベルに成長した！")

            print("勇者は魔王に戦いを挑んだ。")
            if level <= 40 {
              print("勇者は負けてしまった...")
            }
            // else if level >= 41 && level <= 80としなくても、level <= 40の処理は上に記述しているので問題ない
            else if level <= 80 {
              print("勇者はあと少しのところで負けてしまった...")
            }
            else {
              print("勇者は見事勝利した！")
            }
          `}
        />
      </Accordion>
      <p>
        どうでしょうか？次章の練習問題では、魔王に勝てるまで特訓するようなコードを書きます。
      </p>
      <NextPrev
        prev={{ link: "/part1/chapter3", title: "第三章 式と演算子" }}
        next={{ link: "/part1/chapter5", title: "第五章 繰り返し" }}
      />
    </main>
  );
};
