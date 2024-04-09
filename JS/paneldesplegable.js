var explorerItem = document.getElementById('explorerItem');
var smallexplorerItem = document.getElementById('smallexplorerItem');
var form = document.getElementById('paneldesplegable');

if (window.innerWidth <= 480) {
    form.style.display = "none";
} else {
    form.style.display = "flex";
}

function toggleFormDisplay(event) {
    event.preventDefault();
    if (form.style.display === "none") {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
}

explorerItem.addEventListener('click', toggleFormDisplay);
smallexplorerItem.addEventListener('click', toggleFormDisplay);
