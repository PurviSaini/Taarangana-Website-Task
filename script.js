$(document).ready(function(){
      $("#loading").css("display","none");
      
    $(".nav-link").on("click",function(e){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
      })
  
  });

