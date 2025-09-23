// for
// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i +" is even")
//     } else {
//         console.log(i +" is odd")
//     }
// }

// const animals = ["do g","cat","pig","panda"];
// for(let i = 0; i < animals.length; i++){
//     console.log(animals[i]);
// }

// const animals2 = ["dog","cat","pig","panda"];
// for(let j = animals2.length -1 ; j >= 0; j--){
//     console.log(animals2[j])
// }

// for(let k = 1; k <= 10; k++){
//     console.log("k is " + k);
//     for(let l = 1; l < 4; l++){
//         console.log("l is " + l);
//     }
// }

// const test1 = [1,2,3,4,5,6,7,8,9,10];
// console.log(test1.length);

// for(let i = 0; i < test1.length; i++){
//     console.log(test1[i]);
// }

// const test4 = [
//     [1,2,3,4,5,6,7,8,9,10],
//     [11,12,13,14,15,16,17,18,19,20],
//     [21,22,23,24,25,26,27,28,29,30]
// ]
// console.log(test4.length);

// for(let z = 0; z < test4.length; z++){
//     console.log(test4[z]);
// }
// ↑3つの配列だけ出力され、中身が出力されない
// ↓これで中身が出力される
// for(let x= 0; x < test4.length; x++){
//     const test5 = test4[x];
    // それぞれの配列が格納
//     for(let y = 0; y < test5.length; y++){
//         console.log(test5[y]);
//     }
// }

// while
// 条件がtrueの間実行
// let num1 = 0;
// while(num1 < 10){
//     num1++;
//     console.log(num1);
// }

// let num2 = 0;
// while(num2 < 10){
//     console.log(num2);
//     num2++;
// }

// const test = 'loop';
// let loop1 = '';
// while (loop1 !== 'loop'){
//     loop1 = prompt('type your code');
// }
// console.log("it's done");

// break
// let num3 = 0;
// while (num3 < 10){
//     num3++;
//     console.log(num3);
//     if (num3 === 6){
//         break;
//     }
// }

// const test2 = 'loop';
// let loop2 = '';
// while (loop2 !== 'loop'){
//     loop2 = prompt('type your code');
//     if (loop2 === 'quit'){
//         break;
//     }
// }
// console.log("done or quit");

// for~of
// 配列の順番変更
// 列挙可能なオブジェクトに有効
// 使わないver
// const animals = ['dog', 'cat', 'pig', 'panda'];

// for(let i = 0; i < animals.length; i++){
//     console.log(animals[i]);
// }

// 配列の要素が一つずつ入る 短い！
// for(let animal of animals){
//     console.log(animal);
// }

const Scores = {
    taro : 100,
    jiro : 95,
    saburo : 80
};

// for (let w of Scores){
//     console.log(w);
// }
// エラーが発生

// オブジェクトのキーを取得
for (let student of Object.keys(Scores)){
    console.log(student);
}
// オブジェクトの値を取得
for (let student of Object.values(Scores)){
    console.log(student);
}

// forin
// オブジェクトのキーを取得
for (let w in Scores){
    console.log(w);
}
