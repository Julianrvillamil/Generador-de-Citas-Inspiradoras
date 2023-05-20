// Array de citas inspiradoras
var quotes = [
  {
    quote:
      "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
    author: "Charles R. Swindoll",
  },
  {
    quote:
      "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
    author: "Albert Schweitzer",
  },
  // Agrega más citas inspiradoras aquí
];

//Funcion para generar una cita aleatoria
function generateQuote() {
  // seleccionador de cita
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];

  //actualizacion del contenido html
  var quoteElement = document.createElement("p");
  var authorElement = document.createElement("p");

  quoteElement.textContent = randomQuote.quote; //agrega el contenido de la cita
  authorElement.textContent = "- " + randomQuote.author;

  quoteElement.appendChild(authorElement);

  var quoteContainer = document.getElementById("quote-container");
  quoteContainer.innerHTML = ""; // Limpiamos el contenido previo del contenedor
  quoteContainer.appendChild(quoteElement);
}

// Event listener para el boton de generar cita
var generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateQuote);

//Generar una cita al cargar la pagina
//generateQuote();

/////////////////////////////Funcionalidad para copiar al porta papeles//////////////////////////

//Funcion para copiar la cita al portapapeles
function copyToClipboard() {
  // Seleccionar el texto de la cita
  var quoteText = document.getElementById("quote-container").textContent;

  //Crear un elemento de textarea temporal
  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = quoteText;
  document.body.appendChild(tempTextarea);

  //Seleccionar y copiar el texto del textarea temporal
  tempTextarea.select();
  document.execCommand("copy");

  //Eliminar el textarea temporal
  document.body.removeChild(tempTextarea);

  //Mostrar un mensaje de exito
  alert("¡La cita ha sido copiada al portapapeles!");
}
// Event listener para el botón de copiar
var copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener("click", copyToClipboard);

/////////////////////////////Funcionalidad para modo oscuro//////////////////////////

// Obtener el interruptor del modo oscuro
var darkModeToggle = document.getElementById("dark-mode-toggle");

// Agregar un evento de escucha al interruptor
darkModeToggle.addEventListener("change", function () {
  // Obtener el elemento <body>
  var body = document.body;

  // Alternar la clase 'dark-mode' en el elemento <body>
  body.classList.toggle("dark-mode");
  // Almacenar el estado del modo oscuro en el almacenamiento local
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});
// Verificar el estado almacenado del modo oscuro al cargar la página
window.addEventListener("load", function () {
  var darkMode = localStorage.getItem("darkMode");

  // Si el modo oscuro está habilitado, activarlo
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
// Event listener para el interruptor de modo oscuro
var darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("change", toggleDarkMode);
