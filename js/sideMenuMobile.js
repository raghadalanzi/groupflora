// sideMenuMobile.js
document.getElementById('menu-icon').addEventListener('click', function () {
  var sideMenu = document.getElementById('sideMenu');

  if (sideMenu.style.right === '-400px') {
    sideMenu.style.right = '0px';
    this.style.color = "white";
  } else {
    sideMenu.style.right = '-400px';
    this.style.color = "initial";
  }
});