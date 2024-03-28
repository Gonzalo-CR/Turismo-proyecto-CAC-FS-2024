document.getElementById('explorerItem').addEventListener('click', function() {
    event.preventDefault();
    var form = document.getElementById('paneldesplegable');
    if (form.style.display === "none") {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
});

// window.addEventListener('scroll', function() {
//     document.getElementById('formHorizontal').style.display = "none";
// });

