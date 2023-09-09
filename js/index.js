$(document).ready(function () {
  const phrases = ["Web developer", "Multiplatform developer", "Game developer", "Movile developer"];
  let currentPhraseIndex = 0;
  let currentText = "";
  let textIndex = 0;


  $(".portfolio-item button:eq(0)").on("click", function(e){
    redirigir("https://indarkdev.000webhostapp.com/angular/angularlista/list")
  })

  $(".portfolio-item button:eq(1)").on("click", function(e){
    redirigir("https://indarkdev.000webhostapp.com/angular/angularlista/list")
  })

  $(".portfolio-item button:eq(2)").on("click", function(e){
    redirigir("https://indarkgames.itch.io/remember-me")
  })

  $(".portfolio-item button:eq(3)").on("click", function(e){
    redirigir("https://indarkdev.000webhostapp.com/angular/angularlista/list")
  })

  $(".portfolio-item button:eq(4)").on("click", function(e){
    redirigir("https://indarkdev.000webhostapp.com/angular/angularlista/list")
  })

  $(".portfolio-item button:eq(5)").on("click", function(e){
    redirigir("https://indarkdev.000webhostapp.com/angular/angularlista/list")
  })
 


  function redirigir(url){
    window.location.href = url;
  }


  function writeText() {
    if (textIndex < phrases[currentPhraseIndex].length) {
      currentText += phrases[currentPhraseIndex].charAt(textIndex);
      textIndex++;
      $("#text-container").text(currentText);
      setTimeout(writeText, 100); // Velocidad de escritura
    } else {
      setTimeout(function () {
        textIndex = 0;
        currentText = "";
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        writeText();
      }, 1000); // Espera antes de iniciar la siguiente frase
    }
  }

  writeText();

  $(window).on("scroll", function(){
    //sacamos el desplazamiento actual de la página
    var desplazamientoActual = $(document).scrollTop();
    //accedemos al control de "ir arriba"
    //compruebo si debo mostrar el botón
    if(desplazamientoActual > 100 ){
        $(".mouseY").fadeOut("slow");
    }
    //controlo si debo ocultar el botón
    if(desplazamientoActual < 100){
        $(".mouseY").fadeIn("slow");
    }
});
  

    
  
});




