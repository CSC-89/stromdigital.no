
// if(jQuery) {
//     alert("jquery connected")
// }

$(document).ready(function() {
    $("#main1").fadeIn(750)
    $("#main2").fadeIn(750)
});

$(".navbar-toggler").on("click",function() {
    $("nav").stop()

    $("nav").toggleClass("fadeColour")
    $(".blurb").fadeToggle(100)   
})

$('.nav-link').click(function() {

    event.preventDefault();
    
    newLocation = this.href;
    $('#main1').fadeOut(750, newpage);
    $('#main2').fadeOut(750, newpage);
    });
    
    function newpage() {
    
    window.location = newLocation;
    
    }