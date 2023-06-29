/* ***************  */
// if문
/* ************** */
/*
// A:90<=점수, B:80<=점수<90, C:70<=점수<80, D:60<=점수<70
//let score = 85;
let score = prompt("점수를 입력하세요","80");
if(score>=90){
    console.log("A");
} else if(score>=80){
    console.log("B");
} else if(score>=70){
    console.log("C");
} else if(score>=60){
    console.log("D");
} else{
    console.log("F");
}
*/

/* ***************  */
// switch문
/* ************** */
/*
let num1 = Number(prompt("첫번째 값을 입력하세요"));
let num2 = Number(prompt("두번째 값을 입력하세요"));
let operator = prompt("사칙연산자를 입력하세요");
let result;

switch(operator){
    case "+":
        result = num1 + num2;
        break;
        case "-":
            result = num1 - num2;
            break;
            case "*":
                result = num1 * num2;
                break;
                case "/":
                    result = num1 / num2;
                    break;
                    default:
                        result = 0;
                        break;
}
//console.log("결과 : " + result);
console.log(num1 + "" + operator + "" + num2 + "=>" + result);
*/


/* ***************  */
// for문: for(초기값, 조건식, 증감)
/* ************** */

/*
for(let i=0;i<5;i++){
    console.log("안녕" + i);
}
for(let i=10;i<=20;i++){
    console.log(i);
}
*/

/*
let sum = 0;
let startNum = Number(prompt("시작 값"));
let endNum = Number(prompt("종료 값"));
for(let i=startNum; i<=endNum; i++){
    sum = sum + i;
}
*/

//console.log("합 :"+ sum);
//console.log("start부터 end까지의 합은 result");
//치환되는 값 => "+뱐수명+"
//console.log(startNum+"부터"+endNum+"까지의 합은"+result);
//console.log(startNum+"부터"+endNum+"까지의 합은"+sum);

/*
let evenSum = 0;
let oddSum = 0;
for(let i =1; i<=10; i++){
    //i값이 짝수일때 sum = sum + i
    if(i%2==0){
        evenSum = evenSum + i;
    } else{
        oddSum = oddSum + i;
    }
}
console.log("짝수합 : " + evenSum);
console.log("홀수합 : " + oddSum);
*/

let startNum = Number(prompt("시작 값",1));
let endNum = Number(prompt("종료 값",10));
let evenSum = 0;
let oddSum = 0;
for(let i =startNum; i<=endNum; i++){
    //i값이 짝수일때 sum = sum + i
    if(i%2==0){
        evenSum = evenSum + i;
    } else{
        oddSum = oddSum + i;
    }
}
console.log("짝수합 : " + evenSum);
console.log("홀수합 : " + oddSum);

