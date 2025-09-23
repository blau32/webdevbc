const shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
console.log(shopping);
console.log(shopping.length);

const sequence = [1, 1, 2, 3, 5, 8, 13];
console.log(sequence[6])

const random = ["tree", 795, [0, 1, 2]];
console.log(random[0]);
console.log(random[1]);
console.log(random[2]);
console.log(random[2][0]);
console.log(random[2][1]);
console.log(random[2][2]);

console.log(random[0] = "branch");
console.log(random[0])

let birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl"));
console.log(birds.indexOf("Raven"));

// メソッド：
// 末尾追加
birds.push("Raven");
console.log(birds);
// 末尾消去
birds.pop();
console.log(birds);
// 先頭消去
birds.shift();
console.log(birds);
// 先頭追加
birds.unshift("Raven");
console.log(birds);
birds.unshift("Parrot");
console.log(birds);
//分割
// 元の配列から 指定範囲の要素をコピーした新しい配列 を返すだけなので変数の中の配列は変わらないので注意
//  ['Parrot', 'Raven', 'Falcon', 'Owl']
// let birds2 = birds.slice(開始位置（インデックス）,削除位置（インデックス‐１となる。る。要は指定した数を含まない）);
// let birds2 = birds.slice(1,2);はインデックス１のraven,2はインデックス１のravenを指す
let birds2 = birds.slice(2,4);
console.log(birds2);

let birds3 = birds.slice(0,4);
console.log(birds3);

// 指定位置追加
birds.splice(1, 0, "Swallow");
console.log(birds);
// 指定位置消去
birds.splice(1, 1);
console.log(birds);
// 指定位置変更
birds.splice(1, 1, "Swallow");
console.log(birds);


// 配列の等価性
// JSの配列は値ではなく、メモリ上の保存箇所を指す
// メモリ上の保存場所が異なるためfalseになる
const test1 = [1, 2, 3];
const test2 = [1, 2, 3];
console.log(test1 == test2);
console.log(test1 === test2);
console.log(typeof test1);
console.log(typeof test2);

// メモリ上の保存場所が同じためtrueになる
let test3 = [1,2,3];
let test4 = test3;
console.log(test3 == test4);
console.log(test3 === test4);
console.log(typeof test3);
console.log(typeof test4);

// 定数に代入した配列の操作
const test5 = [1,2,3];
console.log(test5);
test5.push(4);
console.log(test5);
test5.pop();
console.log(test5);
test5.unshift(0);
console.log(test5);
test5.shift();
console.log(test5);
test5.splice(1,1);
console.log(test5);
test5.splice(1,1,2);
console.log(test5);
// ただし再代入は不可
// test5 = [4,5,6];
// arrey.js:93 Uncaught TypeError: Assignment to constant variable.

// タ次元配列配列にネスト
const Alcohol =[
    ["ビール", "発泡酒"],
    ["ワイン", "シャンパーニュ"],
    ["ウィスキー", "ブランデー"]
];

const BoardGame =[
    ["X","O","X"],
    ["O","X","O"],
    ["X",null,"X"]
];
console.log(Alcohol);
console.log(BoardGame[2][1]);