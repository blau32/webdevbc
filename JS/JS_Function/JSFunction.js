// Function　Basic
// define function
// function functionName(){
    // execute
// }

// call function
// functionName();

function kamakura(){
    console.log("1192だったのに1185になった");
}

kamakura();

// 引数Argument
function example1(parameter) { //parameter
    console.log(parameter);
}

example1('argument'); //argument

// 複数の引数
function example2(parameter1,parameter2) { //parameter
    console.log("First Name is: " + parameter1, + "," + "Last Name is: " + parameter2);
}

example2('Michael', 'Jackson'); //argument

// return 戻り値
    function example3(x,y) {
        console.log(x + y);
    }
    // returnを使わない場合は戻り値がundefinedになる
    // let total = example3(1,2);
    // totalはundefinedになる

    function example4(a,b) {
        return a + b;
        console.log(a + b); //return以降の処理は実行されない
    }
    // returnを使う場合は戻り値がある
    // let total = example4(1,2);
    // totalは3になる
    
    function example5(c,d) {
        return c + d;
    }

    example5(example5(10,20),30)

// ここに関数を定義してください
function lastElement(array){
    if(array.slice(-1)[0] === 0){
        return null;
    } else {
        return array.slice(-1)[0];
    }
}

function lastElement(array) {
    return array.length === 0 ? null : array[array.length - 1];
  }

// lastElement(['a', 'b']) // b
// lastElement([3,5,7]) //7
// lastElement([1]) //1
// lastElement([]) //null