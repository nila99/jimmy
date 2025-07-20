// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeCountupTimer();
    initializeScrollAnimations();
});

// Countup Timer from 2021-01-04 07:05:52.3659
function initializeCountupTimer() {
    const startDate = new Date('2021-01-04T07:05:52.3659');
    
    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;
        
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Animate the numbers
        gsap.to('#years', {
            innerHTML: years,
            duration: 1,
            ease: "power2.out",
            snap: { innerHTML: 1 }
        });
        
        gsap.to('#months', {
            innerHTML: months,
            duration: 1,
            ease: "power2.out",
            snap: { innerHTML: 1 }
        });
        
        gsap.to('#days', {
            innerHTML: days,
            duration: 1,
            ease: "power2.out",
            snap: { innerHTML: 1 }
        });
        
        gsap.to('#hours', {
            innerHTML: hours,
            duration: 1,
            ease: "power2.out",
            snap: { innerHTML: 1 }
        });
        
        gsap.to('#minutes', {
            innerHTML: minutes,
            duration: 1,
            ease: "power2.out",
            snap: { innerHTML: 1 }
        });
        
        gsap.to('#seconds', {
            innerHTML: seconds,
            duration: 1,
            ease: "power2.out",
            snap: { innerHTML: 1 }
        });
    }
    
    // Update immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // Animate countup items on load
    gsap.fromTo('.countup-item', 
        { opacity: 0, scale: 0.5, y: 50 },
        { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.5
        }
    );
}

// Scroll Animations
function initializeScrollAnimations() {
    // Hero section animations
    gsap.fromTo('.hero-content .stick-figure', 
        { opacity: 0, scale: 0, rotation: -180 },
        { 
            opacity: 1, 
            scale: 1, 
            rotation: 0, 
            duration: 1, 
            ease: "back.out(1.7)",
            delay: 0.2
        }
    );
    
    gsap.fromTo('.title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );
    
    gsap.fromTo('.subtitle', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.7 }
    );

    // Money section
    gsap.fromTo('#money-section .stick-figure', 
        { opacity: 0, x: -100, rotation: -15 },
        {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#money-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('#money-section .text-content', 
        { opacity: 0, x: 100 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#money-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('.money-amount', 
        { opacity: 0, scale: 0.5 },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#money-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // House section
    gsap.fromTo('#house-section .stick-figure', 
        { opacity: 0, y: 100 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#house-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('.house', 
        { opacity: 0, scale: 0.5, rotation: 180 },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#house-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('#house-section .text-content', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#house-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Liked section
    gsap.fromTo('#liked-section .stick-figure', 
        { opacity: 0, x: -100 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#liked-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('#liked-section .number-amount', 
        { opacity: 0, scale: 0.5 },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#liked-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Matched section (sad Jimmy)
    gsap.fromTo('#matched-section .stick-figure', 
        { opacity: 0, scale: 0.8, rotation: 10 },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#matched-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('#matched-section .number-amount', 
        { opacity: 0, scale: 0.5 },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#matched-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Liked by section
    gsap.fromTo('#liked-by-section .stick-figure', 
        { opacity: 0, y: -100 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#liked-by-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('#liked-by-section .text-content', 
        { opacity: 0, x: 100 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#liked-by-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Final section (sad Jimmy)
    gsap.fromTo('#final-section .stick-figure', 
        { opacity: 0, scale: 0.8, rotation: -10 },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#final-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('#final-section .number-amount', 
        { opacity: 0, scale: 0.5 },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#final-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Conclusion section (final sad Jimmy)
    gsap.fromTo('#conclusion-section .stick-figure', 
        { opacity: 0, scale: 0.8, rotation: 15 },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#conclusion-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('#conclusion-section .text-content', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#conclusion-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Rizz section (happy Jimmy)
    gsap.fromTo('#rizz-section .stick-figure', 
        { opacity: 0, scale: 0.8, rotation: -15 },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#rizz-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('#rizz-section .text-content', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#rizz-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Words section (word bubbles)
    gsap.fromTo('#words-section .text-content', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#words-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('.word-bubble', 
        { opacity: 0, scale: 0, rotation: 180 },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#words-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Personality section (sad Jimmy)
    gsap.fromTo('#personality-section .stick-figure', 
        { opacity: 0, scale: 0.8, rotation: 10 },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#personality-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('#personality-section .text-content', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#personality-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Hope section (happy Jimmy + fish)
    gsap.fromTo('#hope-section .stick-figure', 
        { opacity: 0, scale: 0.8, rotation: -15 },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#hope-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('.fish', 
        { opacity: 0, scale: 0, y: 50 },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: "#hope-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
    
    gsap.fromTo('#hope-section .text-content', 
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#hope-section",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Section entrance animations
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        gsap.fromTo(section, 
            { 
                opacity: 0, 
                y: 100,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const stickFigures = document.querySelectorAll('.stick-figure');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    stickFigures.forEach((figure, index) => {
        const speed = (index + 1) * 0.3;
        const x = (mouseX - 0.5) * speed * 10;
        const y = (mouseY - 0.5) * speed * 10;
        
        gsap.to(figure, {
            x: x,
            y: y,
            duration: 1,
            ease: "power2.out"
        });
    });
});

// Add some floating animation to stick figures
gsap.to('.stick-figure', {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    stagger: 0.5
});

// Add subtle rotation to house
gsap.to('.house', {
    rotation: 5,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// Add loading animation
window.addEventListener('load', () => {
    gsap.fromTo('.hero-content', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
}); 