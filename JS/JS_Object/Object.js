// Object
// オブジェクトはプロパティの集合
// プロパティはキーと値のペア
// キー(Key)で値(Value)にアクセスできる

const object_test = {
    str : 'test',
    number : 123,
    boolean : true,
    array : [1,2,3],
    object : {
        name : 'test',
        age : 123
    }
}

console.log(object_test);
console.log(object_test.str);
console.log(object_test.number);
console.log(object_test.boolean);
console.log(object_test.array);
console.log(object_test.object);
console.log(object_test.object.name);
console.log(object_test.object.age);

// アクセス方法
object_test['str']
object_test['number']
object_test['boolean']
object_test['array']
object_test['object']
object_test['object']['name']
object_test['object']['age']

object_test.str
object_test.number
object_test.boolean
object_test.array
object_test.object
object_test.object.name
object_test.object.age

ob_test2 = {taro:100, jiro: 95};
// 書き換え
ob_test2['taro'] = 200;
console.log(ob_test2);

ob_test2['jiro'] = 100;
console.log(ob_test2);

// キー、配列・文字列・数字を追加
ob_test2['saburo'] = ['200'];
console.log(ob_test2);
ob_test2['saburo'] = '200';
console.log(ob_test2);
ob_test2.shiro = 300;
console.log(ob_test2);
