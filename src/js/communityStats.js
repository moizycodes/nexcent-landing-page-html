const statsSection = document.querySelector("#communityStats");
const counters = document.querySelectorAll(".counter");

const statsObserver = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) return;

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      const duration = 5000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(target * progress);

        counter.textContent = value.toLocaleString("en-US");

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }

      requestAnimationFrame(updateCounter);
    });

    statsObserver.disconnect();
  },
  { threshold: 0.3 },
);

statsObserver.observe(statsSection);
