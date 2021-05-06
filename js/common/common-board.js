// dropdown menu를 위한 구현
window.addEventListener("load", function () {

    var main = document.querySelector("main");

    main.addEventListener("click", function (e) {

        if (!(main.querySelector(".dropdown.selected") == null)) {
            var dropdown = main.querySelector(".dropdown.selected");
            var menu = dropdown.querySelector(".menu");
            menu.classList.toggle("d-none");
            dropdown.classList.toggle("selected");
            return;
        }

        if (!(e.target.classList.contains("trigger") || e.target.classList.contains("dropdown")))
            return;
        else if (e.target.classList.contains("trigger"))
            var dropdown = e.target.parentElement.parentElement;
        else if (e.target.classList.contains("dropdown"))
            var dropdown = e.target;

        var menu = dropdown.querySelector(".menu");
        dropdown.classList.toggle("selected");
        menu.classList.toggle("d-none");
    });
});