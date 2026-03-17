const menu = document.querySelector(".menu")
const navLinks = document.querySelector(".nav-links")

menu.addEventListener("click", () => {
navLinks.classList.toggle("show")
})

var typed = new Typed("#typing",{
strings:[
"Data Science Enthusiast",
"Python Developer",
"MCA Student",
"Reasearch Analyst",
"Machine Learning Explorer"
],
typeSpeed:60,
backSpeed:40,
loop:true
})