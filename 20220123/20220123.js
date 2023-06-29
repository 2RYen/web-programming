// $(document).ready(function(){
//   $('#naver').on('click',function(e){
//     alert('네이버');
//     e.preventDefault();
//   })
// })

// $(document).ready(function(){
//   $('#panel').on('click',function(){
//     console.log("01. panel에 등록한 클릭 이벤트")
//   })
//   $('#btn1').on('click',function(){
//     console.log("02. 버블링 처리")
//   })
//   $('#btn2').on('click',function(){
//     console.log("03. 버블링 중지")
//     e.stopPropagation();
//   })
// })


// $(document).ready(function(){
//   let $menu = $('ul.menu');
//   let count =0;
//   $('#add').click(function(){
//     $menu.append(`<li>new${count}</li>`)
//   })
//   $('ul li').on('click',function(){
//     console.log($(this).html())
//   })
//  })


  $(document).ready(function(){
    let $menu = $('ul.menu');
    let count = 0;
    $('#add').click(function(){
      count++;
      let $newItem = $('<li>menu'+count+'</li>');
      $newItem.on('click',function(){
        alert($(this).html());
      })
      $menu.append($newItem);
      })
      $('ul li').click(function(){
        alert($(this).html());
      })
    })