



let aboutOffset =  $("#ABOUT").offset().top;
$(window).scroll(function(){

    let wScroll = ( $(window).scrollTop() );

    if(wScroll > aboutOffset-50)
    {
      $("#navbar").css("backgroundColor","rgba(0,0,0,0.5)"); 
      $("#btnUp").fadeIn(500);
      
    }
    else
    {
      $("#btnUp").fadeOut(500);
      
      $("#navbar").css("backgroundColor","rgba(0,0,0,0)");
      
    }
})


$("#btnUp").click(function(){
$("body ,html").animate({scrollTop:"0"},1000);
})
$("a").click(function(){
  let href = $(this).attr("href");
  let hrefOffset =  $(href).offset().top;
$("body ,html").animate({scrollTop:hrefOffset},1000);

})

let colrHeading =$(".color-item");
colrHeading.eq(0).css("backgroundColor","teal");
colrHeading.eq(1).css("backgroundColor","darkgreen");
colrHeading.eq(2).css("backgroundColor","darkred");
colrHeading.eq(3).css("backgroundColor","gery");
colrHeading.eq(4).css("backgroundColor","magenta");
$(colrHeading).click(function(e){

  let color =$(this).css("backgroundColor");

  $(".change").css("color",color);
})
$("#option img").click(function(){
  let srcImg = $(this).attr("src");
  let wScroll = ( $(window).scrollTop() );
if( wScroll < aboutOffset )
{
  $("header").css("backgroundImage",`url(${srcImg})`);
}
else
{
  $("body ,html").animate({scrollTop:"0"},1000,function(){
    
    $("header").css("backgroundImage",`url(${srcImg})`);

  });

}
})


let colorBoxWidth = $(".color-box").outerWidth();
$("#option").animate({"left":`-${colorBoxWidth}`},1000);


$("#option i").click(function(){


  if($("#option").css("left")=="0px")
  {
    $("#option").animate({"left":`-${colorBoxWidth}`},1000)
  }
  else
  {
    $("#option").animate({"left":`0px`},1000)
  }
})

$("#home-menu").click( function(){
  $("#all-menu").removeClass("border-line")
  $("#office-menu").removeClass("border-line")
  $("#home-menu").addClass("border-line")
  $(".home-menu").show(250,function(){
    $(".office-menu").hide(250);
  });
})
$("#office-menu").click( function(){
  $("#all-menu").removeClass("border-line")
  $("#home-menu").removeClass("border-line")
  $("#office-menu").addClass("border-line")
  $(".office-menu").show(250 ,function(){
    $(".home-menu").hide(250);
    
  });
})
$("#all-menu").click( function(){
  $("#home-menu").removeClass("border-line")
  $("#office-menu").removeClass("border-line")
  $("#all-menu").addClass("border-line")
  $(".office-menu").show(250);
  $(".home-menu").show(250);
})


$(document).ready(function(){
  $("#loading").slideUp(3000,function(){
    $("body").css("overflow","auto");
  })
})