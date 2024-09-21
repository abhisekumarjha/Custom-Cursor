const cursor = document.querySelector('#cursor');

window.addEventListener('mousemove', function (details) {
    cursor.style.left = details.x + "px";
    cursor.style.top = details.y + "px";
});
