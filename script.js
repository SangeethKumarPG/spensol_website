// Header
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});




const serviceCards = document.querySelectorAll(".animate-card");

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

serviceCards.forEach(card => cardObserver.observe(card));



document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("cf_sec_59120");
  if (!section) return;

  const counters = section.querySelectorAll(".cf_sec_59120_number");
  const animated = new Set();

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-target"), 10) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1000;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.round(target * easeOut(progress));
      el.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /* Trigger animation only when visible */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (!animated.has(el)) {
            animated.add(el);
            animateCounter(el);
          }
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => observer.observe(counter));
});