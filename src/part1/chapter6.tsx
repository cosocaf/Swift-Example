import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "../component/accordion";
import { Breadcrumbs } from "../component/breadcrumbs";
import { CodeFrame } from "../component/code_frame";
import { LastUpdate } from "../component/last_update";
import { NextPrev } from "../component/next_prev";
import { useScrollHistory } from "../hooks/use_scroll_history";
import { useTitle } from "../hooks/use_title";

export const Chapter6 = () => {
  useTitle("第六章 配列とタプル");
  useScrollHistory();
  return (
    <main>
      <h1>第六章 配列とタプル</h1>
      <Breadcrumbs
        breadcrumbs={[
          { displayName: "ホーム" },
          { file: "part1", displayName: "第一部" },
          { file: "chapter6", displayName: "第六章" },
        ]}
      />
      <LastUpdate date="2022/05/07" />
      <p>
        <Link to="/part1/chapter5">前章</Link>
        では繰り返しについて学びました。今回は配列とタプルについて学びます。
      </p>
      <h2>導入</h2>
      <p>次の問題を考えます。</p>
      <p>
        あるクラスにはAさんからEさんまでの五人の生徒がいます。あなたは彼らの先生で、テストの結果を集計しなければなりません。それぞれの点数は0から100のランダムな整数でした。テストの平均点を求めてください。
      </p>
      <p>では実際にコードを書いてみましょう。</p>
      <Accordion showMessage="解答例を表示する" hideMessage="解答例を隠す">
        <CodeFrame
          code={`
            let A = Int.random(in: 0...100)
            let B = Int.random(in: 0...100)
            let C = Int.random(in: 0...100)
            let D = Int.random(in: 0...100)
            let E = Int.random(in: 0...100)
            let total = A + B + C + D + E
            let average = total / 5
            print(average)
          `}
        />
      </Accordion>
      <p>どうでしょうか？そんなに難しいことはないと思います。</p>
      <p>このコード、一見問題なさそうに見えますが、2つの問題があります。</p>
      <ul>
        <li>
          人数が増えた時にコードに追記しなければならない
          <p>
            新たにFくんが転校してきたら、そのために合計と平均を計算している行を修正しなければなりません。
          </p>
        </li>
        <li>
          まとめて処理できない
          <p>
            「点数順に並び変える」「最高得点を求める」などの全員をまとめて処理しなければならないときにコードが長くなってしまいます。
          </p>
        </li>
      </ul>
      <p>
        これらの問題は、Int型などの従来の型が「一つの情報」しか扱えないことに由来します。しかし、上の例のように「複数の情報」をひとまとめに扱いたいことが多くあります。
        Swiftにはいくつかの関係あるデータをグループ化して一つの変数に代入する仕組みがあります。用途によって使い分けられるように複数の構造が用意されています。これらの構造のことを「データ構造」といい、今回はその中から「配列」と「タプル」について学びます。
      </p>
      <h2>配列</h2>
      <p>
        「配列」とは「同一の型」の「複数のデータ」を「並べて」格納するデータ構造です。
        複数のデータのうち、それぞれのデータの一つを「要素」といい、変数と同様に型があり、データを保持できます。同じ配列に含まれる要素はすべて同じである必要があります。
        要素の一番目にはStringを、二番目にはIntをというようなことはできません。配列には各要素が順番に並んでおり、それぞれ0番、1番、2番...という番号がついています。この番号を「添え字」といいます。添え字は0から始まることに注意してください。
      </p>
      <p>配列は、次のように使います。</p>
      <CodeFrame
        code={`
          let intArray: [Int] = [10, 20, 30]
          print(intArray[0])
          print(intArray[1] + intArray[2])

          let strArray: [String] = ["apple", "banana", "orange", "grape"];
          for i in 0..3 {
            print(strArray[i])
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          10
          50
          apple
          banana
          orange
          grape
        `}
      />
      <p>
        配列の型は[型名]と表記します。Int型の配列であれば、[Int]です。 [10, 20,
        30]の部分が配列です。[]の中に、要素を「,」で区切って記述することで配列を表現できます。各要素には任意の式を入れることができます。配列の後ろに[Int型の値]を記述することで、添え字を表現でき、添え字に対応した要素を取り出すことができます。
      </p>
      <p>
        要素数が0や1の配列を作ることも可能です。単に以下のように記述すればよいです。
      </p>
      <CodeFrame
        code={`
          let zeroElemArray: [Int] = []
          let anotherZeroElemArray = [Int]()
          let oneElemArray = [10]
        `}
      />
      <p>
        要素数が0の配列の場合、一行目の書き方だと要素の型の推論ができないため、型を明示する必要があります。二行目のような書き方であれば、代入する配列の型が明瞭であるため型を明示する必要はありません。
        また、三行目のように要素が存在する配列の場合、要素の型の推論が可能なため、型を明示する必要はありません。(しても構いません。)
      </p>
      <p>
        要素数が決まっており、要素が全て同じ値であってよい場合は、次のように書くことができます。
      </p>
      <CodeFrame
        code={`
          let fillElemArray = [Int](repeating: 10, count: 3)
          print(fillElemArray)
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          [10, 10, 10]
        `}
      />
      <p>repeating:の後に要素の値を、count:の後に要素数を記述します。</p>
      <h2>練習問題1</h2>
      <p>
        試しに、
        <Link to="/part1/chapter4">第四章</Link>
        の練習問題を配列で実装してみましょう。
        以下のプログラムを作成して下さい。
      </p>
      <ol>
        <li>画面に「神社にやってきました。おみくじを引きます。」と表示する</li>
        <li>
          String型の配列lotteryを作成し、要素を順に「大吉」「中吉」「吉」「小吉」「末吉」「凶」「大凶」とする。
        </li>
        <li>0から6までのランダムな整数を生成し、変数fortuneに代入する</li>
        <li>fortuneを添え字としてlotteryの要素を取り出し、画面に表示する。</li>
      </ol>
      <p>いきなりだと難しいかもしれません。以下、解答例です。</p>
      <Accordion showMessage="解答例を表示する" hideMessage="解答例を隠す">
        <CodeFrame
          code={`
            print("神社にやってきました。おみくじを引きます。")
            let lottery = ["大吉", "中吉", "吉", "小吉", "末吉", "凶", "大凶"]
            let fortune = Int.random(in: 0...6)
            print(lottery[fortune])
          `}
        />
      </Accordion>
      <p>配列を使うことで、第四章の長いif文がここまで短くなりました。</p>
      <h2>配列操作</h2>
      <p>
        上記のサンプル内の配列は、全てletで宣言した変数(≒定数)に代入していました。
        そのため、各要素を変更したり、新たに値を追加することができません。
        varで宣言した変数に代入することで、配列に対して様々な操作ができるようになります。
      </p>
      <h3>要素の変更</h3>
      <p>
        通常の変数と同様に、要素に対して=をすることで、要素の書き換えができます。
      </p>
      <CodeFrame
        code={`
          var fruits = ["apple", "banana"]
          fruits[0] = "orange"
          fruits[1] = "grape"
          print(fruits)
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          ["orange", "grape"]
        `}
      />
      <h3>要素の追加</h3>
      <p>
        配列.append(追加する要素)とすることで、配列の末尾に要素を追加できます。
      </p>
      <CodeFrame
        code={`
          var fruits = ["apple", "banana"]
          fruits.append("orange")
          fruits.append("grape")
          print(fruits)
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          ["apple", "banana", "orange", "grape"]
        `}
      />
      <h3>要素の挿入</h3>
      <p>
        配列.insert(追加する要素, at:
        追加位置)とすることで、指定位置に要素を挿入できます。
      </p>
      <CodeFrame
        code={`
          var fruits = ["apple", "banana"]
          fruits.insert("orange", at: 1)
          print(fruits)
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          ["apple", "orange", "banana"]
        `}
      />
      <h3>要素の削除</h3>
      <p>
        配列.remove(at: 追加位置)とすることで、指定位置の要素を削除できます。
      </p>
      <CodeFrame
        code={`
          var fruits = ["apple", "banana", "orange"]
          fruits.remove(at: 1)
          print(fruits)
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          ["apple", "orange"]
        `}
      />
      <h3>要素のソート</h3>
      <p>
        配列.sort()とすることで、配列の要素を昇順に並び替えます。
        Stringなら辞書順、Intなら大小順です。
      </p>
      <CodeFrame
        code={`
          var fruits = ["orange", "banana", "grape", "apple"]
          fruits.sort()
          print(fruits)
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          ["apple", "banana", "grape", "orange"]
        `}
      />
      <h3>逆順</h3>
      <p>配列.reverse()とすることで、配列の並びを逆にします。</p>
      <CodeFrame
        code={`
          var fruits = ["apple", "banana", "grape", "orange"]
          fruits.reverse()
          print(fruits)
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          ["orange", "grape", "banana", "apple"]
        `}
      />
      <h2>for文の応用</h2>
      <p>
        <Link to="/part1/chapter5">前章</Link>
        学んだfor文について、inの後に配列を置くことで、その配列を順番に処理することができます。
      </p>
      <CodeFrame
        code={`
          var fruits = ["apple", "banana", "grape", "orange"]
          for fruit in fruits {
            print(fruit)
          }
        `}
      />
      <CodeFrame
        code={`
          出力結果：
          apple
          banana
          grape
          orange
        `}
      />
      <h2>練習問題2</h2>
      <p>それでは練習問題です。以下のプログラムを作成してください。</p>
      <ol>
        <li>
          生徒全員(10人)のテストの点を格納するInt型の配列scoresを空の配列として初期化する。
        </li>
        <li>scoresに0から100のランダムな整数を10人分追加する。</li>
        <li>画面にscoresの内容を表示する。</li>
        <li>何らかの手段でscoresの最大値を計算し、変数maxに代入する。</li>
        <li>同様に最小値を計算し、変数minに代入する。</li>
        <li>同様に平均値を計算し、変数avgに代入する。(整数で構わない)</li>
        <li>画面に「最高得点: (max)」と表示する。</li>
        <li>画面に「最低得点: (min)」と表示する。</li>
        <li>画面に「平均得点: (avg)」と表示する。</li>
      </ol>
      <p>それでは解答例です。</p>
      <Accordion showMessage="解答例を表示する" hideMessage="解答例を隠す">
        <CodeFrame
          code={`
            var scores: [Int] = []

            // 未使用変数は「_」という名前にする慣習がある
            for _ in 1...10 {
              scores.append(Int.random(in: 0...100))
            }
            print(scores)

            // 考えられる最小の最大値は0
            var max = 0
            for score in scores {
              if max < score {
                max = score
              }
            }

            // 考えられる最大の最小値は100
            var min = 100
            for score in scores {
              if min > score {
                min = score
              }
            }

            // 別解: 最大値、最小値についてはソートすればすぐに求まる。
            // ただし、scoresの順番が変わってしまうことに注意
            // scores.sort()
            // let max = scores[9]
            // let min = scores[0]

            // もし実数で求めたいのであれば「avg: Double」とする。
            var avg = 0
            for score in scores {
              // 上記にしたがい実数で求めるのであればscoreを「Double(score)」とする。
              avg += score
            }
            avg /= 10

            print("最高得点: " + String(max))
            print("最低得点: " + String(min))
            print("平均得点: " + String(avg))
          `}
        />
      </Accordion>
      <h2>タプル</h2>
      <p>未定稿です。お待ちください。</p>
      <NextPrev
        prev={{ link: "/part1/chapter5", title: "第五章 繰り返し" }}
        next={{ link: "/part1/chapter7", title: "第七章 構造体" }}
      />
    </main>
  );
};
