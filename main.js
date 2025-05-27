// Gestion du menu mobile
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  menu.classList.toggle('flex-col');
  menu.classList.toggle('absolute');
  menu.classList.toggle('top-16');
  menu.classList.toggle('right-4');
  menu.classList.toggle('bg-white');
  menu.classList.toggle('p-4');
  menu.classList.toggle('rounded');
  menu.classList.toggle('shadow-lg');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) { // md breakpoint
      menu.classList.add('hidden');
      menu.classList.remove('flex');
    }
  });
});

// Highlight du lien actif lors du scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#menu a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-blue-500');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('text-blue-500');
    }
  });
});
