 // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });

  // Burger menu
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  function closeMenu() {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // WhatsApp form
  function sendWhatsApp() {
    const name = document.querySelector('input[placeholder="Amadou Diallo"]').value || 'Client';
    const phone = document.querySelector('input[placeholder="+221 77 000 00 00"]').value || 'Non renseigné';
    const type = document.querySelector('select').value || 'Non précisé';
    const weight = document.querySelector('input[type="number"]').value || 'Non précisé';
    const msg = document.querySelector('textarea').value || '';
    const text = `Bonjour Taïf Cargo 👋\n\nNom: ${name}\nTél: ${phone}\nMarchandise: ${type}\nPoids: ${weight} kg\n\n${msg}`;
    window.open(`https://wa.me/221781801928?text=${encodeURIComponent(text)}`, '_blank');
  }

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });