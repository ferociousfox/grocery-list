$(document).ready(function(){
  $("#grovery").submit(function(event) {
    event.preventDefault();
    var inputs = ["grovery0", "grovery1", "grovery2", "grovery3", "grovery4", "grovery5", "grovery6"];
    var userList = [];
    // for (var index = 0; index < 6; index++) {
    //   var placeHolder = "#grovery" + index;
    //   inputs[index] = $(placeHolder).val();
    inputs.forEach(function(input) {
      var userInput = $("input#" + input).val();
      userList.push(userInput);
    });
    var upperInputs = userList.map(function(input) {
      input = input.toUpperCase();
      return input;
    });
    upperInputs.sort();
    upperInputs.forEach(function(input){
      $("#groveryList").append("<li>" + input + "</li>");
    });

  });


});
