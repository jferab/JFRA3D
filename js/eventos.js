$( document ).ready(function() {
  reescalaVentana();
});

$(window).resize(function(){
  reescalaVentana();
})

$(document).click(function(e){
  console.log("click");
})
$("#contenedorJuego").click(function(e) {
    console.log("click");
});
