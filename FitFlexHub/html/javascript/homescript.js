document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");

            // Allow default behavior for external links (like login and signup)
            if (href.includes('.html')) {
                return; // Do nothing, allow navigation to external pages
            }

            event.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form validation
    const contactForm = document.querySelector(".contact-section form");

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = contactForm.querySelector("input[placeholder='Your Name']").value.trim();
        const email = contactForm.querySelector("input[placeholder='Your Email']").value.trim();
        const message = contactForm.querySelector("textarea[placeholder='Your Message']").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for your message, " + name + "! We'll get back to you soon.");
        contactForm.reset();
    });

    // Email validation helper function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
