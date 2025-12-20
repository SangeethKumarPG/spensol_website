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

