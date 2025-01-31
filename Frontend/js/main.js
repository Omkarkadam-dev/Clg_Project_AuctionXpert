document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-content h1");
    const heroDesc = document.querySelector(".hero-content p");

    // Add fade-in effect
    setTimeout(() => {
        heroText.style.opacity = "1";
        heroDesc.style.opacity = "1";
    }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
    const bidButtons = document.querySelectorAll(".bid-btn");

    // Add real-time price updates for auction items
    setInterval(() => {
        const auctionItems = document.querySelectorAll(".auction-item");
        auctionItems.forEach((item) => {
            let bidPrice = item.querySelector(".current-bid");
            let currentPrice = parseFloat(bidPrice.textContent.replace('$', '').replace(',', ''));
            bidPrice.textContent = `$${(currentPrice + Math.random() * 100).toFixed(2)}`;
        });
    }, 3000); // Update every 3 seconds

    // Auction bid button interaction
    bidButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Bid placed! Good luck!');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");

    // Adding interactive hover effect for steps
    steps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'scale(1.1)';
            step.style.transition = 'transform 0.3s ease';
        });

        step.addEventListener('mouseleave', () => {
            step.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature");

    // Adding interactive hover effect for features
    features.forEach((feature) => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'scale(1.05)';
            feature.style.transition = 'transform 0.3s ease';
        });

        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const totalSlides = slides.length;

    const showSlide = (index) => {
        // Ensure the index is within bounds
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        // Move the slider
        const slideContainer = document.querySelector(".testimonial-slider");
        slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    // Add event listeners for controls
    document.getElementById("next").addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    document.getElementById("prev").addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
});


document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-btn");

    // Smooth Scroll to Sign-Up Section (assuming there is a signup section with id 'signup')
    ctaButton.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById("signup");
        target.scrollIntoView({ behavior: "smooth" });
    });
});


