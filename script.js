const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), i * 80);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(36,92,82,0.12)' : 'none';
  });

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const nombre = data.get('nombre'), empresa = data.get('empresa');
    const email = data.get('email'), whatsapp = data.get('whatsapp');
    const paquete = data.get('paquete'), mensaje = data.get('mensaje');
    const subject = encodeURIComponent('Consulta de ' + nombre + (empresa ? ' — ' + empresa : ''));
    const body = encodeURIComponent('Nombre: ' + nombre + '\nEmpresa: ' + (empresa||'—') + '\nEmail: ' + email + '\nWhatsApp: ' + (whatsapp|