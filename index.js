var btn = document.querySelector("button");
var input = document.querySelector("input");
var alert = document.querySelector(".alert");
var clientWidth = document.documentElement.clientWidth;
var content = document.querySelector(".content");
var logo = document.querySelector(".logo");
var hero = document.querySelector("#hero-img");
var main = document.querySelector(".main");
//add eventlistener for button when it is clicked
btn.addEventListener("click", function(){
    btn.classList.add("btn-clicked");
    input.classList.add("input-clicked");
    alert.classList.remove("hidden");
    input.classList.add("error");
});
//change order of elements when width of the screen change
if (clientWidth < 375 || clientWidth === 375){
    content.removeChild(content.firstElementChild);
    hero.setAttribute("src", "images/hero-mobile.jpg");
    main.prepend(logo);
};