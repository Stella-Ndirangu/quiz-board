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
    var check = true;
    $("input:radio").each(function(){
      var name = $(this).attr("name");
      if($("input:radio[name="+name+"]:checked").length == 0){
        check = false;
      }
    });

    if(check){
      for (i = 1; i <= 10; i++){
        var inputAnswers = parseInt($("input:radio[name = q"+i+"]:checked").val());
        userAnswers.push(inputAnswers);
      }
      var score = userAnswers.reduce(scoreTotal);

      $(".userScore").text(score);

      $("#quiz").hide();
      $("#result").show();
      } else {
        alert ('Please answer all questions');
    }


    event.preventDefault();
  });
});
