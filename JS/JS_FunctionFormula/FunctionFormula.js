// 関数名を宣言しないと当然エラーが発生するが、
// const (a,b) {
//     return a + b;
// }


// 関数式：関数を代入すれば関数名を宣言しなくても使える
const add = function(a, b) {
    return a + b;
}
add(10, 20);
