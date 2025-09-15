function returnHome() {
    window.location.href = '../';
}

function openEaglercraft() {
    window.location.href = './eaglercraft/';
}

if (localStorage.getItem('theme') == 1) {
    document.querySelector('link[rel="stylesheet"]').href = 'style-legacy.css';
}
else if (localStorage.getItem('theme') == 2) {
    document.querySelector('link[rel="stylesheet"]').href = 'style-empty.css';
}
else {
    document.querySelector('link[rel="stylesheet"]').href = 'style.css';
}