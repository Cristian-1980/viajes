$(function () {
    var connectVarios = document.getElementsByClassName("connectiontooltip");
    console.log("mi boton class connectVarios -> ", connectVarios);
  
    [...connectVarios].map((element) => {
      return new bootstrap.Tooltip(element);
    });
  
    var miBttnConectClass = $(".connect");
    console.log("mi boton class connect -> ", miBttnConectClass);
  
    for (const key in miBttnConectClass) {
      if (!isNaN(parseInt(key))) {
                new bootstrap.Tooltip(miBttnConectClass[key]);
      }
    }
  
    $("#enviarCorreo").click(function () {
      alert("El correo fue enviado correctamente...");
    })});