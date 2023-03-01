/* Cuando el usuario hace click en el botón 'Menú',
alternar entre ocultar y mostrar el contenido 'dropdown' */
function clickMenu() {
  document.getElementById("miDropdown").classList.toggle("show");
}

// Cerrar el 'dropdown' si el usuario hace click afuera del mismo
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var miDropdown = document.getElementById("miDropdown");
    if (miDropdown.classList.contains('show')) {
      miDropdown.classList.remove('show');
    }
  }
}