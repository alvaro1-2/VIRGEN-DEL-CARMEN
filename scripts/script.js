// scripts/script.js
function toggleMapOptions() {
    const mapOptions = document.getElementById('mapOptions');
    if (mapOptions.style.display === 'none' || mapOptions.style.display === '') {
        mapOptions.style.display = 'flex';
        window.scrollTo(0, document.body.scrollHeight);
    } else {
        mapOptions.style.display = 'none';
    }
}

// Mensajes para mostrar
const messages = [
    "¡Bienvenidos a la Festividad de la Virgen del Carmen en Paucartambo! Esta celebración es una de las más importantes y tradicionales de la región.",
    "Disfruta de las celebraciones, danzas y actividades culturales. Cada año, miles de personas se reúnen para rendir homenaje a la Virgen.",
    "Únete a las procesiones y eventos religiosos durante la festividad. Es una oportunidad única para experimentar la fe y devoción de nuestra comunidad.",
    "Celebra con nosotros esta tradición llena de fe y devoción. Las calles de Paucartambo se llenan de color, música y alegría.",
    "Descubre la historia, cultura y gastronomía de Paucartambo. Esta festividad es también una ocasión para degustar platos típicos y conocer nuestras costumbres."
];

let messageIndex = 0;
const messageElement = document.getElementById('message');
const buttonsElement = document.querySelector('.buttons');

function typeMessage(message, callback) {
    let index = 0;
    function type() {
        if (index < message.length) {
            messageElement.textContent += message[index++];
            setTimeout(type, 50);
        } else {
            setTimeout(callback, 4000); // Esperar 4 segundos después de escribir el mensaje
        }
    }
    type();
}

function deleteMessage(callback) {
    let length = messageElement.textContent.length;
    function del() {
        if (length > 0) {
            messageElement.textContent = messageElement.textContent.slice(0, --length);
            setTimeout(del, 5); // Aumentar la velocidad de borrado
        } else {
            callback();
        }
    }
    del();
}

function cycleMessages() {
    typeMessage(messages[messageIndex], () => {
        deleteMessage(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            cycleMessages();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cycleMessages();
});
