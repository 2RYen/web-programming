/*********** jQuery / selector 사용법: html(), text() ***********/ 
// let btnstart = document.getElementById("start")
// btnstart.innerHTML = "고고"

/* $(document).ready(function(){
    let btnstart = document.getElementById("start")
    // btnstart.innerHTML = "고고"
    // $('button').html('고고씽')
    // $('#start').html('고고씽2')
    // $('.startClass').html('고고씽3')
    // $('#box').html('<h1>Hello</h1>')
    // $('#box').text('<h1>Hello</h1>')
    console.log($('#stop').html())
    // $('#stop').html($('#start').html())
    $('#stop').text($('#start').text())
})
*/

/*********** selector 사용법 + css() ***********/
// $(document).ready(function(){
//     $('#start').css('color','red')
//     $('#stop').css('backgroundColor','pink')
//     $('#pause').css({
//         'color' : 'red',
//         'backgroundColor' : 'pink'
//     })
//     $('#box').css('border')
//     console.log("$('#box').css('border') " + $('#box').css('border'))
//     console.log(`$('#box').css('border') : ${$('#box').css('border')}`)
//     $('#box2').css({
//         'width' : '200px',
//         'height' : '200px',
//         'border' : '1px solid blue',
//         'margin-top' : '1px',
//         'backgroundColor' : '#eee'
//     })
// })


/*********** selector 사용법 + eq() ***********/
$(document).ready(function(){
    // $('[id=first]').css('color','red')

    // 자바스크립트 방식
    let list = document.querySelectorAll('h1')
    list[1].style.backgroundColor = 'yellow'

    // jQuery 방식
    $('h1').eq(2).css('backgroundColor','lightblue')
})