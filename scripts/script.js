/*
Proyecto Festividad de la Virgen - Pagina Turistica de la Festividad de la Virgen del Carmen de Paucartambo(Lugares Turísticos, Cronograma de Actividades, etc.)
Derechos de Autor (C) 2024 Alvaro

Este programa es software libre: puedes redistribuirlo y/o modificarlo
bajo los términos de la Licencia Pública General de GNU publicada por
la Free Software Foundation, ya sea la versión 3 de la Licencia, o
(a tu elección) cualquier versión posterior.

Este programa se distribuye con la esperanza de que sea útil,
pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
COMERCIABILIDAD o APTITUD PARA UN PROPÓSITO PARTICULAR. Vea la
Licencia Pública General de GNU para más detalles.

Deberías haber recibido una copia de la Licencia Pública General de GNU
junto con este programa. Si no, vea <https://www.gnu.org/licenses/>.
*/
// scripts/script.js
function toggleMapOptions() {
    const mapOptions = document.getElementById('mapOptions');
    if (mapOptions.style.display === 'none' || mapOptions.style.display === '') {
        mapOptions.style.display = 'flex'; // Cambiado a 'flex' para la correcta visualización
    } else {
        mapOptions.style.display = 'none';
    }
}

// Animaciones de aparición para los elementos principales
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modern-fade-in').forEach((el, i) => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transition = 'opacity 1.2s';
        }, 200 + i * 200);
    });
    document.querySelectorAll('.modern-slide-in').forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateX(-40px)';
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateX(0)';
            el.style.transition = 'opacity 1.2s, transform 1.2s';
        }, 400 + i * 200);
    });

    // Efecto de onda al hacer click en los botones principales
    document.querySelectorAll('.nav-btn, .map-buttons button').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const circle = document.createElement('span');
            circle.className = 'ripple';
            circle.style.left = (e.offsetX - 10) + 'px';
            circle.style.top = (e.offsetY - 10) + 'px';
            this.appendChild(circle);
            setTimeout(() => circle.remove(), 600);
        });
    });
});
