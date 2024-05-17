$(function () {
    var connectVarios = document.getElementsByClassName("connectiontooltip");
    console.log("mi boton class connectVarios -> ", connectVarios);
  
    // * y solo map connectVarios
    [...connectVarios].map((element) => {
      return new bootstrap.Tooltip(element);
    });
  
    var miBttnConectClass = $(".connect");
    console.log("mi boton class connect -> ", miBttnConectClass);
  
    // new bootstrap.Tooltip(miBttnConectClass[0]) // <-- activo toolTip a un solo botón
  
    // miBttnConectClass es un objeto indexado tipo {0:"..."", 1: "...", prevData <- y con otra info más}
    // activo toolTip a varios botones
    for (const key in miBttnConectClass) {
      if (!isNaN(parseInt(key))) {
        // isNaN(3) -> false  |  isNaN("3") -> false  |  isNaN("hola") -> true
        new bootstrap.Tooltip(miBttnConectClass[key]);
      }
    }
  
    $("#enviarCorreo").click(function () {
      alert("El correo fue enviado correctamente...");
    })});