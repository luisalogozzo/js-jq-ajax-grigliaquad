$(document).ready(function () {

  $('.square').click(function () {
    $.ajax(
    {
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (risposta) {
    var number = parseInt(risposta.response);
    console.log(number);
    $('.square').click(function () {
      $(this).removeClass('yellow green');
      $(this).children('span').text(number);
      console.log($(this));
      if (number <= 5) {
        $(this).addClass('yellow');
      } else {
        $(this).addClass('green');
      }
    });

    },
    error: function () {
    alert('errore');
    }
    });
});





});
