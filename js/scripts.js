function leapYear (year){
  debugger;
  if (year % 400 === 0){
    return true;
  }
  

  if (year % 100 === 0){
    return false;
  }

  if (year % 4 === 0){
    return true;
  }else {
    return false;

  }
}


// User Interface Logic

$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapYear (year);
    $("#result").text(result);
    // var results = $("#result").val(parseInt("input#year"));



  });
});
