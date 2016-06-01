$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var noun1Input = $("input#noun1").val();
    var noun2Input = $("input#noun2").val();
    var adjective1Input = $("input#adjective1").val();
    var verb1Input = $("input#verb1").val();
    var verb2Input = $("input#verb2").val();
    var verb3Input = $("input#verb3").val();
    var noun3Input = $("input#noun3").val();

    $(".noun1").append(noun1Input);
    $(".noun2").append(noun2Input);
    $(".adjective1").append(adjective1Input);
    $(".verb1").append(verb1Input);
    $(".verb2").append(verb2Input);
    $(".verb3").append(verb3Input);
    $(".noun3").append(noun3Input);

    $("#story").show();

    event.preventDefault();
  });
});
