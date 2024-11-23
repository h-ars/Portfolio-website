function toggleMenu(){
    const menu = document.querySelector(".hamNavLinks");
    const icon = document.querySelector("#hamNavI");
    menu.classList.toggle("open");
    menu.classList.toggle('hide');
    icon.classList.toggle("open");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
}


