
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");

    // Add a scroll event listener
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky"); // Add the class
        } else {
            header.classList.remove("sticky"); // Remove the class
        }
    });

    const scrollToTopButton = document.querySelector(".scroll-to-top");

    // Add scroll event listener to the window
    window.addEventListener("scroll", () => {
        if (window.scrollY > 800) {
            // Add the class when scroll position is greater than 800px
            scrollToTopButton.classList.add("to-top-visible");
        } else {
            // Remove the class when scroll position is less than or equal to 800px
            scrollToTopButton.classList.remove("to-top-visible");
        }
    });

    // Scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll effect
        });
    });

    const closeButton = document.querySelector('.close-button');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    closeButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        navbarCollapse.classList.remove('show'); // Remove 'show' class to close the menu
    });

    var loader = document.getElementById("preloader");
    window.addEventListener("load", function() {
        loader.classList.add("d-none");

        AOS.init();

        AOS.refresh();
    });

   
    const benefitsSectionContentCols = document.querySelectorAll(".benefits-section .content-col");

    if (window.innerWidth <= 767) {
        benefitsSectionContentCols.forEach((col) => {
            // Remove the data-aos attribute to disable animations
            col.removeAttribute("data-aos");
        });
    }

    const benefitsSectionSingleBenefitCols = document.querySelectorAll(".benefits-section .single-benefit-col");

     if (window.innerWidth > 767) {
        benefitsSectionSingleBenefitCols.forEach((col) => {
            // Remove the data-aos attribute to disable animations
            col.removeAttribute("data-aos");
        });
    }

   
});


