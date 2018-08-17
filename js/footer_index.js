$('body').click(function(){
    $("footer .content .container-wrp .language .dropdown").fadeOut(250);
})
$("footer .content .container-wrp .language").click(function(event){
    event.stopPropagation();
  $("footer .content .container-wrp .language .dropdown").fadeToggle(250);
});