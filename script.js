document.addEventListener("DOMContentLoaded", function() {
    // Smoothly fade in the mission section
    const missionSection = document.querySelector(".mission");
    if (missionSection) {
        missionSection.style.opacity = "0";
        setTimeout(() => {
            missionSection.style.transition = "opacity 1s";
            missionSection.style.opacity = "1";
        }, 500);
    }

    // Add a simple animation to testimonials
    const testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach((testimonial, index) => {
        testimonial.style.opacity = "0";
        setTimeout(() => {
            testimonial.style.transition = "opacity 1s ease-in-out";
            testimonial.style.opacity = "1";
        }, index * 700); // Staggered effect
    });

    // Fun Facts Dynamic Highlighting
    const funFacts = document.querySelectorAll(".farming-facts p");
    funFacts.forEach((fact, index) => {
        setInterval(() => {
            fact.style.color = index % 2 === 0 ? "#28a745" : "#007bff"; // Alternating colors
        }, 2000);
    });

    console.log("Homepage enhancements loaded successfully!");
});
