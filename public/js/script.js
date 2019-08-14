$( document ).ready(function() {
  $("#txtChat").click(()=>{
    let rigth = $("#chat").css("right");
    if(rigth == "0px"){
      $("#chat").css("right", "-343px");   
    }else{
      $("#chat").css("right", "0px");
    } 

  })

});