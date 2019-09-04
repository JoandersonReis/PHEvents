(function(win, doc){
    "use strict"

    let btn = doc.querySelector(".btn-menu");
    let menu = doc.querySelector(".menu")

    // Change class of menu
    function changeClassMenu() {
        if(menu.classList[1] == "show") {
            menu.classList.remove("show")
            menu.classList.add("hidden")
        } else {
            menu.classList.remove("hidden")
            menu.classList.add("show")
        }
    }

    btn.addEventListener("click", changeClassMenu)
})(window, document)