
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toogleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toogleMenu);
closeMenuBtn.addEventListener("click", toogleMenu);


const menuLinks = document.querySelectorAll(`.menu a[href^="#"]`)

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)

        if (entry.isIntersecting) {
            menuLink.classList.add('actived');
        } else {
            menuLink.classList.remove('actived')
        }
    })
}, {rootMargin: '-50% 0px -50% 0px'})

menuLinks.forEach(menuLink => {
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
})

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    })
})
