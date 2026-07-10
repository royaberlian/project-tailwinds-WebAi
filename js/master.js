// nav click
const items = document.querySelectorAll(".menu>li")
items.forEach(val => {
    val.addEventListener("click", () => {

        items.forEach(i => {
            i.classList.remove("is-active")
        })
        val.classList.add("is-active")
    })
})
// nav scroll
const navbar = document.querySelector("#navbar")
window.addEventListener("scroll", () => {
    navbar.classList.toggle("navbar-sticky", window.scrollY > 20)
})