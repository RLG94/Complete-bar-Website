
// MENU  RESPONSIVE EN MOVILES

var bntMenuOpen = document.getElementById("btnMenuOpen");
var bntMenuClose = document.getElementById("bntMenuClose");
var menuResponsive = document.getElementById("barra-menu");
var enlaces = document.getElementById("enlaces");

//CLICK ABRIR

bntMenuOpen.addEventListener("click", function () {
  menuResponsive.classList.add("active");

});
//CLICK CERRAR
bntMenuClose.addEventListener("click", function () {
  menuResponsive.classList.remove("active");
});

//CERRAR MENU CON ENLACES
enlaces.addEventListener("click", function () {
  menuResponsive.style.transitionDelay = "0.3s";
  menuResponsive.classList.remove("active");
});




//SLIDER DE LOS PORRONES
var contenedor = document.querySelector('.slider'),
  btnIzquierdo = document.getElementById("btn-izquierda"),
  btnDerecho = document.getElementById("btn-derecha");

//EVENTO PARA EL BOTON DERECHO
btnDerecho.addEventListener("click", function () {
  contenedor.scrollLeft += contenedor.offsetWidth;

});
//EVENTO PARA EL BOTON IZQUIERDO
btnIzquierdo.addEventListener("click", function () {
  contenedor.scrollLeft -= contenedor.offsetWidth;
});


//VALIDACION DEL FORM
var formulario = document.getElementById("formulario");

function validar(e) {
  var inputNombre = document.getElementById("nombre"),
    inputEmail = document.getElementById("email"),
    inputComents = document.getElementById("comentarios"),
    alertSucess = document.getElementById("alertSucess"),
    alertError = document.getElementById("alertError");


  if (CampoInvalido(inputNombre.value) || CampoInvalido(inputEmail.value) || CampoInvalido(inputComents.value) || !validarEmail(inputEmail.value)) {
    e.preventDefault();
    alertError.classList.remove("hide");
    alertError.classList.add("show");

    setTimeout(function () {
      alertError.classList.remove("show");
      alertError.classList.add("hide");

    }, 2500);

  } else {
    e.preventDefault();
    alertSucess.classList.remove("hide");
    alertSucess.classList.add("show");


    setTimeout(function () {
      alertSucess.classList.remove("show");
      alertSucess.classList.add("hide");

    }, 2500);


    inputNombre.value = "";
    inputEmail.value = "";
    inputComents.value = "";

  }



}

function CampoInvalido(valor) {
  return valor === '' || valor.length <= 4;
}
function validarEmail(email) {
  // Expresión regular para validar el formato de una dirección de correo electrónico
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

//EVENTOS DEL FORMULARIO
formulario.addEventListener("submit", validar);

//BOTON SCROLL TOP
 var btnTop = document.getElementById("btn-top");


 //DETECTAR EL SCROLL EN LA WEB y POSICIONAR BOTON

 window.addEventListener("scroll",function(){
    var scroll= document.documentElement.scrollTop;
    var fullSize = document.documentElement.offsetHeight;
    var sizeVP= document.documentElement.clientHeight;
    
    if (scroll > 120){
      btnTop.classList.add("show");
    }else{
      btnTop.classList.remove("show");
    }

    //BOTON END OF THE PAGE 

    if ( fullSize <= (scroll + sizeVP)){
      btnTop.classList.add("scrollFinal");
     } else{
      btnTop.classList.remove("scrollFinal");

     }
  
 })

//EVENTO CLICK EN EL BOTON   
btnTop.addEventListener("click", function(){
  window.scrollTo(0,0);
})
 
   
//DETECTAR SCROLL CLICK ARRIBA EN EL LOGO (PANTALLA MOVIL)
var Logo =document.getElementById("logo");

Logo.addEventListener("click",function(){
  window.scrollTo(0,0);
})

   
    