$(document).ready(function(){
   $("#input-celular").keydown(validarnumero);
   $(".next-numero").click(inputvacio);
//   $("input-nombre").keydown(validarletras);
});
var validarnumero = function(e){
   var ascii = e.keyCode;
   if(ascii >= 48 && ascii<= 57 || ascii == 37 || ascii == 39 || ascii == 8){
      return true;
   }
   else{
      return false;
   }
}

var inputvacio = function(e){
   if($("#input-celular").val().length == 9 ){
      return true;
   }
   else{
      return false;
   }
}

/*var validarletras = function(e){
   var teclado = e.keyCode;
   if(teclado >)
}*/