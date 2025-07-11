document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animate skill bars on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".skill-progress-bar");
      progressBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = width;
        }, 200);
      });
    }
  });
}, observerOptions);

observer.observe(document.querySelector(".skills"));

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.9)";
  }
});

//Menu Burger
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Ouvre/ferme le menu burger
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("open");
});

// Ferme le menu quand on clique sur un lien
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    burger.classList.remove("open");
  });
});
