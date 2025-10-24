// --- Parallax und Highlights ---
const dunes = document.querySelectorAll('.dune');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  dunes.forEach((dune, i) => {
    const speed = 0.3 + i * 0.1;
    const rotation = -15 - i * 3;
    dune.style.transform = `rotate(${rotation}deg) translateY(${scrollY * speed}px)`;

    const highlight = dune.querySelector('.highlight');
    if (highlight) {
      highlight.style.transform = `translateY(${scrollY * speed * 0.5}px)`;
    }
  });
});

// --- Sanftes Farbspiel beim Hover auf Hero ---
const hero = document.querySelector('.hero-content');

hero.addEventListener('mouseenter', () => {
  document.documentElement.style.setProperty('--sand1', '#fffaf0');
  document.documentElement.style.setProperty('--sand2', '#fff3d8');
  document.documentElement.style.setProperty('--sand3', '#fce8c3');
  document.documentElement.style.setProperty('--sand4', '#f8d6a3');
  document.documentElement.style.setProperty('--sand5', '#f4c885');
  document.documentElement.style.setProperty('--sand6', '#f0ba6b');
});

hero.addEventListener('mouseleave', () => {
  document.documentElement.style.setProperty('--sand1', '#fff8f0');
  document.documentElement.style.setProperty('--sand2', '#fff2df');
  document.documentElement.style.setProperty('--sand3', '#fce6c7');
  document.documentElement.style.setProperty('--sand4', '#f8d8a8');
  document.documentElement.style.setProperty('--sand5', '#f4ca88');
  document.documentElement.style.setProperty('--sand6', '#f0bc6b');
});
