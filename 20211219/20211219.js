/* selector + html(), text(), eq() */
// $(document).ready(function(){
//     console.log(`$('h1').html() : ${$('h1').html()}`)
//     console.log(`$('h1').html() : ${$('h1').text()}`)
//     console.log(`$('h1').eq(2).html() : ${$('h1').eq(2).html()}`)
//     $('h1').eq(0).html('<h2>1. Hi</h2>')
//     $('h1').eq(0).text('<h2>1. Hi</h2>')
//     $('h1').eq(0).html('1. Hi')
// })


/* css() */
// $(document).ready(function(){
//     // console.log(`$('div').css('border') : ${$('div').css('border')}`)
//     // $('div').css('border', '5px dotted orange')
//     // $('.team1').eq(1).css('color','pink')
//     $('div').css({
//         'border' : '1px solid green',
//         'color' : 'red'
//     })
// })


/* each() */
// $(document).ready(function(){
    
//     $('h1').each(function(index,item){
//         console.log(index,item)
//         console.log(index,$(item).text())
//     })
// })


/* addClass(), removeClass(), hasClass */
// $(document).ready(function(){
//     $('h1').eq(0).addClass('redClass borderClass')
//     $('h1').eq(1).addClass('greenClass')
//     $('h1').eq(2).addClass('blueClass')
//     $('h1').eq(1).removeClass('greenClass')
//     // $('h1').eq(1).removeClass()
//     // $('h1').removeClass()
//     $('h1').each(function(index,item){
//         if($(item).hasClass('team1')){
//             console.log(index,$(item).text())
//         }
//     })
// })


/* attr() */
// $(document).ready(function(){
//     console.log($('#image').attr('src'))
//     $('#image').attr('src','http://placehold.it/50x50')
// })





function check(){
    if($('#userName').val() == ""){
        alert("이름을 입력하세요!")
        $('#userName').focus();
        return false;
    }
    if($('#pwd1').val() == ""){
        alert("비밀번호를 입력하세요!")
        $('#pwd1').focus();
        return false;
    }
    if($('#pwd2').val() == ""){
        alert("비밀번호를 입력하세요!")
        $('#pwd2').focus();
        return false;
    }
    if($('#pwd1').val() != $('#pwd2').val()){
        alert("비밀번호가 틀렸습니다!")
        $('#pwd1').val("")
        $('#pwd2').val("")
        $('#pwd1').focus();
        return false;
    }
    if($('#pwd1').val().length < 8){
        alert("비밀번호의 길이를 8자 이상으로 해주세요!")
        $('#pwd1').focus();
        return false;
    }
    if(($('#man').is(':checked') == false) && ($('#woman').is(':checked') == false)){
        alert("성별을 선택해 주세요!")
        $('#man').focus();
        return false;
    }
    if(($('#tell').val().length < 3) || (isNaN($('#tell').val()))){
        alert("입력을 다시해주세요")
        $('#tell').focus();
        return false;
    }
    if(($('#tell2').val().length < 3) || (isNaN($('#tell2').val()))){
        alert("입력을 다시해주세요")
        $('#tell2').focus();
        return false;
    }
    if(($('#tell3').val().length < 4) || (isNaN($('#tell3').val()))){
        alert("입력을 다시해주세요")
        $('#tell3').focus();
        return false;
    }
    if($('#department').val() == ""){
        alert("학과를 선택하세요")
        $('#department').focus();
        return false;
    }
    return true;
}