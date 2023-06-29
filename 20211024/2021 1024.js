/* ************ */
// 배열 사용법
/* ************ */
// let arrName = ["홍길동"];
// arrName.push("홍길순");
// arrName.push("김수지");
// for(let i=0; i<arrName.length; i++){
//     console.log(arrName[i]);
// }

/* ************ */
// 함수 사용법
/* ************ */
// function gugudan(dan){
//     for(let i=1; i<=9; i++){
//         console.log(dan+"x"+i+"="+dan*i);
//     }
// }
// function gugudan2(dan){
//     let sum = "";
//     for(let i=1; i<=9; i++){
//         sum = sum + dan+"x"+i+"="+dan*i + "\n";
//     }return sum;
// }
// gugudan(4);
// console.log(gugudan2(5));



/* ************ */
// Math 클래스
/* ************ */
// let arrColor = ["red","orange","yellow","green","lightblue","deepblue","purple"];
// let box = document.getElementById("box");
// let index = parseInt(Math.random()*arrColor.length);
// box.style.backgroundColor = arrColor[index];



/* ************ */
// string 클래스
/* ************ */
// let str = "Hello World... Hi HonGilDong... Hi HonGilSoon";
// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// box1.textContent = str;
// box2.textContent = str.replaceAll("Hi","안녕");
// box2.textContent = str.slice(0,3);
// let arrStr = str.split(" ");
// let sumOutput = "";
// for(let i=0;i<arrStr.length;i++){
//     sumOutput += arrStr[i] + "|";
// }
// box2.textContent = sumOutput;


// n명의 국어, 영어, 수학 점수를 입력받아 평균 출력
// let arrName = [];
// let arrKor = [];
// let arrEng = [];
// let arrMath = [];
// let count = prompt("몇 명의 성적을 처리하고 싶습니까?",3);
// for(let i=0; i<count; i++){
//     let strValue = prompt("이름 국어 영어 수학 점수를 입력하세요","홍길동 20 30 40");
//     let arrItem = strValue.split(" ");
//     arrName.push(arrItem[0])
//     arrKor.push(parseInt(arrItem[1]))
//     arrEng.push(parseInt(arrItem[2]))
//     arrMath.push(parseInt(arrItem[3]))
// }
// alert(arrName.join("|")+"\n"+arrKor.join("|")+"\n"+arrEng.join("|")+"\n"+arrMath.join("|"));

// let strOutput = "";
// for(let i=0; i<arrName.length; i++){
//     strOutput += arrName[i] +"의 평균은" + Math.round(arrKor[i]+arrEng[i]+arrMath[i])/3 + "\n";
// }
// alert(strOutput);



/* ************ */
// Array 클래스
/* ************ */
// let arrName = ["김수지"];
// arrName.push("홍길동");
// arrName.push("김갑수","최민기");
// alert("배열 크기 : " + arrName.length + "\n배열 내용 : " + arrName.join("|"));
// console.log(arrName.indexOf("홍길동"));
// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// box1.textContent = arrName.join("|");
// arrName.splice(1,0,"천성동");  // 추가
// box2.textContent = arrName.join("|");
// arrName.splice(2,2);   // 삭제
// box2.textContent = arrName.join("|");
// arrName.splice(1,1,"이복희");   // 수정
// box2.textContent = arrName.join("|");


/* ************ */
// Date 클래스
/* ************ */
let box1 = document.getElementById("box1");

let timerID = setInterval(function(){
    let objDate = new Date();
    let year = objDate.getFullYear();
    let month = objDate.getMonth()+1;
    let date = objDate.getDate();
    let hour = objDate.getHours();
    let minute = objDate.getMinutes();
    let second = objDate.getSeconds();
    let day = objDate.getDay();
    let arrDay = ["일","월","화","수","목","금","토"];
    let strWatch = year+"년 "+month+"월 "+date+"일 "+arrDay[day]+"요일, ";
    strWatch += hour+":"+minute+":" + second;
    box1.textContent = strWatch;
},1000)

setTimeout(function(){
    clearInterval(timerID);
},20000);