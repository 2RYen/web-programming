$(document).ready(function(){
  let picExist = false;
  let timer = null;
  function run(){
    for(let i=0; i<$('td').length; i++){
      $('img').eq(i+1).appendTo($('td').eq(i))
    }
    $('img:first').appendTo('td:last')
  }

  $('#view').on('click',function(){
    let trSize = 3
    let tdSize = 4

    // if(picExist == false){
      if(!picExist){
      $('<table></table>').appendTo('#picture');
      for(let i=0; i<trSize; i++){
        $('<tr></tr>').appendTo('table')
      }
      for(let i=0; i<tdSize; i++){
        $('<td></td>').appendTo('tr')
      }
      $('<img/>').appendTo('td')
      $('img').attr({
        'src'     : function(index){
                      return `images/${index}.jpg`
                    },
        'width'   : '100',
        'height'  : '100'
      })
      picExist =true;
    }
  })
  $('#clear').on('click',function(){
    $('#picture').empty();
    picExist = false;
    // console.log('clear...');
  })
  $('#start').on('click',function(){
    let speed = $('input[name=speed]:checked').val();
    if(!timer){
      timer = setInterval(run,speed)
    }
  })
  $('#stop').on('click',function(){
    clearInterval(timer)
    timer = null
    // console.log('stop...');
  })
})