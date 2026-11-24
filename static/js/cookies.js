const banner = document.getElementById("cookie-banner");
const acceptButton = document.getElementById("accept-cookies");
const refuseButton = document.getElementById("refuse-cookies");

if (localStorage.getItem("cookieConsent")) {
    banner.style.display = "none";
}

acceptButton.addEventListener("click", function (){
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
});

refuseButton.addEventListener("click", function(){
    localStorage.setItem("cookieConsent", "refused");
    banner.style.display = "none";
});
