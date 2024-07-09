// scripts/script.js
function toggleMapOptions() {
    const mapOptions = document.getElementById('mapOptions');
    if (mapOptions.style.display === 'none' || mapOptions.style.display === '') {
        mapOptions.style.display = 'flex'; // Cambiado a 'flex' para la correcta visualización
    } else {
        mapOptions.style.display = 'none';
    }
}
