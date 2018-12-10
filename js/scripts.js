function scoreTotal(total, num){
  return total + num;
}


$(document).ready(function() {
  $("#startQuiz").click(function(event) {
    $(".intro").hide();
    $("#quiz").show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#quiz form").submit(function(event) {
    var userAnswers = [];

    for (i = 1; i <= 10; i++){
      var inputAnswers = parseInt($("input:radio[name = q"+i+"]:checked").val());
      userAnswers.push(inputAnswers);
    }


    alert(userAnswers);
    var score = userAnswers.reduce(scoreTotal);
    alert(score);
    $(".userScore").text(score);

    $("#quiz").hide();
    $("#result").show();

    event.preventDefault();
  });
});
