let radius = 8;
if(radius > 0){
    const PI = 3.14;
    let msg1 = "block scope";
    var msg2 = "block scope?";
}

// console.log(radius);
// console.log(PI);
// console.log(msg1);
console.log(msg2);
// if,for,whileなどの{}をブロックと呼ぶ
// ブロックスコープも関数スコープと同じように、ブロック外からは呼び出せない
// varはブロックスコープではないため注意つまり呼び出せてしまう

// Lexical Scope

function AC() {
    const AC_Names = ['Locksmith','AmberOX','Allmind'];
    function callAC() {
        for(let AC_Name of AC_Names){
            console.log(`This is ${AC_Name}`);
        }
    }
    callAC();
}



