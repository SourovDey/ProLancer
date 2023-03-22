function menuShow(){
    let threebar = document.querySelector(".mbol-3dot")
    let menu = document.querySelector(".mobile-menu")
    let overlay = document.querySelector(".overlay-on-mobile-menu")

    threebar.classList.add("three-bar-hide")
    menu.classList.add("menu-show")
    overlay.classList.add("overlay-show")

    
}

function menuHide(){
    let threebar = document.querySelector(".mbol-3dot")
    let menu = document.querySelector(".mobile-menu")
    let overlay = document.querySelector(".overlay-on-mobile-menu")

    threebar.classList.remove("three-bar-hide")
    menu.classList.remove("menu-show")
    overlay.classList.remove("overlay-show")
    
}

