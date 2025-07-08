// scripts/toggle.js
function toggleDetails(id) {
    document.querySelectorAll('.details').forEach(function(el) {
        if (el.id === id) {
            el.classList.toggle('open');
        } else {
            el.classList.remove('open');
        }
    });
}
