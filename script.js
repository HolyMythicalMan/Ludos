function viewGames() {
    window.location.href = './games/';
}

function selectMirror() {
    window.location.href = './mirror-links/';
}

// Social Links

function openTravesty() {
    alert("If you have not made an account yet, please register and wait for your email. (Emails are not automatically sent; be patient.)");
    alert("If you do have an account, you can use the code 'HihZIYHe' to join the server. (Press the + button on the main page when signed into Travesty.)");
    
    var travestyLink = "https://travesty.chat/";
    var travestyPopup = window.open(travestyLink);

    if (!travestyPopup) {
        alert("Popup was blocked. Redirecting this page to Travesty's signup page.");
        window.location.href = travestyLink;
    }
}

function openGithub() {
    var githubLink = "https://github.com/HolyMythicalMan/Ludos";
    var githubPopup = window.open(githubLink);

    if (!githubPopup) {
        alert("Popup was blocked. Redirecting this page to the GitHub page.");
        window.location.href = githubLink;
    }
}

function openYoutube() {
    var youtubeLink = "https://www.youtube.com/channel/UC4Q8wDUTgA1aXQM0D-fi0YQ/";
    var youtubePopup = window.open(youtubeLink);

    if (!youtubePopup) {
        alert("Popup was blocked. Redirecting this page to the YouTube page.");
        window.location.href = youtubeLink;
    }
}

function openRumble() {
    var rumbleLink = "https://rumble.com/user/HolyMythicalMan/";
    var rumblePopup = window.open(rumbleLink);

    if (!rumblePopup) {
        alert("Popup was blocked. Redirecting this page to the Rumble page.");
        window.location.href = rumbleLink;
    }
}

// Embed (this is pointless now)

/*
window.addEventListener("load", () => {
	new ServerEmbed(document.getElementById("embed"), "35%").ping("wss://mc.theludos.com", "Myth's EagMP" , "true" , "" , "hideCracked");
});
*/