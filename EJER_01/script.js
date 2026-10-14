const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(function (tarjeta) {
  tarjeta.addEventListener("click", function () {
    const titulo = tarjeta.querySelector("h3").textContent;
    const descripcion = tarjeta.querySelector("p").textContent;

    alert(titulo + "\n\n" + descripcion);
  });
});