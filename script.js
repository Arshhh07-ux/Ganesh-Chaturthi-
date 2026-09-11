/* =====================================================
   GANESH CHATURTHI PREMIUM WEBSITE
   SCRIPT.JS
===================================================== */

"use strict";


/* =====================================================
   1. DOM ELEMENTS
===================================================== */

const loader = document.getElementById("loader");
const musicButton = document.getElementById("musicButton");
const devotionalAudio = document.getElementById("devotionalAudio");

const enterCelebration = document.getElementById("enterCelebration");
const blessingsButton = document.getElementById("blessingsButton");

const flowerButton = document.getElementById("flowerButton");
const confettiButton = document.getElementById("confettiButton");
const blessingPopupButton =
    document.getElementById("blessingPopupButton");

const finalCelebrateButton =
    document.getElementById("finalCelebrateButton");

const popupCelebrate =
    document.getElementById("popupCelebrate");

const blessingPopup =
    document.getElementById("blessingPopup");

const closePopup =
    document.getElementById("closePopup");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const petalsContainer =
    document.getElementById("petals");

const canvas =
    document.getElementById("particleCanvas");

const yearElement =
    document.getElementById("year");


/* =====================================================
   2. PAGE LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (loader) {
            loader.classList.add("hidden");
        }

    }, 700);

});


/* =====================================================
   3. CURRENT YEAR
===================================================== */

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =====================================================
   4. SMOOTH SCROLL HELPER
===================================================== */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =====================================================
   5. TOAST MESSAGE
===================================================== */

let toastTimer = null;

function showToast(message) {

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}


/* =====================================================
   6. ENTER CELEBRATION BUTTON
===================================================== */

if (enterCelebration) {

    enterCelebration.addEventListener("click", () => {

        scrollToSection("celebration");

        createConfetti(80);

        createPetalShower(25);

        showToast(
            "🙏 Ganpati Bappa Morya! Welcome to the celebration!"
        );

    });

}


/* =====================================================
   7. BLESSINGS BUTTON
===================================================== */

if (blessingsButton) {

    blessingsButton.addEventListener("click", () => {

        scrollToSection("blessings");

        showToast(
            "✨ May Bappa bless you with wisdom, happiness and prosperity."
        );

    });

}


/* =====================================================
   8. FLOWER / PETAL SHOWER
===================================================== */

function createPetalShower(amount = 30) {

    if (!petalsContainer) return;

    const symbols = [
        "🌸",
        "🌺",
        "🌼",
        "🪷",
        "🌹",
        "✨"
    ];

    for (let i = 0; i < amount; i++) {

        const petal =
            document.createElement("span");

        petal.className = "falling-petal";

        petal.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.fontSize =
            (10 + Math.random() * 18) + "px";

        petal.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        petal.style.animationDelay =
            Math.random() * 2 + "s";

        petal.style.setProperty(
            "--drift",
            ((Math.random() - 0.5) * 180) + "px"
        );

        petalsContainer.appendChild(petal);

        setTimeout(() => {

            petal.remove();

        }, 10000);

    }
}


/* =====================================================
   9. FLOWER BUTTON
===================================================== */

if (flowerButton) {

    flowerButton.addEventListener("click", () => {

        createPetalShower(45);

        showToast(
            "🌸 Flowers of devotion are showering for Bappa!"
        );

    });

}


/* =====================================================
   10. CONFETTI SYSTEM
===================================================== */

function createConfetti(amount = 100) {

    const confettiColors = [
        "#ffd76a",
        "#ffb347",
        "#fff0b8",
        "#e86b28",
        "#ffffff"
    ];

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti-piece";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top =
            (-20 - Math.random() * 80) + "px";

        piece.style.width =
            (5 + Math.random() * 7) + "px";

        piece.style.height =
            (8 + Math.random() * 12) + "px";

        piece.style.background =
            confettiColors[
                Math.floor(
                    Math.random() *
                    confettiColors.length
                )
            ];

        piece.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 7000);

    }
}


/* =====================================================
   11. CONFETTI BUTTON
===================================================== */

if (confettiButton) {

    confettiButton.addEventListener("click", () => {

        createConfetti(150);

        showToast(
            "🎉 Ganpati Bappa Morya! Celebration begins!"
        );

    });

}


/* =====================================================
   12. BLESSING POPUP
===================================================== */

function openBlessingPopup() {

    if (!blessingPopup) return;

    blessingPopup.classList.add("active");

    document.body.classList.add("popup-open");

}

function closeBlessingPopup() {

    if (!blessingPopup) return;

    blessingPopup.classList.remove("active");

    document.body.classList.remove("popup-open");

}


/* =====================================================
   13. POPUP BUTTON
===================================================== */

if (blessingPopupButton) {

    blessingPopupButton.addEventListener(
        "click",
        openBlessingPopup
    );

}


if (closePopup) {

    closePopup.addEventListener(
        "click",
        closeBlessingPopup
    );

}


/* =====================================================
   14. CLICK OUTSIDE POPUP
===================================================== */

if (blessingPopup) {

    blessingPopup.addEventListener(
        "click",
        (event) => {

            if (
                event.target === blessingPopup
            ) {

                closeBlessingPopup();

            }

        }
    );

}


/* =====================================================
   15. ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeBlessingPopup();

        }

    }
);


/* =====================================================
   16. POPUP CELEBRATE
===================================================== */

if (popupCelebrate) {

    popupCelebrate.addEventListener(
        "click",
        () => {

            createConfetti(120);

            createPetalShower(35);

            closeBlessingPopup();

            showToast(
                "🙏 गणपति बप्पा मोरया! मंगल मूर्ति मोरया!"
            );

        }
    );

}


/* =====================================================
   17. FINAL CELEBRATION
===================================================== */

if (finalCelebrateButton) {

    finalCelebrateButton.addEventListener(
        "click",
        () => {

            createConfetti(200);

            createPetalShower(60);

            openBlessingPopup();

            showToast(
                "🪔 Bappa's blessings are always with you!"
            );

        }
    );

}


/* =====================================================
   18. NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    },
    { passive: true }
);


/* =====================================================
   19. ACTIVE NAVIGATION
===================================================== */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        }
    );

});


/* =====================================================
   20. PARTICLE CANVAS
===================================================== */

if (canvas) {

    const ctx =
        canvas.getContext("2d");

    let particles = [];

    let animationFrame;


    function resizeCanvas() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }


    window.addEventListener(
        "resize",
        resizeCanvas
    );

    resizeCanvas();


    function createParticle() {

        return {

            x:
                Math.random() *
                canvas.width,

            y:
                Math.random() *
                canvas.height,

            size:
                Math.random() * 2.2 + 0.4,

            speedX:
                (Math.random() - 0.5) * 0.25,

            speedY:
                (Math.random() - 0.5) * 0.25,

            opacity:
                Math.random() * 0.7 + 0.15,

            twinkle:
                Math.random() * 0.02 + 0.005

        };

    }


    function initParticles() {

        particles = [];

        const count =
            Math.min(
                120,
                Math.floor(
                    window.innerWidth / 9
                )
            );

        for (
            let i = 0;
            i < count;
            i++
        ) {

            particles.push(
                createParticle()
            );

        }

    }


    function drawParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        particles.forEach(particle => {

            particle.x +=
                particle.speedX;

            particle.y +=
                particle.speedY;


            if (particle.x < 0)
                particle.x =
                    canvas.width;

            if (particle.x > canvas.width)
                particle.x = 0;

            if (particle.y < 0)
                particle.y =
                    canvas.height;

            if (particle.y > canvas.height)
                particle.y = 0;


            particle.opacity +=
                particle.twinkle;


            if (
                particle.opacity >= 0.9 ||
                particle.opacity <= 0.1
            ) {

                particle.twinkle *= -1;

            }


            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(245,199,106,${particle.opacity})`;

            ctx.fill();

        });


        animationFrame =
            requestAnimationFrame(
                drawParticles
            );

    }


    initParticles();

    drawParticles();


    window.addEventListener(
        "resize",
        initParticles
    );

}


/* =====================================================
   21. MUSIC SYSTEM
===================================================== */

let musicPlaying = false;


/*
   IMPORTANT:
   Your HTML audio element currently has no song source.
   So this code safely handles the button.
*/

if (musicButton) {

    musicButton.addEventListener(
        "click",
        async () => {

            if (!devotionalAudio) {

                showToast(
                    "🎵 Add a devotional song to enable music."
                );

                return;

            }


            if (
                !devotionalAudio.src ||
                devotionalAudio.src ===
                window.location.href
            ) {

                showToast(
                    "🎵 Music is ready — add your devotional audio file first."
                );

                return;

            }


            try {

                if (musicPlaying) {

                    devotionalAudio.pause();

                    musicPlaying = false;

                    musicButton.classList.remove(
                        "playing"
                    );

                    showToast(
                        "🔇 Music paused"
                    );

                } else {

                    await devotionalAudio.play();

                    musicPlaying = true;

                    musicButton.classList.add(
                        "playing"
                    );

                    showToast(
                        "🎵 Devotional music playing"
                    );

                }

            } catch (error) {

                showToast(
                    "🎵 Tap again after adding a valid music file."
                );

            }

        }
    );

}


/* =====================================================
   22. AUDIO ENDED
===================================================== */

if (devotionalAudio) {

    devotionalAudio.addEventListener(
        "ended",
        () => {

            musicPlaying = false;

            if (musicButton) {

                musicButton.classList.remove(
                    "playing"
                );

            }

        }
    );

}


/* =====================================================
   23. RANDOM FLOATING PETALS
===================================================== */

function automaticPetals() {

    createPetalShower(2);

}

setInterval(
    automaticPetals,
    4500
);


/* =====================================================
   24. PREVENT BUTTON DOUBLE TAP
===================================================== */

document
    .querySelectorAll("button")
    .forEach(button => {

        button.addEventListener(
            "pointerdown",
            () => {

                button.style.transform =
                    "scale(0.97)";

            }
        );


        button.addEventListener(
            "pointerup",
            () => {

                setTimeout(() => {

                    button.style.transform = "";

                }, 100);

            }
        );


        button.addEventListener(
            "pointercancel",
            () => {

                button.style.transform = "";

            }
        );

    });


/* =====================================================
   25. INITIAL WELCOME EFFECT
===================================================== */

setTimeout(() => {

    createPetalShower(12);

}, 1000);


/* =====================================================
   26. CONSOLE
===================================================== */

console.log(
    "%c🙏 GANPATI BAPPA MORIYA 🙏",
    "font-size:20px;font-weight:bold;"
);

console.log(
    "%cPremium Ganesh Chaturthi Website Loaded",
    "font-size:14px;"
);
