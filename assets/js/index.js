$(function () {
    var connectVarios = document.getElementsByClassName("connectiontooltip");
    
    [...connectVarios].map((element) => {
      return new bootstrap.Tooltip(element);
    });
  
    var miBttnConectClass = $(".connect");
    for (const key in miBttnConectClass) {
      if (!isNaN(parseInt(key))) {
                new bootstrap.Tooltip(miBttnConectClass[key]);
      }
    }
  
    $("#enviarCorreo").click(function () {
      alert("El formularioS fue enviado correctamente...");
    })});

    const navE1 = document.querySelector(".navbar");

    window.addEventListener(`scroll`,() => {
      if (window.scrollY >= 56){
        navE1.classList.add(`navbar-scrolled`);
      } else if (window.scrollY < 56){
        navE1.classList.remove(`navbar-scrolled`);
      }
    })