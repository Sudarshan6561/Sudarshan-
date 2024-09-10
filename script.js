// GSAP animations for header with shorter duration (already working)
gsap.fromTo("header", 
    { y: -100, opacity: 0 },  // Starting state
    { duration: 1, y: 0, opacity: 1, ease: "power4.out" }  // Reduced duration to 1 second
);

// Scroll-triggered animations for sections
gsap.registerPlugin(ScrollTrigger);

// Scroll-triggered animations with better configuration
gsap.utils.toArray("section").forEach(section => {
    gsap.fromTo(section, 
        { opacity: 0, y: 100 },  // Starting state: hidden and down
        { 
            opacity: 1, 
            y: 0, 
            duration: 1,  // Reduced duration for faster load
            ease: "power4.out", 
            scrollTrigger: {
                trigger: section,
                start: "top 75%",  // When the top of the section is 75% into the viewport
                end: "bottom 25%",  // When the bottom of the section is 25% from the bottom of the viewport
                toggleActions: "play none none none",  // Only play once
                once: true  // Make sure it only happens once
            }
        }
    );
});

// Hover effect for links (unchanged)
const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        gsap.to(link, { duration: 0.3, color: "#007BFF" });
    });
    link.addEventListener("mouseleave", () => {
        gsap.to(link, { duration: 0.3, color: "#17a2b8" });
    });
});
