$( document ).ready(function() {
  $("#txtChat").click(()=>{
    let rigth = $("#chat").css("right");
    if(rigth == "0px"){
      $("#chat").css("right", "-23%");   
    }else{
      $("#chat").css("right", "0px");
    } 

  })

});