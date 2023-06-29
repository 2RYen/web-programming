/* selector + html(), text() */

// $(document).ready(function(){
//     console.log(`$('#first').html() : ${$('#first').html()}`)
//     console.log(`$('.team1').html() : ${$('#team1').html()}`)
//     console.log(`$('#box').html() : ${$('#box').html()}`)
//     console.log(`$('#box').html() : ${$('#box').text()}`)
//     $('#first').text('<h2>1. 안녕</h2>')
//     $('#first').html('<h2>1. 안녕</h2>')
//     $('#box').text('<h2>3. 안녕</h2>')
//     $('#box').html('<h2>3. 안녕</h2>')
// })


/* selector + eq(), css() */
// $(document).ready(function(){
//     console.log(`$('h1').eq(2)html : ${$('h1').eq(2).html()}`)
//     $('h1').eq(1).css('color','red');
//     $('h1').eq(1).css({
//         'color' : 'orange',
//         'backgroundColor' : 'yellow'
//     })
//    console.log(`$('h1').eq(1).css('color') : ${$('h1').eq(1).css('color')}`)
// })


/* each() */
// $(document).ready(function(){
//     $('h1').each(function(index,item){
//         // console.log(index,'OK',item)
//         if(index == 1){
//             console.log(index,'OK',$(item).html())
//         }
//     })
//     console.log(`$('h1').eq(1).html() : ${$('h1').eq(1).html()}`)

//     $('.team1').css('border','1px solid red')
//     $('.team1').css({
//         'border' : '1px solid red',
//         'color' : 'orange'
//     })

//     $('h1').each(function(index,item){
//         let value = (index*2 + 2)
//         $(item).css('border', value + 'px solid red')
//     })
// })

/* addClass() vs removeClass() */
// $(document).ready(function(){
//     $('h1').each(function(index,item){
//         if(index == 0){
//             $(item).addClass('redClass');
//             $(item).addClass('backColor');
//             // $(item).removeClass()
//             $(item).removeClass('redClass');
//         }

//         if($(item).hasClass('team1')){
//             $(item).addClass('redClass');
//         }
//     })
// })


/* attr() */

$(document).ready(function(){
    console.log(`$('#image').attr('src') : ${$('#image').attr('src')}`)
    let bToggle = false
    $('#image').click(function(){
        bToggle = !bToggle
        if(bToggle){
            $('#image').attr('src','http://placehold.it/100x100')
            console.log(`bToggle : ${bToggle}`)
        }else{
            $('#image').attr('src','http://placehold.it/50x50')
           console.log(`bToggle : ${bToggle}`)
        }
    })
})