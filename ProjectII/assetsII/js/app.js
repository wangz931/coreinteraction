 

$('.heart').click(function() {
     $('.check1').removeClass('no1'); 
    var button_name = $(this).data('button');  
     if (button_name == 'first') {
      $('.one').removeClass('hide1');
      $('.container').addClass('hide1');
    } 
});

$(".heart1").click(function() {
  var currentHeight = $(".rblock.number.h1").height()

  var newHeight = currentHeight + 30;

  if(newHeight >= 280){
    newHeight = 280;
    alert("KISSING OVERLOAD");


} 


  $(".rblock.number.h1").css({"height" : newHeight + "px"})


})

   




$(function() {
    $('.kid1').hover(function() {
        $('.kid2').toggle();
    });    
});

$(".kid1").hover(function(){
  var currentHeight = $(".bblock.number.h1").height()
  var newHeight = currentHeight + 30; 
  if(newHeight>= 284){
    newHeight=284;
    alert("YAS GIRL! U DID IT!!");  }
 $(".bblock.number.h1").css({"height" : newHeight + "px"});
 })





$(".nutrition").click(function() {
 
  var currentHeight = $(".gblock.number.h1").height()

  var newHeight = currentHeight + 30;

  if(newHeight >= 280){
    newHeight = 280;
    alert("SO HEALTHY!!!");
  }

  $(".gblock.number.h1").css({"height" : newHeight + "px"})

  console.log(currentHeight)

})


$(".n4").click(function() {
 
  var currentHeight = $(".n4").height()
  var newHeight = currentHeight - 10;

if(newHeight >= 10){
    newHeight = 10;
    alert("R U SURE :/");
  }

  $(".n4").css({"height" : newHeight + "px"})

  console.log(currentHeight)

})







$(".classes").click(function() {
  //console.log("testing!")

  var currentHeight = $(".wblock").height()

  var newHeight = currentHeight + 30;

  if(newHeight >= 280){
    newHeight = 280;
    alert("KNOWLEDGE IS SEXAYY!!!");    
  }

  $(".wblock").css({"height" : newHeight + "px"})

  console.log(currentHeight)

})




//$(".meeting").click(function() {
  //console.log("testing!")

  //var currentHeight = $(".piblock.number.h1").height()

 // var newHeight = currentHeight + 30;

  //if(newHeight >= 290){
   //newHeight = 290;
  //alert("U DA BEST!!!");
//}

  //$(".piblock.number.h1").css({"height" : newHeight + "px"})

  //console.log(currentHeight)

//})






$(".laptop").click(function() {
  //console.log("testing!")

  var currentHeight = $(".wblock.number.h1").height()

  var newHeight = currentHeight + 30;

  if(newHeight >= 290){
    newHeight = 290
  }

  $(".wblock.number.h1").css({"height" : newHeight + "px"})

  console.log(currentHeight)

})

$(".bag").click(function() {
  //console.log("testing!")

  var currentHeight = $(".pblock.number.h1").height()

  var newHeight = currentHeight + 30;

  if(newHeight >= 280){
    newHeight = 280;
    alert("SHOPPING OVERLOAD FOR THE DAY!!!");
  }

  $(".pblock.number.h1").css({"height" : newHeight + "px"})

  console.log(currentHeight)

})



$('.food').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'second') {
      $('.two').removeClass('hide2');
      $('.container').addClass('hide2');
      console.log("second")
      
    } 

});

$('.move').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'third') {
      $('.three').removeClass('hide3');
      $('.container').addClass('hide3');
      
    } 

});

$('.talk').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'fourth') {
      $('.four').removeClass('hide4');
      $('.container').addClass('hide4');
      
    } 

});

$('.shopping').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'fifth') {
      $('.five').removeClass('hide5');
      $('.container').addClass('hide5');
      
    } 

});

$('.still').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'sixth') {
      $('.six').removeClass('hide6');
      $('.container').addClass('hide6');
      
    } 

});




