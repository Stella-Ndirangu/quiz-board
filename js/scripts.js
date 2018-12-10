$(document).ready(function() {
  $("#startQuiz").click(function(event) {
    $("div.intro").hide();
    $("#quiz").show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#quiz form").submit(function(event) {
    $("#quiz").hide();
    $("#result").show();

    event.preventDefault();
  });
});
$(document).ready(function(){


});
