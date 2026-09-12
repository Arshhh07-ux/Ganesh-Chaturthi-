/* =========================================================
   GANESH CHATURTHI PREMIUM WEBSITE
   script.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const loader = document.getElementById("loader");
    const navbar = document.getElementById("navbar");

    const enterCelebration = document.getElementById("enterCelebration");
    const blessingsButton = document.getElementById("blessingsButton");

    const flowerButton = document.getElementById("flowerButton");
    const confettiButton = document.getElementById("confettiButton");
    const blessingPopupButton =
        document.getElementById("blessingPopupButton");

    const finalCelebrateButton =
        document.getElementById("finalCelebrateButton");

    const petalsContainer =
        document.getElementById("petals-container");

    const popup =
        document.getElementById("blessingPopup");

    const closePopup =
        document.getElementById("closePopup");

    const popupCelebrate =
        document.getElementById("popupCelebrate");

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");

    const musicButton =
        document.getElementById("musicButton");

    const devotionalAudio =
        document.getElementById("devotionalAudio");

    const year =
        document.getElementById("year");

    const canvas =
        document.getElementById("particleCanvas");


    /* =====================================================
       YEAR
    ===================================================== */

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================================
       LOADER
    ===================================================== */

    function hideLoader() {

        if (!loader) return;

        setTimeout(() => {
            loader.classList.add("hidden");
        }, 1300);
    }

    hideLoader();


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    function scrollToSection(id) {

        const section = document.getElementById(id);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }


    /* =====================================================
       TOAST
    ===================================================== */

    let toastTimer;

    function showToast(message) {

        if (!toast || !toastMessage) return;

        toastMessage.textContent = message;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }


    /* =====================================================
       ENTER CELEBRATION
    ===================================================== */

    if (enterCelebration) {

        enterCelebration.addEventListener("click", () => {

            scrollToSection("celebration");

            createPetalShower(18);

            setTimeout(() => {
                createConfetti(35);
            }, 400);

            showToast("🙏 Ganpati Bappa Morya! ❤️");
        });
    }


    /* =====================================================
       BLESSINGS BUTTON
    ===================================================== */

    if (blessingsButton) {

        blessingsButton.addEventListener("click", () => {

            scrollToSection("blessings");

            showToast("✨ Bappa ki blessings aapke saath rahein!");
        });
    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =====================================================
       PETAL SHOWER
    ===================================================== */

    function createPetalShower(amount = 25) {

        if (!petalsContainer) return;

        for (let i = 0; i < amount; i++) {

            const petal = document.createElement("div");

            petal.className = "petal";

            const size =
                Math.random() * 14 + 8;

            const left =
                Math.random() * 100;

            const duration =
                Math.random() * 4 + 5;

            const delay =
                Math.random() * 2;

            const drift =
                (Math.random() * 160) - 80;

            petal.style.width = `${size}px`;

            petal.style.height = `${size * 1.45}px`;

            petal.style.left = `${left}%`;

            petal.style.animationDuration =
                `${duration}s`;

            petal.style.animationDelay =
                `${delay}s`;

            petal.style.setProperty(
                "--drift",
                `${drift}px`
            );

            petalsContainer.appendChild(petal);

            setTimeout(() => {

                if (petal.parentNode) {
                    petal.remove();
                }

            }, (duration + delay) * 1000 + 500);
        }
    }


    /* =====================================================
       FLOWER BUTTON
    ===================================================== */

    if (flowerButton) {

        flowerButton.addEventListener("click", () => {

            createPetalShower(45);

            showToast("🌸 Bappa ke charno mein pushp arpan!");
        });
    }


    /* =====================================================
       CONFETTI
    ===================================================== */

    function createConfetti(amount = 50) {

        const container =
            document.body;

        for (let i = 0; i < amount; i++) {

            const piece =
                document.createElement("div");

            piece.className =
                "confetti-piece";

            const left =
                Math.random() * 100;

            const size =
                Math.random() * 7 + 5;

            const duration =
                Math.random() * 2.5 + 3;

            const delay =
                Math.random() * 1.5;

            piece.style.left =
                `${left}%`;

            piece.style.width =
                `${size}px`;

            piece.style.height =
                `${size * 1.8}px`;

            piece.style.animationDuration =
                `${duration}s`;

            piece.style.animationDelay =
                `${delay}s`;

            piece.style.transform =
                `rotate(${Math.random() * 360}deg)`;

            container.appendChild(piece);

            setTimeout(() => {

                if (piece.parentNode) {
                    piece.remove();
                }

            }, (duration + delay) * 1000 + 500);
        }
    }


    /* =====================================================
       CONFETTI BUTTON
    ===================================================== */

    if (confettiButton) {

        confettiButton.addEventListener("click", () => {

            createConfetti(80);

            showToast("🎉 Ganpati celebration begins!");
        });
    }


    /* =====================================================
       POPUP OPEN
    ===================================================== */

    function openBlessingPopup() {

        if (!popup) return;

        popup.classList.add("active");

        popup.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    }


    /* =====================================================
       POPUP CLOSE
    ===================================================== */

    function closeBlessingPopup() {

        if (!popup) return;

        popup.classList.remove("active");

        popup.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";
    }


    /* =====================================================
       POPUP BUTTON
    ===================================================== */

    if (blessingPopupButton) {

        blessingPopupButton.addEventListener(
            "click",
            openBlessingPopup
        );
    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (closePopup) {

        closePopup.addEventListener(
            "click",
            closeBlessingPopup
        );
    }


    /* =====================================================
       CLICK OUTSIDE POPUP
    ===================================================== */

    if (popup) {

        popup.addEventListener("click", (event) => {

            if (event.target === popup) {
                closeBlessingPopup();
            }
        });
    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeBlessingPopup();
        }
    });


    /* =====================================================
       POPUP CELEBRATE
    ===================================================== */

    if (popupCelebrate) {

        popupCelebrate.addEventListener("click", () => {

            closeBlessingPopup();

            createPetalShower(30);

            setTimeout(() => {
                createConfetti(70);
            }, 300);

            showToast(
                "🙏 Ganpati Bappa Morya! Sukh Samriddhi aaye!"
            );
        });
    }


    /* =====================================================
       FINAL CELEBRATION
    ===================================================== */

    if (finalCelebrateButton) {

        finalCelebrateButton.addEventListener(
            "click",
            () => {

                createPetalShower(55);

                setTimeout(() => {
                    createConfetti(100);
                }, 300);

                showToast(
                    "❤️ Ganpati Bappa Morya! ❤️"
                );

                finalCelebrateButton.classList.add(
                    "celebrate-click"
                );

                setTimeout(() => {

                    finalCelebrateButton.classList.remove(
                        "celebrate-click"
                    );

                }, 700);
            }
        );
    }


    /* =====================================================
       MUSIC BUTTON
    ===================================================== */

/* MUSIC BUTTON */

if (musicButton && devotionalAudio) {

    musicButton.addEventListener("click", function () {

        if (devotionalAudio.paused) {

            devotionalAudio.play()
                .then(() => {

                    musicButton.classList.add("playing");

                    showToast("🎵 Ganpati music playing...");

                })
                .catch((error) => {

                    console.log("Audio Error:", error);

                    showToast("❌ Song load nahi ho raha");

                });

        } else {

            devotionalAudio.pause();

            musicButton.classList.remove("playing");

            showToast("🔇 Music paused");

        }

    });

}
    /* =====================================================
       PARTICLE CANVAS
    ===================================================== */

    if (canvas) {

        const ctx =
            canvas.getContext("2d");

        let particles = [];

        let width = 0;
        let height = 0;


        /* -----------------------------------------------
           RESIZE
        ------------------------------------------------ */

        function resizeCanvas() {

            width =
                window.innerWidth;

            height =
                window.innerHeight;

            canvas.width =
                width * window.devicePixelRatio;

            canvas.height =
                height * window.devicePixelRatio;

            canvas.style.width =
                `${width}px`;

            canvas.style.height =
                `${height}px`;

            ctx.setTransform(
                window.devicePixelRatio,
                0,
                0,
                window.devicePixelRatio,
                0,
                0
            );
        }


        /* -----------------------------------------------
           PARTICLE
        ------------------------------------------------ */

        class Particle {

            constructor() {

                this.x =
                    Math.random() * width;

                this.y =
                    Math.random() * height;

                this.radius =
                    Math.random() * 1.8 + 0.4;

                this.speedX =
                    (Math.random() - 0.5) * 0.35;

                this.speedY =
                    (Math.random() - 0.5) * 0.35;

                this.alpha =
                    Math.random() * 0.6 + 0.2;
            }


            update() {

                this.x += this.speedX;

                this.y += this.speedY;


                if (this.x < 0) {
                    this.x = width;
                }

                if (this.x > width) {
                    this.x = 0;
                }

                if (this.y < 0) {
                    this.y = height;
                }

                if (this.y > height) {
                    this.y = 0;
                }
            }


            draw() {

                ctx.beginPath();

                ctx.arc(
                    this.x,
                    this.y,
                    this.radius,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    `rgba(255, 215, 120, ${this.alpha})`;

                ctx.fill();
            }
        }


        /* -----------------------------------------------
           CREATE PARTICLES
        ------------------------------------------------ */

        function createParticles() {

            particles = [];

            const amount =
                Math.min(
                    100,
                    Math.floor(
                        (width * height) / 14000
                    )
                );

            for (
                let i = 0;
                i < amount;
                i++
            ) {

                particles.push(
                    new Particle()
                );
            }
        }


        /* -----------------------------------------------
           ANIMATION
        ------------------------------------------------ */

        function animateParticles() {

            ctx.clearRect(
                0,
                0,
                width,
                height
            );

            particles.forEach(
                particle => {

                    particle.update();

                    particle.draw();

                }
            );

            requestAnimationFrame(
                animateParticles
            );
        }


        /* -----------------------------------------------
           INIT
        ------------------------------------------------ */

        resizeCanvas();

        createParticles();

        animateParticles();


        window.addEventListener(
            "resize",
            () => {

                resizeCanvas();

                createParticles();

            }
        );
    }


    /* =====================================================
       BUTTON PRESS EFFECT
    ===================================================== */

    const allButtons =
        document.querySelectorAll("button");

    allButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                button.classList.add(
                    "button-pressed"
                );

                setTimeout(() => {

                    button.classList.remove(
                        "button-pressed"
                    );

                }, 180);
            }
        );
    });


    /* =====================================================
       GANESHA IMAGE EFFECT
    ===================================================== */

    const ganeshaImage =
        document.getElementById("ganeshaImage");

    const ganeshaContainer =
        document.getElementById("ganeshaContainer");

    if (
        ganeshaImage &&
        ganeshaContainer
    ) {

        ganeshaImage.addEventListener(
            "mouseenter",
            () => {

                ganeshaContainer.classList.add(
                    "ganesha-hover"
                );
            }
        );

        ganeshaImage.addEventListener(
            "mouseleave",
            () => {

                ganeshaContainer.classList.remove(
                    "ganesha-hover"
                );
            }
        );
    }


    /* =====================================================
       BLESSING CARD INTERACTION
    ===================================================== */

    const blessingCards =
        document.querySelectorAll(
            ".blessing-card"
        );

    blessingCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                card.classList.add(
                    "card-active"
                );

                setTimeout(() => {

                    card.classList.remove(
                        "card-active"
                    );

                }, 500);

                showToast(
                    "✨ Bappa ki kripa bani rahe!"
                );
            }
        );
    });


    /* =====================================================
       RANDOM INITIAL PARTICLES / PETALS
    ===================================================== */

    setTimeout(() => {

        createPetalShower(8);

    }, 1800);


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "%c🙏 Ganpati Bappa Morya! 🙏",
        "font-size:20px;font-weight:bold;"
    );

    console.log(
        "Premium Ganesh Chaturthi Website Loaded Successfully."
    );

});
