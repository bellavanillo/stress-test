//Business Logic

var total = (warningSigns + health + activities);
if (4 <= total <= 8){
  $("#high-stress").show();
  $("#mild-stress").hide();
  $("#low-stress").hide();
} else if (1 <= total <= 3){
  $("#mild-stress").show();
  $("#high-stress").hide();
  $("#low-stress").hide();
} else if (-4 <= total <= 0){
  $("#low-stress").show();
  $("#mild-stress").hide();
  $("#high-stress").hide();
} else {
  $(".results").hide();
}



//UI Logic
$(document).ready(function(){
  $("form#questions").submit(function(event){
    event.preventDefault();
    debugger;
    //$(".results").show();
    $("input:checkbox[name=warning]:checked").each(function(){
      var warningSigns = parseInt($(this).val());
      //$('.results').append( warningSigns + "<br>");
      //alert(warningSigns);
    });

    $("input:checkbox[name=health]:checked").each(function(){
      var health = parseInt($(this).val());
      //$('.results').append( health + "<br>");
    });

    $("input:checkbox[name=activities]:checked").each(function(){
      var activities = parseInt($(this).val());
      //$('.results').append( activities + "<br>");
    });
    $('#questions').hide();
  });
});
