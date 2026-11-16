// =====================================
// MY PORTFOLIO JAVASCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", function () {


    // =====================================
    // TYPING EFFECT
    // =====================================

    const typingText = document.querySelector(".typing-text");

    const words = [
        "WEB DEVELOPER",
        "PROGRAMMER",
        "CSE STUDENT"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typingEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingText.textContent =
                currentWord.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentWord.length) {

                deleting = true;

                setTimeout(typingEffect, 1500);
                return;
            }

        } else {

            typingText.textContent =
                currentWord.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

            }

        }

        setTimeout(
            typingEffect,
            deleting ? 80 : 120
        );
    }


    if (typingText) {
        typingEffect();
    }


    // =====================================
    // NAVIGATION
    // =====================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    // =====================================
    // HIRE ME BUTTON
    // =====================================

    const hireButton =
        document.querySelector(".hire-btn");

    if (hireButton) {

        hireButton.addEventListener("click", function () {

            const contact =
                document.querySelector("#contact");

            if (contact) {

                contact.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    // =====================================
    // CONTACT FORM
    // =====================================

    const contactForm =
        document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const name =
                    document.querySelector("#name").value;

                alert(
                    "Thank you " +
                    name +
                    "! Your message has been received."
                );

                contactForm.reset();

            }
        );

    }


    // =====================================
    // ACTIVE NAVBAR ON SCROLL
    // =====================================

    const sections =
        document.querySelectorAll("section");

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {
                link.classList.add("active");
            }

        });

    });

});