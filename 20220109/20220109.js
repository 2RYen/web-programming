// 노드 생성 : prepend, append
// $(document).ready(function(){
  
//   $('#create').click(function(){
//     let newNode = $('<li>New Node</li>');
//     // $('.menu').prepend(newNode);
//     // newNode.prependTo('.menu')
//     // $('.menu').append(newNode);
//     newNode.appendTo('.menu')
//   })
// })


// 삽입 : insertBefore, before, insertAfter, after
// $(document).ready(function(){
//   $('#insert').ready(function(){
//     let newNode = $('<li>New Node</li>');
//     let baseNode = $('.selected')
//     let baseNode = $('li').eq(4)
//     newNode.insertBefore(baseNode)
//     baseNode.before(newNode)
//     newNode.insertAfter(baseNode)
//     baseNode.after(newNode)
//   })
// })


// 이동 : prepend, append
// $(document).ready(function(){
//   $('#move').click(function(){
//     let $parent = $('ul.menu')
//     let $moveNode = $('li').eq(3)
//     $parent.prepend($moveNode)
//     $moveNode.prependTo($parent)
//   })
// })


// 삭제 : remove
// $(document).ready(function(){
//   $('#delete').click(function(){
//     $('.selected').remove()
//     $('ul.menu').remove()
//     $('ul.menu').children().remove()
//   })
// })


// Quiz1
$(document).ready(function(){
  $('#create').click(function(){
    let count = 1
    let $rowCount = $('#row').val();
    let $columnCount = $('#column').val();
    let $color = $('#color').val();
    let $output = $('.output')
    let $table = $('<table></table>')
    $output.append($table)
    console.log(`row: ${$rowCount}, column:${$columnCount}, color:${$color}`)
    for(let i=0; i<$rowCount; i++){
      $tr = $('<tr></tr>')
      for(let j=0; j<$columnCount; j++){
        $td = $('<td>'+count+'</td>')
        $td = $(`<td>${count}</td>`)
        $td.attr({
          'bgColor' : $color,
          'width' : 40,
          'height' : 40,
          'align' : 'center',
          'valign' : 'middle'
        })
        count++
        $tr.append($td)
      }
      $table.append($tr)
    }
  })

  $('#delete').click(function(){
    $output = $('.output');
    // $output = $('table:last')
    $output.children().remove();
  })
})