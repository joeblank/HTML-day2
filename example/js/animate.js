
var menu = document.querySelector(".menu-slide"),
    el = document.getElementById('ham'),
    close = document.getElementById('close')

el.addEventListener("click", function() {
    //menu.classList.add("animate");
    menu.className += " animate";

});

close.addEventListener("click", function() {
    var classToRemove = menu.classList[1]
    menu.classList.remove(classToRemove)
})
