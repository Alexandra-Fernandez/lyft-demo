$(document).ready(function(){
   $("#input-celular").keydown(validarnumero);
   $(".next-numero").click(inputvacio);
   $("#input-nombre").keydown(validarletras);
   $("#input-apellido").keydown(validarletras);
   $("#next-datos").click(validaremail);
   $("#next-datos").click(validarterminos);
   $(".next-codigo").click(validarcodigo);
   $(".reset-code").click(resetcode);
   $("#next-datos").click(imprimirnombre);
   $("#done").click(datosagregados);
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
      window.localStorage.setItem("random", parseInt(Math.random()*10).toString()+parseInt(Math.random()*10).toString()+parseInt(Math.random()*10).toString());
      alert(localStorage.getItem("random"));
      /*var inputCel = $("#input-celular").val();
      window.localStorage.setItem("celular", inputCel);*/ 
                                  
      return true;
   }
   else{
      alert("ingresa un número");
      return false;
   }
   /*var numeroguardado = window.localStorage.getItem("celular");
      $("#guardar-numero").text(inputCel);*/
}

var validarcodigo = function(){
   if($(".number").eq(0).val()+$(".number").eq(1).val()+$(".number").eq(2).val() == localStorage.getItem("random")){
      return true;
   }
   else{
      $(".number").val("");
      return false;
   }
}


var resetcode = function(){
   window.localStorage.setItem("random", parseInt(Math.random()*10).toString()+parseInt(Math.random()*10).toString()+parseInt(Math.random()*10).toString());
   alert(localStorage.getItem("random"));
}

var validarletras = function(e){
   var teclado = e.keyCode;
   if(teclado >= 48 && teclado<= 57){
      alert("solo ingresar letras");
      return false;
   }
   else{
      return true;
   }
}

var validaremail = function(e){
   if($("#input-email").val().indexOf('@', 0) == -1 || $("#input-email").val().indexOf('.', 0) == -1) {
      alert('El correo electrónico introducido no es correcto.');
      return false;
   }
   else{
      return true;
   }
};

var validarterminos = function(e){
   if($("#terminos-condiciones").is(":checked")){
      return true;
   }

   else{
      alert("aceptar terminos y condiciones");
      return false;
   }
}

var imprimirnombre = function(){
   var inputnombre = $("#input-nombre").val();
   window.localStorage.setItem("nombre", inputnombre);
   
   var inputapellido = $("#input-apellido").val();
   window.localStorage.setItem("apellido", inputapellido);
 
}

var datosagregados = function(){
   var inputhome = $("#input-casa").val();
   window.localStorage.setItem("casa", inputhome);
   $("#home").text(window.localStorage.getItem("casa"));
}