let hamburger = document.getElementById("hamburger-menu");
let mainMenu = document.getElementById("main-menu");
let closeMenu = document.getElementById("close-menu");
console.log(hamburger);
console.log(mainMenu);
hamburger.addEventListener('click', ()=> {
    mainMenu.style.top = "0";
    mainMenu.style.right = "0";
    mainMenu.style.width = "100%";
});
closeMenu.addEventListener('click', () => {
    mainMenu.style.top = "0";
    mainMenu.style.right = "-100%";
    // mainMenu.style.width = "100%";
});