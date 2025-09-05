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
let birds2 = birds.slice(0,2);
console.log(birds2);



// // 指定位置追加
// birds.splice(1, 0, "Swallow");
// console.log(birds);
// // 指定位置消去
// birds.splice(1, 1);
// console.log(birds);
// // 指定位置変更
// birds.splice(1, 1, "Swallow");
// console.log(birds);
