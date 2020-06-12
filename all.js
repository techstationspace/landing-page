function toggleMenu(id) {
  console.log(id);

  var menu = document.getElementById(id);
  document.getElementById('buttonMenu').classList.toggle('closed');
  document.getElementById('voiceMenu').classList.toggle('invisible');
  menu.classList.toggle('visible');

}