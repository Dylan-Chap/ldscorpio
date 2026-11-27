console.log("carousel loaded");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const carousel = document.querySelector(".carousel");

nextButton.addEventListener("click", next);

previousButton.addEventListener("click", previous);

function next(){
    const link  = carousel.querySelector("a");
    carousel.insertBefore(link, nextButton);
    carousel.querySelector(".main").classList.remove("main");
    carousel.querySelectorAll("a img")[1].classList.add("main");
}

function previous() {
    const link  = carousel.querySelectorAll("a")[2];
    carousel.insertBefore(link, carousel.querySelector("a"));
    carousel.querySelector(".main").classList.remove("main");
    carousel.querySelectorAll("a img")[1].classList.add("main");
}

carousel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        if (link.querySelector("img").classList.contains("main")) {
            return;
        }
        event.preventDefault();
        if (link === carousel.querySelector("a")) {
            previous();
        } else {
            next();
        }
    });
});
