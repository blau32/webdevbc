// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// console.log(obj.result);
// console.log(JSON.stringify({ x: 5, y: 6 }));

// console.log(
//   JSON.stringify([new Number(3), new String("false"), new Boolean(false)]),
// );
// console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));


// リクエストをJSから投げたい
const req = new XMLHttpRequest();
// オブジェクトを作成し、変数に格納

// ↓成功した時の処理(コールバック関数)
req.onload = function () {
    console.log("success");
    // console.log(this);
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    // console.log(data);
    console.log(data);
    console.log(data.height);
    console.log(data.mass);
    console.log(data.hair_color);
    console.log(data.skin_color);
    console.log(data.eye_color);
    console.log(data.birth_year);
}

req.onerror = function () {
    console.log("error");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/");
// リクエスト開始
req.send();
// 送信