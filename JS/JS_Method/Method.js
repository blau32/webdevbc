const math = {
    mult : function (x,y){
        return x * y;
    },
    div : function (x,y){
        return x / y;
    },
    square : function (x){
        return x * x;
    }
}

// 省略形がある :functionが省略可能
const math_short = {
    mult(x,y){
        return x * y;
    },
    div(x,y){
        return x / y;
    },
    square(x){
        return x * x;
    }
}