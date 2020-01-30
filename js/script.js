$(document).ready(function () {

  $(document).on("click",function(event) {
    $.ajax(
    {
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (risposta) {
    var number = parseInt(risposta.response);
    console.log(number);
    $(event.target).removeClass('yellow green');
    $(event.target).children('span').text(number);
    console.log($(event.target));
    if (number <= 5) {
      $(event.target).addClass('yellow');
    } else {
      $(event.target).addClass('green');
    }
    },
    error: function () {
    alert('errore');
    }
    });
});





});
