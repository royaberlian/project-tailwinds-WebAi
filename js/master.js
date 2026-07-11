AOS.init({
  duration: 800,
  once: false,
});


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



// timer
const timers = document.querySelectorAll(".countdown");

let day = 3;
let hour = 23;
let minute = 38;
let second = 40;

setInterval(() => {
    second--;

    if (second < 0) {
        second = 59;
        minute--;
    }

    if (minute < 0) {
        minute = 59;
        hour--;
    }

    if (hour < 0) {
        hour = 23;
        day--;
    }

    timers.forEach(timer => {
        timer.innerHTML = `${day} : ${hour} : ${minute} : ${second}`;
    });

}, 1000);

