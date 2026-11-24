console.log("carrousel chargé");
const boutonSuivant = document.getElementById("suivant");
const boutonPrecedent = document.getElementById("precedent");
const carousel = document.querySelector(".carousel");

boutonSuivant.addEventListener("click", suivant);

boutonPrecedent.addEventListener("click", precedent);

function suivant(){
    const lien  = carousel.querySelector("a");
    carousel.insertBefore(lien, boutonSuivant);
    carousel.querySelector(".principale").classList.remove("principale");
    carousel.querySelectorAll("a img")[1].classList.add("principale");
}

function precedent() {
    const lien  = carousel.querySelectorAll("a")[2];
    carousel.insertBefore(lien, carousel.querySelector("a"));
    carousel.querySelector(".principale").classList.remove("principale");
    carousel.querySelectorAll("a img")[1].classList.add("principale");
}

carousel.querySelectorAll("a").forEach(function (lien) {
    lien.addEventListener("click", function (event) {
        if (lien.querySelector("img").classList.contains("principale")) {
            return;
        }
        event.preventDefault();
        if (lien === carousel.querySelector("a")) {
            precedent();
        } else {
            suivant();
        }
    });
});
