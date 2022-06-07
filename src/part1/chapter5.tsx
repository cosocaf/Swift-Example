import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "../component/accordion";
import { Breadcrumbs } from "../component/breadcrumbs";
import { CodeFrame } from "../component/code_frame";
import { LastUpdate } from "../component/last_update";
import { Message } from "../component/message";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter5 = () => {
  useTitle("第五章 繰り返し");
  useScrollHistory();
  return (
    <main>
      <h1>第五章 繰り返し</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter5", displayName: "第五章" },
        ]}
      />
      <LastUpdate date="2022/05/08" />
      <p>
        <Link to="/part1/chapter4">前章</Link>
        では条件分岐について学びました。今回は繰り返し処理について学びます。
      </p>
      <h2>導入</h2>
      <p>いきなりですが、以下のプログラムを作成してください。</p>
      <ul>
        <li>画面に1から5まで順番に表示する</li>
      </ul>
      <p>今のあなたなら簡単ですよね？一応解答例を示します。</p>
      <Accordion showMessage="解答例を表示する" hideMessage="解答例を隠す">
        <CodeFrame
          code={`
            print(1)
            print(2)
            print(3)
            print(4)
            print(5)
          `}
        />
      </Accordion>
      <p>
        では次に1から100まで表示するプログラムを考えてみてください。考えるだけでいいです。
      </p>
      <p>
        どうですか？100行も書くのは大変ですよね？
        今回はこんな時に使える「繰り返し」について学びます。
      </p>
      <h2>while文</h2>
      <p>次のプログラムを見てください。</p>
      <CodeFrame
        code={`
          var count = 1
          while count <= 10 {
            print(count)
            count += 1
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          1
          2
          3
          4
          5
          6
          7
          8
          9
          10
        `}
      />
      <p>
        1から10まで表示されました。試しにcount &lt;= 10をcount &lt;=
        5に変えたり、count += 1をcount += 2に変えたり、色々試してみてください。
      </p>
      <Message level="info">
        かえる内容によっては無限に繰り返してしまう「無限ループ」になってしまうことがあります。実行が止まらない場合は⌘+.(ドット)で強制的に停止することができるので、無限ループしてしまったときに試してください。
      </Message>
      <p>色々試して気づいたことがあると思います。</p>
      <ul>
        <li>whileという命令は「条件式」をもとに「繰り返し」ができる</li>
        <li>whileの直後に繰り返しの「条件式」を書く</li>
        <li>
          条件が成立している限り、直後のブロックが永遠に「繰り返し」される
        </li>
      </ul>
      <p>
        while文の「条件式」や「ブロック」はif文と全く同じです。条件式やブロックってなんだっけという方は
        <Link to="/part1/chapter4">前章</Link>を参照してください。
      </p>
      <h2>repeat-while文</h2>
      <p>
        while文の書き方にはもう一つのバリエーションがあります。それが「repeat-while文」です。
      </p>
      <p>
        while文はブロックを実行する「前」に条件分岐しますが、repeat-while文はブロックを実行した「後」に条件分岐します。
      </p>
      <CodeFrame
        code={`
          var count = 1
          repeat {
            print(count)
            count += 1
          } while count <= 10
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          1
          2
          3
          4
          5
          6
          7
          8
          9
          10
        `}
      />
      <p>
        結果として通常のwhile文と変わりませんでした。
        では、どういったときに使うべきなのでしょう。
        例えば、パスワードをもとにログインするシステムを考えます。
      </p>
      <ol>
        <li>変数passwordに正しいパスワード(何でもいい)を代入する</li>
        <li>画面に「パスワードを入力してください。」と表示する</li>
        <li>キーボードから入力を受け取り、変数inputに代入する</li>
        <li>もし、入力されたパスワードが間違っていれば2に戻る</li>
        <li>
          もし、入力されたパスワードが正しければ「ログインしました。」と表示する
        </li>
      </ol>
      <p>
        せっかくなので、あなたも挑戦してみてください。while文とrepeat-while文の両方が書けるとgoodです。
      </p>
      <p>while文で書くと、以下のようになります。</p>
      <CodeFrame
        code={`
          let password = "abcd"

          print("パスワードを入力してください。")
          var input = readLine()!
          while input != password {
            print("パスワードを入力してください。")
            input = readLine()!
          }

          print("ログインしました。")
        `}
      />
      <p>つぎに、repeat-while文です。</p>
      <CodeFrame
        code={`
          let password = "abcd"

          var input: String
          repeat {
            print("パスワードを入力してください")
            input = readLine()!
          } while input != password

          print("ログインしました。")
        `}
      />
      <p>どうでしょうか？違いはわかりましたか？</p>
      <p>
        while文は「前」にrepeat-while文は「後」に条件分岐するのがポイントです。逆に言うと、repeat-while文は最初の一回だけは「無条件」に実行するということになります。
      </p>
      <CodeFrame
        code={`
          var count = 1000000
          repeat {
            print(count)
            count += 1
          } while count <= 10
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          1000000
        `}
      />
      <h2>for文</h2>
      <p>
        ある特定の範囲を順に繰り返したい、というときに使える繰り返しの構文があります。それが「for文」です。
      </p>
      <p>
        1から10を順番に表示するプログラムを考えます。while文でももちろんかけますが、for文を使うほうがすっきりします。まずは、以下の例を見てみましょう。
      </p>
      <CodeFrame
        code={`
        for count in 1...10 {
          print(count)
        }
      `}
      />
      <CodeFrame
        code={`
          出力結果：
          1
          2
          3
          4
          5
          6
          7
          8
          9
          10
        `}
      />
      <p>for文の書式は、以下の通りです。</p>
      <CodeFrame
        code={`
          for 変数 in 範囲 {
            ブロック
          }
        `}
      />
      <p>
        以前学んだInt.random(in:
        1...10)に似ているところがあります。1...10で1から10まで、という意味になります。Int.random(in:
        1...10)と違い、inの後に:(コロン)はつけないので注意してください。
      </p>
      <p>
        forの直後の変数のことを「ループ変数」といい、通常の変数と同様、好きな名前を付けることができます。ただし、慣習からindexを意味する「i」という一文字の変数名にすることが多いです。ネストする場合は「j」「k」「l」...と続いていくのが一般的です。
        ループ変数のスコープはfor文のブロックと等しいです。for文の外では使用できないので注意が必要です。
      </p>
      <h2>練習問題1: かけ算九九を表示しよう</h2>
      <p>それでは練習問題です。次のプログラムを作成してください。</p>
      <ol>
        <li>画面に一の段の答えを空白区切りで表示する</li>
        <li>画面に二の段の答えを空白区切りで表示する</li>
        <li>画面に三の段の答えを空白区切りで表示する</li>
        <li>画面に四の段の答えを空白区切りで表示する</li>
        <li>画面に五の段の答えを空白区切りで表示する</li>
        <li>画面に六の段の答えを空白区切りで表示する</li>
        <li>画面に七の段の答えを空白区切りで表示する</li>
        <li>画面に八の段の答えを空白区切りで表示する</li>
        <li>画面に九の段の答えを空白区切りで表示する</li>
      </ol>
      <p>ヒント</p>
      <ul>
        <li>
          print(&quot;文字列&quot;, terminator:
          &quot;区切り文字&quot;)とすることで、改行の代わりに区切り文字を出力することができる。
        </li>
        <li>print(&quot;&quot;)とすれば、単に改行をするだけになる</li>
      </ul>
      <p>
        できましたか？表示の仕方が少し難しいかもしれません。ヒントをみて表示方法を考えてみてください。
      </p>
      <p>それでは解答例です。</p>
      <Accordion showMessage="解答例を表示する" hideMessage="解答例を隠す">
        <CodeFrame
          code={`
            for i in 1...9 {
              for j in 1...9 {
                // 数字の後に" "を出力
                print(i * j, terminator: " ")
              }
              // 改行させる
              print("")
            }
          `}
        />
      </Accordion>
      <p>できなくても問題ありません。ちょっとずつ慣れていきましょう！</p>
      <h2>繰り返しの中断</h2>
      <p>
        while文やfor文といった繰り返しでは、条件式とは別に途中でその繰り返しを中断したいことがあります。このような場合にはbreak文とcontinue文が用意されています。
      </p>
      <h3>break文</h3>
      <p>繰り返し文を強制的に終了します。次のプログラムを見てください。</p>
      <CodeFrame
        code={`
          for i in 1...10 {
            print(i)
            if i == 5 {
              break
            }
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          1
          2
          3
          4
          5
        `}
      />
      <p>
        本来であれば10まで出力されるはずですが、5まで出力したときにbreak文により、繰り返しが終了しました。
      </p>
      <h3>continue文</h3>
      <p>
        繰り返し文を強制的に次のループに移行させます。次のプログラムを見てください。
      </p>
      <CodeFrame
        code={`
          for i in 1...10 {
            if i % 2 == 0 {
              continue
            }
            print(i)
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          1
          3
          5
          7
          9
        `}
      />
      <p>
        %演算子について覚えていますか？%演算子は剰余です。2で割った余りが0である、つまり偶数のときにcontinue文により次のループに移行してしまうため、奇数のみが表示されました。
      </p>
      <h2>練習問題2: ちょっとしたノベルゲーム4</h2>
      <p>
        前章の練習問題の続きです。以下のようなプログラムを作成してください。
      </p>
      <ol>
        <li>変数levelに整数1を代入する</li>
        <li>画面に「勇者のレベルは(level)だ。」と表示する</li>
        <li>
          画面に「勇者の行動を選択してください。1: 特訓、2:
          魔王に挑む」と表示する
        </li>
        <li>キーボードから入力を受け取り、変数actionに代入する</li>
        <li>
          もし、変数actionが1であれば、次のプログラムを実行する
          <ol>
            <li>画面に「勇者は特訓を始めた！」と表示する</li>
            <li>1から10までのランダムな整数を生成し、変数expに代入する</li>
            <li>画面に「(exp)ポイントの経験値を獲得！」と表示する</li>
            <li>変数levelにexpを加算する</li>
            <li>画面に「特訓の結果、(level)レベルに成長した！」と表示する</li>
            <li>3に戻る</li>
          </ol>
        </li>
        <li>
          もし、変数actionが2であれば、次のプログラムを実行する
          <ol>
            <li>画面に「勇者は魔王に戦いを挑んだ。」と表示する</li>
            <li>
              もし、勇者のレベルが40以下であれば「勇者は負けてしまった...」と表示し、3に戻る
            </li>
            <li>
              もし、勇者のレベルが41以上80以下であれば「勇者はあと少しのところで負けてしまった...」と表示し、3に戻る
            </li>
            <li>
              もし、勇者のレベルが81以上であれば「勇者は見事勝利した！」と表示し、「GAME
              CLEAR」と表示する
            </li>
          </ol>
        </li>
        <li>
          もし、変数actionが1でも2でもなかった場合、次のプログラムを実行する
          <ol>
            <li>画面に「入力が正しくありません。」と表示する</li>
            <li>3に戻る</li>
          </ol>
        </li>
      </ol>
      <p>
        今までの集大成のような問題です。難しいかもしれませんが、今まで学んだことを振り返って頑張ってください。
      </p>
      <p>それでは解答例です。</p>
      <Accordion showMessage="解答例を表示する" hideMessage="解答例を隠す">
        <CodeFrame
          code={`
            var level = 1
            print("勇者のレベルは" + String(level) + "だ。")

            while true {
              print("勇者の行動を選択してください。1: 特訓、2: 魔王に挑む")

              // ここでInt型に変換してしまうと、不正な入力時にエラーとなります。
              // どういったエラーになるか気になるなら試してみましょう。
              let action = readLine()!

              // ここはswitch文で書いても大丈夫です。
              // どちらでも書けるように練習しましょう。
              // 変数actionはString型なので、右オペランドもString型にします。
              if action == "1" {
                print("勇者は特訓を始めた！")
                
                // inの後に:(コロン)が付くことを忘れないようにしましょう
                let exp = Int.random(in: 1...10)
                print(String(exp) + "ポイントの経験値を獲得！")

                // level = level + expでも構いません
                level += exp
                print("特訓の結果、" + String(level) + "レベルに成長した！")
              }
              else if action == "2" {
                print("勇者は魔王に戦いを挑んだ。")
                if level <= 40 {
                  print("勇者は負けてしまった...")
                }
                else if level <= 80 {
                  print("勇者はあと少しのところで負けてしまった...")
                }
                else {
                  print("勇者は見事勝利した！")
                  print("GAME CLEAR")
                  // break文を忘れると魔王が永遠に生き続けてしまいます。
                  break
                }
              }
              else {
                print("入力が正しくありません。")
              }
            }
          `}
        />
      </Accordion>
      <p>
        必ずしも解答例と同じコードである必要はありません。仕様通りに動作すればそれは正しいプログラムです。
      </p>
      <p>
        お疲れさまでした。
        全てのプログラムは「条件分岐」と「繰り返し」でできています。これらを使いこなすのが、プログラマとしての最低限の能力です。わからないところは何度も復習してください。また、インターネットで検索することも大切です。例えば、「swift
        for」で検索すれば、for文に関するたくさんの記事が出てくるでしょう。欲しい記事を巧みに検索する能力もプログラマにとって必須の能力です。気になったところがあればすぐに調べる癖をつけましょう。
      </p>
      <p>
        以上で今回は終わりです。今回でプログラミングの根幹的な部分は終了です。次回は「配列とタプル」について学びます。
      </p>
      <NextPrev
        prev={{ link: "/part1/chapter4", title: "第四章 条件分岐" }}
        next={{ link: "/part1/chapter6", title: "第六章 配列とタプル" }}
      />
    </main>
  );
};
