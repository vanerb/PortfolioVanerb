$(document).ready(function () {
  const phrases = ["Web developer", "Multiplatform developer", "Game developer", "Mobile developer"];
  let currentPhraseIndex = 0;
  let currentText = "";
  let textIndex = 0;




  $(".portfolio-item button:eq(0)").on("click", function (e) {
   
  })

  $(".portfolio-item button:eq(1)").on("click", function (e) {
    redirect('https://github.com/vanerb/Artistapp-PHP-JS')
  })

  $(".portfolio-item button:eq(2)").on("click", function (e) {
    redirect("https://indarkgames.itch.io/remember-me")
  })

  $(".portfolio-item button:eq(3)").on("click", function (e) {
    redirect("https://github.com/vanerb/AngularVideojuegosApp")
  })

  $(".portfolio-item button:eq(4)").on("click", function (e) {
    redirect("https://discord.com/api/oauth2/authorize?client_id=763008480504184872&permissions=8&scope=bot")
  })

  $(".portfolio-item button:eq(5)").on("click", function (e) {
    redirect("https://github.com/vanerb/LaravelPortfolio")
  })


  $(".social button:eq(0)").on("click", function () {
    redirect("https://github.com/vanerb");
  })

  $(".social button:eq(1)").on("click", function () {
    redirect("https://www.linkedin.com/in/vanesa-ribera-bautista-47969527a/");
  })


  $('a.scroll-link').on('click', function (e) {
    e.preventDefault();

    var target = $(this.getAttribute('href'));
    var headerHeight = $('#main-header').outerHeight(); 

    if (target.length) {
      var targetPosition = target.offset().top - headerHeight;

      $('html, body').animate({
        scrollTop: targetPosition
      }, 0); 
    }
  });

  function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }


  function redirect(url) {
    open(url)
   // window.location.href = url;
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
});




