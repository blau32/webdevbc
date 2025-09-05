// let age = Math.floor(Math.random( ) * 100) ;
// let yourAge = age;

// if(yourAge >= 20){
//     console.log("You can drink alcohol in Japan.");
// } else if(yourAge < 20){
//     console.log("You can't drink alcohol in Japan.");
// } else {
//     console.log("You are not a human.");
// }

// let num = 101;

// if(num === 100){
// 	console.log('num is 100')
// } else if (num > 100) {
// 	console.log('more than 100')
// } else {
// 	console.log('less than 100')
// }

// const pass = prompt('type your password');;
// if (pass.length >= 6 ){
//     if (pass.indexOf(' ') === -1){
//         console.log("verified password");
//     } else {
//         console.log("this paassword contains space. Please enter a password that doesn't contain space.");
//     }
// } else {
//     console.log("password is too short. Please enter a password that is at least 6 characters long.");
// }

const year = 10;
if ((year >= 0 && year < 5) || year >= 65) {
    console.log("free");
} else if (year >= 5 && year < 18) {
    console.log("child price");
} else if (year >= 18 && year < 65) {
    console.log("adult price");
} else {
    console.log("enter valid age");
}


// const day = 2;
// if (day === 1) {
//     console.log("Monday");
// } else if (day === 2) {
//     console.log("Tuesday");
// } else if (day === 3) {
//     console.log("Wednesday");
// } else if (day === 4) {
//     console.log("Thursday");
// } else if (day === 5) {
//     console.log("Friday");
// } else if (day === 6) {
//     console.log("Saturday");
// } else if (day === 7) {
//     console.log("Sunday");
// } else {
//     console.log("enter valid day");
// }

const day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("enter valid day");
}