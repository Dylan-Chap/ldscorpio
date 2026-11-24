const banner = document.getElementById("cookie-banner");
const acceptButton = document.getElementById("accept-cookies");
const refuseButton = document.getElementById("refuse-cookies");

if (localStorage.getItem("cookieConsent")) {
    banner.style.display = "none";
}

if (localStorage.getItem("cookieConsent") === "accepted") {
    loadVideos();
}

acceptButton.addEventListener("click", function (){
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    loadVideos();
});

refuseButton.addEventListener("click", function(){
    localStorage.setItem("cookieConsent", "refused");
    banner.style.display = "none";
});

function loadVideos() {
    document.querySelectorAll("iframe[data-src]").forEach(function (iframe) {
        iframe.src = iframe.dataset.src;
    });
}
