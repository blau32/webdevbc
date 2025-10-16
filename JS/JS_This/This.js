const person = {
    first: 'Taro',
    last: 'Yamada',
    fullName(){
        console.log(this);
        console.log("名が" + this.first + ' ' + "姓が" + this.last);
    }
}

const friend = {
    first: 'Ken',
    last: 'Tanaka',
    fullName(){
        console.log(this);
        console.log("名が" + this.first + ' ' + "姓が" + this.last);
    }
}

const fullName2 = person.fullName;

// person.fullName();
// person.last = 'Hayashida';
// person.fullName();
// friend.fullName();
// friend.last = 'Sasaki';

// thisの挙動が呼び出し方に依存する
// 
