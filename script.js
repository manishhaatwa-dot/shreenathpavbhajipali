/* =========================================================
   SHREENATH PAV BHAJI & PULAAV
   DigiProfiles.in
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close Menu" : "Open Menu"
        );

    });


    /* Close menu after clicking a link */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );

        });

    });

}


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

};


/* Run immediately */

revealOnScroll();


/* Run while scrolling */

window.addEventListener(
    "scroll",
    revealOnScroll,
    { passive: true }
);


/* =========================================================
   SMOOTH INTERNAL LINKS
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }


        event.preventDefault();


        const header =
            document.querySelector(".site-header");

        const headerHeight =
            header ? header.offsetHeight : 0;


        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;


        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   HEADER SHADOW ON SCROLL
   ========================================================= */

const header =
    document.querySelector(".site-header");


const updateHeader =
    () => {

        if (!header) {
            return;
        }


        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 8px 25px rgba(70, 25, 20, 0.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    };


updateHeader();


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


/* =========================================================
   IMAGE LOAD EFFECT
   ========================================================= */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    if (image.complete) {

        image.classList.add("image-loaded");

    } else {

        image.addEventListener(
            "load",
            () => {

                image.classList.add(
                    "image-loaded"
                );

            },
            { once: true }
        );

    }

});


/* =========================================================
   LOCATION MAP LINK
   ========================================================= */

const locationMapLink =
    document.getElementById(
        "locationMapLink"
    );


if (locationMapLink) {

    locationMapLink.addEventListener(
        "click",
        () => {

            /* Google Maps link is already
               present in index.html */

        }
    );

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );


yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});


/* =========================================================
   PAGE READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

        revealOnScroll();

    }
);