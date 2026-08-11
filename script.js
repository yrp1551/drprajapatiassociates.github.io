document.addEventListener("DOMContentLoaded", () => {

    const elements = [
        ".eyebrow",
        ".hero-content h1",
        ".hero-content > p",
        ".hero-buttons",
        ".stats",
        ".ca-photo",
        ".ca-name",
        ".service-tag"
    ];

    elements.forEach((selector, index) => {

        const items = document.querySelectorAll(selector);

        items.forEach(item => {

            item.style.opacity = "0";
            item.style.transform = "translateY(25px)";

            setTimeout(() => {

                item.style.transition =
                    "opacity .7s ease, transform .7s ease";

                item.style.opacity = "1";
                item.style.transform = "translateY(0)";

            }, 150 + index * 120);

        });

    });

});
/* =========================================
   ABOUT SECTION ANIMATION
========================================= */

const aboutSection = document.querySelector(".about-section");

const aboutObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target
                    .querySelector(".about-visual")
                    .classList.add("show");

                entry.target
                    .querySelector(".about-content")
                    .classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}
/* =========================================
   SERVICES ANIMATION
========================================= */

const serviceSection =
    document.querySelector(".services-section");

const serviceCards =
    document.querySelectorAll(".service-card");

const serviceObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    serviceCards.forEach(
                        (card, index) => {

                            setTimeout(() => {

                                card.classList.add("show");

                            }, index * 120);

                        }
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );

if (serviceSection) {
    serviceObserver.observe(serviceSection);
}
/* =========================================
   CONTACT FORM → WHATSAPP
========================================= */
const phoneInput = document.getElementById("phone");

if (phoneInput) {
    phoneInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        const whatsappMessage =
`Hello D R PRAJAPATI & ASSOCIATES,

I would like to enquire about your CA services.

Name: ${name}
Mobile: ${phone}
Email: ${email}
Service Required: ${service}

Message:
${message}`;

        const whatsappNumber = "919067484771";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

}

// =========================================
// MOBILE MENU
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!mobileMenuBtn || !mobileMenu) return;

    // OPEN / CLOSE MENU
    mobileMenuBtn.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {
            mobileMenuBtn.innerHTML = "✕";
        } else {
            mobileMenuBtn.innerHTML = "☰";
        }

    });

    // CLOSE MENU WHEN CLICKING LINK
    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            mobileMenuBtn.innerHTML = "☰";

        });

    });

});
