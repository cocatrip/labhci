function dropdownmenu() {
  document.getElementById("drop-down").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches(".dropdownbutton")) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var opendropmenu = dropdowns[i];
      if (opendropmenu.classList.contains('show')) {
        opendropmenu.classList.remove('show');
      }
    }
  }
}
