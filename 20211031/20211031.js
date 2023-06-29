/* ********** */
// 이벤트 핸들러
/* ********** */
// function show(){
//     alert("Hello")
// }
// function show2(){
//     button.innerHTML = "마우스 오버"
//     button.style.backgroundColor = "orange"
// }
// function show3(){
//     button.innerHTML = "클릭하세요"
//     button.style.backgroundColor = "white"
// }
// let button = document.getElementById("btn")
// button.addEventListener("click",show,true)
// button.addEventListener("mouseover",show2,true)
// button.addEventListener("mouseout",show3,true)



/* ********** */
// 초시계
/* ********** */
// let timerID;
// let btnstart = document.getElementById("start");
// let btnStop = document.querySelector("#stop")
// let h1 = document.querySelector("#watch")

// let today, hour, minute, second, milisecond;
// function show(){
//     today = new Date();
//     hour = today.getHours();
//     minute = today.getMinutes();
//     second = today.getSeconds();
//     milisecond = today.getMilliseconds();
//     h1.innerHTML = hour+":"+minute+":"+second+":"+milisecond;
// }
// function start(){
//     timerID = setInterval(show,1)
// }
// function stop(){
//     clearInterval(timerID)
// }
// btnstart.addEventListener("click",start,true)
// btnStop.addEventListener("click",stop,true)



/* ********** */
// 배경색을 자동으로 설정
/* ********** */
let timerID = null
let timerID2 = null
let btnstart = document.getElementById("start")
let btnstop = document.querySelector("#stop")
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")

let arrColor = ["red","orange","yellow","green","lightblue","darkblue","purple"]
let arrColor2 = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
function show(){
    box1.style.backgroundColor = arrColor[parseInt(Math.random()*arrColor.length)]
}
function show2(){
    //box2.style.backgroundColor = arrColor[parseInt(Math.random()*arrColor.length)]
    let randColor = "#"
    for(let i=0; i<6; i++){
        randColor = randColor + arrColor2[parseInt(Math.random()*arrColor2.length)]
    }
    box2.style.backgroundColor = randColor
}
function start(){
    if(timerID == null){
    timerID = setInterval(show,1000)
    }
    if(timerID2 == null){
        let interval = parseInt(Math.random()*1900+100) //0<=x<1 0<=x<1900 100<=x<2000
        //parseInt(Math.random()*45+1)   //1<=x<46
        //alert(interval)
        timerID2 = setInterval(show2,interval)
        }
}
function stop(){
    clearInterval(timerID)
    clearInterval(timerID2)
    timerID = null
    timerID2 = null
}
btnstart.addEventListener("click",start,true)
btnstop.addEventListener("click",stop,true)
