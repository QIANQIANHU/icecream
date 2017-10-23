$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var blanks = ["vanilla", "coffee", "banana", "berry"];
    blanks.forEach(function (blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

     //$("#story").show();
   });
   
  });
});
