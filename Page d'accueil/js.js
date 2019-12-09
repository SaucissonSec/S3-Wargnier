// Fonction pour révéler le Dropdown sur clic
function onClick() {
    document.getElementById("dropdown").classList.toggle("show");
}
// Fonction permettant de fermer le menu sur un clic ailleurs
// window.onClick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// Fonction: Apparition de la Side Nav
function openNav() {
    document.getElementById("SideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
// Fonction: Disparition de la Side Nav
function closeNav() {
    document.getElementById("SideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } 

// Fonction: Cacher la Top Nav en cas de scroll, puis la faire réapparaître
// var oldScrollpos = window.pageYOffset;
//   window.onscroll = function() {
//     var ScrollPos = window.pageYOffset;
//     if (oldScrollpos > ScrollPos) {
//       document.getElementById("topnav").style.top = "0";
//     } else {
//       document.getElementById("topnav").style.top = "-50px";
//     }
//     oldScrollpos = ScrollPos;
//   } 