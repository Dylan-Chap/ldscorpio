const banner = document.getElementById("cookie-banner");
const acceptButton = document.getElementById("accept-cookies");
const refuseButton = document.getElementById("refuse-cookies");

if (localStorage.getItem("cookieConsent")) {
    banner.style.display = "none";
}

if (localStorage.getItem("cookieConsent") === "accepted") {
    loadVideos();
    loadTwitch();
}

acceptButton.addEventListener("click", function (){
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    loadVideos();
    loadTwitch();
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

function loadTwitch () {
    if (!document.getElementById("twitch-embed")) return;
    const script = document.createElement("script");
    script.src = "https://player.twitch.tv/js/embed/v1.js";
    script.onload = function () {
        new Twitch.Player("twitch-embed", {
            channel: "ldscorpio",
            width: "100%",
            height: 480,
            parent:
                ["localhost", "127.0.0.1",
                "ldscorpio.onrender.com"]
        });
    };
    document.body.appendChild(script);
}
