$(window).scroll(function(){
    if($(this).scrollTop()>150)
    {
        $("header").addClass("fadeIn")
        $(".up").show()
       
    }
    else
    {
        $("header").removeClass("fadeIn")
        $(".up").hide();    
    }
})