/* =====================================================
   EVENTORA - SCRIPT.JS
   JavaScript + ES6 + jQuery
===================================================== */


// =====================================================
// EVENT DATA - ES6 ARRAY OF OBJECTS
// =====================================================

const events = [
    {
        name: "Tech Summit 2026",
        category: "Technology",
        date: "October 12, 2026",
        location: "Chennai",
        seats: 44
    },
    {
        name: "AI Innovation Workshop",
        category: "Workshop",
        date: "October 18, 2026",
        location: "Chennai",
        seats: 28
    },
    {
        name: "Cultural Fest 2026",
        category: "Cultural",
        date: "November 05, 2026",
        location: "Chennai",
        seats: 120
    }
];


// =====================================================
// DOCUMENT READY
// jQuery
// =====================================================

$(document).ready(function () {


    // =================================================
    // NAVBAR SCROLL EFFECT
    // =================================================

    $(window).on("scroll", function () {

        const scrollPosition = $(window).scrollTop();

        if (scrollPosition > 50) {

            $("#mainNavbar").addClass("scrolled");

        } else {

            $("#mainNavbar").removeClass("scrolled");

        }

    });


    // =================================================
    // NAVBAR ACTIVE LINK
    // ES6
    // =================================================

    const currentPage = $("body").data("page");

    $(".nav-link").each(function () {

        const linkPage = $(this).data("page");

        if (linkPage === currentPage) {

            $(".nav-link").removeClass("active");

            $(this).addClass("active");

        }

    });


    // =================================================
    // SMOOTH SCROLLING
    // jQuery
    // =================================================

    $('a[href^="#"]').on("click", function (event) {

        const target = $(this).attr("href");

        if (target !== "#") {

            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top - 80
                },
                700
            );

        }

    });


    // =================================================
    // BUTTON HOVER ANIMATION
    // jQuery
    // =================================================

    $(".primary-btn, .outline-btn, .cta-button, .nav-button")
        .on("mouseenter", function () {

            $(this).css("transform", "translateY(-3px)");

        })
        .on("mouseleave", function () {

            $(this).css("transform", "translateY(0)");

        });


    // =================================================
    // EVENT CARD HOVER
    // jQuery
    // =================================================

    $(".feature-card, .small-event-card").on(
        "mouseenter",
        function () {

            $(this).find("i").first().css(
                "transform",
                "scale(1.1)"
            );

        }
    );

    $(".feature-card, .small-event-card").on(
        "mouseleave",
        function () {

            $(this).find("i").first().css(
                "transform",
                "scale(1)"
            );

        }
    );


    // =================================================
    // HERO CARD ANIMATION
    // ES6 ARROW FUNCTION
    // =================================================

    const animateHeroCard = () => {

        $(".hero-event-card").animate(
            {
                opacity: 1
            },
            800
        );

    };

    animateHeroCard();


    // =================================================
    // STATS COUNTER ANIMATION
    // =================================================

    $(".stat-box strong").each(function () {

        const element = $(this);
        const originalText = element.text();

        let number = parseFloat(
            originalText.replace(/[^0-9.]/g, "")
        );

        if (isNaN(number)) {
            return;
        }

        let suffix = "";

        if (originalText.includes("K")) {
            suffix = "K+";
        } else if (originalText.includes("%")) {
            suffix = "%";
        } else if (originalText.includes("+")) {
            suffix = "+";
        }

        let currentNumber = 0;

        const increment = number / 40;

        const counter = setInterval(() => {

            currentNumber += increment;

            if (currentNumber >= number) {

                currentNumber = number;

                clearInterval(counter);

            }

            let displayNumber =
                currentNumber.toFixed(
                    number % 1 === 0 ? 0 : 1
                );

            element.text(displayNumber + suffix);

        }, 35);

    });


    // =================================================
    // REGISTER BUTTONS
    // EVENT HANDLING
    // =================================================

    $(".event-card-btn").on("click", function (event) {

        event.preventDefault();

        const selectedEvent = events[0];

        localStorage.setItem(
            "selectedEvent",
            JSON.stringify(selectedEvent)
        );

        alert(
            `You selected ${selectedEvent.name}.\n\nRegistration page will be opened.`
        );

    });


    // =================================================
    // FEATURE CARD CLICK
    // =================================================

    $(".feature-card").on("click", function () {

        const title = $(this).find("h3").text();

        console.log(
            `Eventora Feature Selected: ${title}`
        );

    });


    // =================================================
    // KEYBOARD EVENT
    // Demonstration of Event Handling
    // =================================================

    $(document).on("keydown", function (event) {

        // Press "/" to focus the search box
        if (event.key === "/") {

            const searchBox = $("#eventSearch");

            if (searchBox.length) {

                event.preventDefault();

                searchBox.focus();

            }

        }

    });


    // =================================================
    // WINDOW LOAD EVENT
    // =================================================

    $(window).on("load", function () {

        $(".hero-content").hide().fadeIn(1000);

    });


    // =================================================
    // CONSOLE MESSAGE
    // =================================================

    console.log(
        "Eventora loaded successfully 🚀"
    );

    console.log(
        `Total Events: ${events.length}`
    );

});