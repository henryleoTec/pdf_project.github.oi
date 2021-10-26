const body = document.querySelector("body");
const main = document.querySelector("main.nav-model");
const mainlog = document.querySelector("main.log-model");
const mainlog1 = document.querySelector("main.log-model1");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");


body.addEventListener("click", function (e) {
    if (e.target.classList.contains("open-model")) {
        main.classList.toggle("active");
    }
    if (e.target.classList.contains("nav-model")) {
        main.classList.remove("active");
    }
    if (e.target.classList.contains("open-log-model")) {
        mainlog.classList.toggle("show-log");
    }
    if (e.target.classList.contains("close")) {
        mainlog.classList.remove("show-log");
    }
    if (e.target.classList.contains("log-model")) {
        mainlog.classList.remove("show-log");
    }
    
    if (e.target.classList.contains("open-sign-model")) {
        mainlog1.classList.toggle("show-log");
    }
    if (e.target.classList.contains("close")) {
        mainlog1.classList.remove("show-log");
    }
    if (e.target.classList.contains("log-model1")) {
        mainlog1.classList.remove("show-log");
    }
    if (e.target.classList.contains("btn-month")) {
        text1.innerHTML="USD 12 <span>/monthly</span>";
        text2.innerHTML="per user, billed monthly.";
        text3.innerHTML="USD 10<span>/monthly</span>";
        text4.innerHTML="per user, billed monthly";
    }
    if (e.target.classList.contains("btn-year")) {
        text1.innerHTML="USD 9 <span>/monthly</span>";
        text2.innerHTML="per user, billed annually Billed as one payment of USD 108";
        text3.innerHTML="USD 7<span>/monthly</span>";
        text4.innerHTML="per user, billed annually Billed as one payment of USD 84";
    }
});