$(document).ready(function () {
  const phrases = ["Web developer", "Multiplatform developer", "Game developer", "Mobile developer"];
  let currentPhraseIndex = 0;
  let currentText = "";
  let textIndex = 0;


  $(".portfolio-item button:eq(0)").on("click", function(e){
    download("./apps/savegaming.apk");
  })

  $(".portfolio-item button:eq(1)").on("click", function(e){
    redirigir("https://github.com/vanerb/Artistapp-PHP-JS")
  })

  $(".portfolio-item button:eq(2)").on("click", function(e){
    redirigir("https://indarkgames.itch.io/remember-me")
  })

  $(".portfolio-item button:eq(3)").on("click", function(e){
    redirigir("https://github.com/vanerb/AngularVideojuegosApp")
  })

  $(".portfolio-item button:eq(4)").on("click", function(e){
    redirigir("https://discord.com/api/oauth2/authorize?client_id=763008480504184872&permissions=8&scope=bot")
  })

  $(".portfolio-item button:eq(5)").on("click", function(e){
    redirigir("https://github.com/vanerb/LaravelPortfolio")
  })


  $(".social button:eq(0)").on("click", function(){
    redirigir("https://github.com/vanerb");
  })

  $(".social button:eq(1)").on("click", function(){
    redirigir("https://www.linkedin.com/in/vanesa-ribera-bautista-47969527a/");
  })


  function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
 


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




