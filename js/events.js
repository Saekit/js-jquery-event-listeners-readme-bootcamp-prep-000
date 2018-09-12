function getIt() {
  $('p').on('click', () => {
    alert("Hey!")
  })
}

function frameIt() {
  $('.tasty').load()
}

$(document).ready(function(){

getIt();


});
