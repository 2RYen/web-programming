/**************/
// 박스 색상 랜덤하게 변경하기 + 익명함수
/*************/
/*
// let btnStart = document.getElementById("btnStart");
// let btnStop = document.getElementById("btnStop");
// let btnColor = document.getElementById("btnColor")
// let box = document.getElementById("box");
// // let btnStop = document.querySelector("#btnStop");
// // btnStart.style.backgroundColor = "orange"
// // btnStop.classList.add("back")
// let timerID = null

// function changeColor(){
//     let color = new String("0123456789ABCDEF")
//     let randColor = "#"
//     for(let i=0; i<6; i++){
//         Math.random()
//         randColor += color.charAt(parseInt(Math.random()*16))
//     }
//     box.style.backgroundColor = randColor
//     btnColor.innerHTML = randColor   
// }
// function start(){
//     if(timerID == null){
//         timerID = setInterval(changeColor,1000)
//     }
// }
// function stop(){
//     clearInterval(timerID)
//     timerID = null
// }

// btnStart.addEventListener("click",start)
// btnStop.addEventListener("click",stop)

let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");
let btnColor = document.getElementById("btnColor")
let box = document.getElementById("box");
let timerID = null

function start(){
    if(timerID == null){
        // timerID = setInterval(changeColor,1000)
        timerID = setInterval(function(){
            let color = new String("0123456789ABCDEF")
            let randColor = "#"
            for(let i=0; i<6; i++){
                Math.random()
                randColor += color.charAt(parseInt(Math.random()*16))
            }
            box.style.backgroundColor = randColor
            btnColor.innerHTML = randColor
            },1000)
    }
}
function stop(){
    clearInterval(timerID)
    timerID = null
}

btnStart.addEventListener("click",start)
btnStop.addEventListener("click",stop)
*/



/**************/
// 로또 번호 생성하기
/*************/
let btnLotto = document.getElementById("btnLotto")
let tagType = document.getElementsByName("tagType")
let box = document.getElementById("box")
let tagName = "H3"
let lotto = [0,0,0,0,0,0]

function chkType(){
    for(let i=0; i<lotto.length; i++){
        if(tagType[i].checked == true){
            tagName = tagType[i].value
        }
    }
}




function makeLotto(){
    for(let i=0; i<lotto.length; i++){
        lotto[i] = parseInt(Math.random()*45+1);
        for(let j=0; j<i; j++){
            if(lotto[i] == lotto[j]){
                i--;
                break;
            }
        }
    }
    let newElement = document.createElement(tagName)
    let textNode = document.createTextNode(lotto.join(" "))
    newElement.appendChild(textNode)
    box.append(newElement)

}

btnLotto.addEventListener("click",makeLotto)
// tagType.addEventListener("click",chkType)
for(let i=0; i<tagType.length; i++){
    tagType[i].addEventListener("click",chkType)
}

// console.log("로또 값 : " + lotto.join(" "))
// console.log(`로또 값 : ${lotto.join(" ")}`)
