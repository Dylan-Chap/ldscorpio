console.log("carrousel chargé");
const boutonSuivant = document.getElementById("suivant");
const boutonPrecedent = document.getElementById("precedent");
const carousel = document.querySelector(".carousel");
boutonSuivant.addEventListener("click", function () {
    const lien  = carousel.querySelector("a");
    carousel.insertBefore(lien, boutonSuivant);
    carousel.querySelector(".principale").classList.remove("principale");
    carousel.querySelectorAll("a img")[1].classList.add("principale");
});

boutonPrecedent.addEventListener("click", function () {
    const lien  = carousel.querySelectorAll("a")[2];
    carousel.insertBefore(lien, carousel.querySelector("a"));
    carousel.querySelector(".principale").classList.remove("principale");
    carousel.querySelectorAll("a img")[1].classList.add("principale");
});
