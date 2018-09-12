function getIt() {
  $('p').on('click', () => {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', () => {
    $('img').addClass('tasty').css('boarder', 'red')
  })
}
function pressIt() {
  $('document').on('keydown', () => {
    if (key.which == 71) {
      alert("You just pressed G!")
    }
  })
}
function submitIt() {
  
}

$(document).ready(function(){

getIt();
frameIt()

});
