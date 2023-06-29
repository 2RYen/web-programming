// $(document).ready(function(){
//     // $('h1').each(function(index,item){
//     //     console.log(index, $(item).text())
//     // })
//     console.log($('h1').eq(1).text())
// })

/* 노드찾기() */
// $(document).ready(function(){
    // $('ul.menu li').each(function(index, item){
    //         console.log(index,$(item).text())
    // })
    // console.log("---------")
    // $('ul.menu li').each(function(){
    //     console.log($(this).text())
    // })

/* filter: 찾은 노드 중에서 특정 노드 찾기 */
// $(document).ready(function(){
//     $('ul.menu li').filter(".select").css("border","4px solid red")
// })

/* find: 자식 노드 찾기 */
// $(document).ready(function(){
//     $('ul.menu li').find(".test1").css("border","4px solid red")
// $('div#content').find("*").css("border","4px solid red")
// })

// $(document).ready(function(){
//     $('div#content').find("*").css("border","4px solid red")
// })

// $(document).ready(function(){
//     $('#content').children('.content-data').css('border','4px solid red')
//     $('#content').children('.content-data').find('.test1').css('border','4px solid ')
// })

/* 부모 노드 찾기 */
// $(document).ready(function(){
//     $('ul.menu').parent().css("border","4px solid red")
//     $('ul.menu').parents().css("border","4px solid red")
//     $('ul.menu').parents(".page").css("border","4px solid red")
// })

/* 형제 노드 찾기 */
// $(document).ready(function(){
//     $('ul.menu .test1').prev().css("border","4px solid red")
//     $('ul.menu .test1').prevAll().css("border","4px solid red")
//     $('ul.menu .select').next().css("border","4px solid blue")
//     $('ul.menu .select').nextAll('.test1').css("border","4px solid blue")
// })


// $(document).ready(function(){
//     $('td:eq(1)').css('backgroundColor','yellow')
//     $('td:gt(1)').css('backgroundColor','yellow')
//     $('td:lt(1)').css('backgroundColor','yellow')
//     $('tr:has(td)').css('backgroundColor','yellow')
//     $('td:nth-child(2n)').css('backgroundColor','yellow')
//     $('td:contains(홍길동)').css('backgroundColor','yellow')
//     $('td:not(#mu)').css('backgroundColor','yellow')
// })

// $(document).ready(function(){
//     // $('tr').eq(0).addClass('type1')
//     $('td').each(function(index,item){
//         if(index < 4){
//             $(item).addClass('type1')
//         }
//         if($(item).text()=='서울'){
//             $(item).addClass('type2')
//         }
//     })
// })

