function toggleMenu (id) {
    console.log(id);
    var menu = document.getElementById(id);
    document.getElementById('buttonMenu').classList.toggle('close');
    menu.classList.toggle('visible');
}