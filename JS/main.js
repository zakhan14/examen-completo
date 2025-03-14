document.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    event.preventDefault(); // Evita que se mueva el foco por defecto
    mostrarTablaNavegacion();
  } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    navegarOpciones(event.key);
  } else if (event.key === "Enter") {
    seleccionarOpcion();
  }
});

let indiceSeleccionado = 0;

function mostrarTablaNavegacion() {
  // Verificar si la tabla ya existe
  let tablaExistente = document.getElementById("tablaNavegacion");
  if (tablaExistente) {
    tablaExistente.remove();
  }

  // Crear la tabla, los tamaños los he ajustado con chatgpt
  let tabla = document.createElement("table");
  tabla.id = "tablaNavegacion";
  tabla.style.position = "fixed";
  tabla.style.top = "50%";
  tabla.style.left = "50%";
  tabla.style.transform = "translate(-50%, -50%)";
  tabla.style.border = "1px solid black";
  tabla.style.backgroundColor = "white";
  tabla.style.zIndex = "1000";
  tabla.style.padding = "10px";

  let opciones = [
    { nombre: "HTML", url: "HTMLRESUMEN.html" },
    { nombre: "JavaScript", url: "../PIEDRA,PAPEL O TIJERA/jeje.html" },
  ];
  //DESDE AQUI
  opciones.forEach((opcion, index) => {
    let fila = tabla.insertRow();
    let celda = fila.insertCell();
    let enlace = document.createElement("a");
    enlace.href = opcion.url;
    enlace.textContent = opcion.nombre;
    enlace.style.display = "block";
    enlace.style.padding = "5px";
    enlace.style.textAlign = "center";
    enlace.style.textDecoration = "none";
    enlace.style.color = "black";
    enlace.style.cursor = "pointer";
    enlace.classList.add("opcion-navegacion");
    if (index === 0) enlace.classList.add("seleccionado");

    celda.appendChild(enlace);
  });

  document.body.appendChild(tabla);
}
//HASTA AQUI me lo ha puesto chatgpt
function navegarOpciones(direccion) {
  let opciones = document.querySelectorAll(".opcion-navegacion");
  opciones[indiceSeleccionado].classList.remove("seleccionado");

  if (direccion === "ArrowDown") {
    indiceSeleccionado = (indiceSeleccionado + 1) % opciones.length;
  } else if (direccion === "ArrowUp") {
    indiceSeleccionado =
      (indiceSeleccionado - 1 + opciones.length) % opciones.length;
  }

  opciones[indiceSeleccionado].classList.add("seleccionado");
}

function seleccionarOpcion() {
  let opcionSeleccionada = document.querySelector(
    ".opcion-navegacion.seleccionado"
  );
  if (opcionSeleccionada) {
    window.location.href = opcionSeleccionada.href;
  }
}

// para resaltar la opción seleccionada
const estilo = document.createElement("style");
estilo.textContent = `
  .seleccionado {
      background-color: lightblue !important;
  }
`;
document.head.appendChild(estilo);
