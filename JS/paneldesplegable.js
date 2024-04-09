var explorerItem = document.getElementById('explorerItem');
var smallexplorerItem = document.getElementById('smallexplorerItem');
var form = document.getElementById('paneldesplegable');

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
