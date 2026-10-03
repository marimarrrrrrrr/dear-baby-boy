// =====================================
// FECHA DE INICIO DE LA RELACIÓN
// =====================================

const relationshipDate = new Date(2026, 0, 4, 15, 20, 0);


// =====================================
// MOSTRAR FECHA
// =====================================

const dateText = document.getElementById("dateText");

if (dateText) {
    dateText.textContent = relationshipDate.toLocaleDateString("es-DO", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}


// =====================================
// CONTADOR
// =====================================

function updateCounter() {

    const now = new Date();

    const difference = Math.max(
        0,
        now.getTime() - relationshipDate.getTime()
    );

    const totalSeconds = Math.floor(difference / 1000);

    const seconds = totalSeconds % 60;

    const totalMinutes = Math.floor(totalSeconds / 60);

    const minutes = totalMinutes % 60;

    const totalHours = Math.floor(totalMinutes / 60);

    const hours = totalHours % 24;

    const days = Math.floor(totalHours / 24);


    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");


    if (daysElement) {
        daysElement.textContent = days.toLocaleString("es-DO");
    }

    if (hoursElement) {
        hoursElement.textContent = String(hours).padStart(2, "0");
    }

    if (minutesElement) {
        minutesElement.textContent = String(minutes).padStart(2, "0");
    }

    if (secondsElement) {
        secondsElement.textContent = String(seconds).padStart(2, "0");
    }
}


// Ejecutar inmediatamente
updateCounter();

// Actualizar cada segundo
setInterval(updateCounter, 1000);


// =====================================
// BOTÓN "ABRE LA SÚPER SORPRESA"
// =====================================

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", function () {

        const letter = document.querySelector(".letter");

        if (letter) {

            letter.scrollIntoView({
                behavior: "smooth"
            });

        }

        createHearts(12);

    });

}


// =====================================
// RAZONES
// =====================================

const reasonButtons = document.querySelectorAll(".reason");

const reasonMessage = document.getElementById("reasonMessage");


reasonButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        reasonButtons.forEach(function (b) {
            b.classList.remove("active");
        });


        button.classList.add("active");


        if (reasonMessage) {

            reasonMessage.textContent =
                button.dataset.text;

        }

    });

});


// =====================================
// MENSAJE FINAL
// =====================================

const loveBtn = document.getElementById("loveBtn");

if (loveBtn) {

    loveBtn.addEventListener("click", function () {

        const hiddenMessage =
            document.getElementById("hiddenMessage");


        if (hiddenMessage) {

            hiddenMessage.classList.add("show");

        }


        createHearts(30);

    });

}


// =====================================
// MÚSICA
// =====================================

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");


if (music && musicBtn) {

    musicBtn.addEventListener("click", async function () {

        try {

            if (music.paused) {

                await music.play();

                musicBtn.textContent = "❚❚";

            } else {

                music.pause();

                musicBtn.textContent = "♫";

            }

        } catch (error) {

            console.error("Error al reproducir la música:", error);

            alert(
                "No se pudo reproducir la canción. Revisa que music/cancion.mp3 exista y que el archivo sea MP3."
            );

        }

    });

}


// =====================================
// CREAR CORAZONES
// =====================================

function createHearts(amount = 5) {

    const heartsContainer =
        document.getElementById("hearts");


    if (!heartsContainer) {
        return;
    }


    for (let i = 0; i < amount; i++) {

        setTimeout(function () {

            const heart =
                document.createElement("div");


            heart.className = "heart";


            heart.textContent =
                Math.random() > 0.5
                    ? "♡"
                    : "♥";


            heart.style.left =
                Math.random() * 100 + "vw";


            heart.style.bottom = "-30px";


            heart.style.fontSize =
                12 + Math.random() * 25 + "px";


            heart.style.animationDuration =
                3 + Math.random() * 3 + "s";


            heartsContainer.appendChild(heart);


            setTimeout(function () {

                heart.remove();

            }, 7000);


        }, i * 100);

    }

}


// =====================================
// CORAZONES AUTOMÁTICOS
// =====================================

setInterval(function () {

    if (Math.random() > 0.45) {

        createHearts(1);

    }

}, 1800);