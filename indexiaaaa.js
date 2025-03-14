document.getElementById("modo-btn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.getElementById("modo-btn").textContent == "🔆 Modo claro") {
    document.getElementById("modo-btn").textContent = "🌙 Modo oscuro";
  } else {
    document.getElementById("modo-btn").textContent = "🔆 Modo claro";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (nombre === "" || email === "" || password === "") {
      alert("Todos los campos son obligatorios.");
      event.preventDefault();
      return false;
    }

    if (!validarEmail(email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      event.preventDefault();
      return false;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      event.preventDefault();
      return false;
    }

    alert("Registro exitoso");
    return true;
  });

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});

const textos = {
  es: {
    titulo: "Tutorial de diseño de páginas web",
    subtitulo: "Registro",
    nombre: "Nombre:",
    email: "Correo Electrónico:",
    contraseña: "Contraseña:",
    botonRegistro: "Registrarse",
  },
  en: {
    titulo: "Web Page Design Tutorial",
    subtitulo: "Sign Up",
    nombre: "Name:",
    email: "Email:",
    contraseña: "Password:",
    botonRegistro: "Sign Up",
  },
  fr: {
    titulo: "Tutoriel de conception de sites Web",
    subtitulo: "Inscription",
    nombre: "Nom:",
    email: "E-mail:",
    contraseña: "Mot de passe:",
    botonRegistro: "S'inscrire",
  },
};

const banderas = {
  es: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  en: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  fr: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
};

let idiomas = ["es", "en", "fr"];
let idiomaIndex = 0;

document.getElementById("lang-btn").addEventListener("click", function () {
  idiomaIndex = (idiomaIndex + 1) % idiomas.length;
  let idioma = idiomas[idiomaIndex];

  document.getElementById("titulo").textContent = textos[idioma].titulo;
  document.getElementById("subtitulo").textContent = textos[idioma].subtitulo;
  document.getElementById("label-nombre").textContent = textos[idioma].nombre;
  document.getElementById("label-email").textContent = textos[idioma].email;
  document.getElementById("label-contraseña").textContent =
    textos[idioma].contraseña;
  document.getElementById("Registro").textContent =
    textos[idioma].botonRegistro;

  let proximaBandera = "";
  if (idioma === "en") {
    proximaBandera = banderas["fr"];
  } else if (idioma === "fr") {
    proximaBandera = banderas["es"];
  } else if (idioma === "es") {
    proximaBandera = banderas["en"];
  }

  document.getElementById(
    "lang-btn"
  ).innerHTML = `<img src="${proximaBandera}" alt="Next Language Flag" width="30" height="20">`;
});
