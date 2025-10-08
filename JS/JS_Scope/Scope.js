// scope


// 関数内で変数を宣言し、関数内で呼び出す----------------------
function test1() {
    let num1 = 100;
    console.log(num1);
}
test1();

// 関数内で変数を宣言し、関数外で呼び出す----------------------
function test2() {
    let num2 = 200;
}
console.log(num2);
test2();
// JSFunction+.js:16 Uncaught ReferenceError: num2 is not defined
// スコープ範囲外のためエラー


// 関数外で変数を宣言し、関数内で呼び出す----------------------
let num3 = 300;
function test3() {
    console.log(num3);
}
test3();
// エラーは発生しない

// 関数外で変数を宣言し、関数内で書き換え、関数内で呼び出す----------------------
let num4 = 400;
function test4() {
    num4 = 444;
    console.log(num4);
}
test4();
// 書き換えた値が反映される

// 関数外で変数を宣言し、関数外で呼び出す----------------------
let num5 = 500;
function test5() {
}
console.log(num5);
test5();
// エラーは発生しないが、ただ変数を呼び出しただけ、関数の意味がない

// 関数外で変数を宣言し、関数内で書き換え、関数外で呼び出す----------------------
let num6 = 600;
function test6() {
    num6 = 666;
}
console.log(num6);
test6();
// 関数実行前に600が出力され、関数実行後にnum6は666に変更される

// 関数外で変数を宣言し、関数内で書き換え、関数内で一度呼び出してから、もう一度関数外で呼び出す----------------------
let num7 = 700;
function test7() {
    num7 = 777;
    console.log(num7);
}
console.log(num7);
test7();
// 関数実行前に700が出力され、関数内で777に変更して777が出力される
// まとめ：グローバル変数は関数内で書き換えると、関数外でも変更が反映される

// ブロックスコープの例----------------------
if (true) {
    let blockVar = 1000;
    console.log(blockVar); // ブロック内では呼び出せる
}
// console.log(blockVar); // ブロック外から呼び出そうとするとエラー

// 関数スコープとブロックスコープの違い
function scopeTest() {
    let funcVar = 2000; // 関数スコープ
    
    if (true) {
        let blockVar = 3000; // ブロックスコープ
        console.log(funcVar); // 関数内のブロックから関数変数は呼び出せる
        console.log(blockVar); // ブロック内からブロック変数は呼び出せる
    }
    
    console.log(funcVar); // 関数内から関数変数は呼び出せる
    // console.log(blockVar); // 関数内でもブロック外からは呼び出せない
}
scopeTest();