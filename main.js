// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

const servicesData = {
  animacion: {
    title: "Animación Clásica",
    desc: "Juegos, música y coordinación completa para que los chicos no paren de divertirse.",
    msg: "Hola! Me interesa Animación Clásica 🎉"
  },
  maquillaje: {
    title: "Maquillaje Artístico",
    desc: "Diseños increíbles con productos seguros para niños.",
    msg: "Hola! Me interesa Maquillaje Artístico 🎨"
  },
  glitter: {
    title: "Glitter Bar",
    desc: "Brillos, colores y diversión para todas las edades.",
    msg: "Hola! Me interesa Glitter Bar ✨"
  },
  peinados: {
    title: "Stand de Peinados",
    desc: "Peinados creativos y temáticos para completar el look.",
    msg: "Hola! Me interesa Stand de Peinados 💇"
  },
  slime: {
    title: "Slime Party",
    desc: "Cada chico crea su propio slime y se lo lleva.",
    msg: "Hola! Me interesa Slime Party 🧪"
  },
  spa: {
    title: "Spa Party",
    desc: "Relax, juegos tranquilos y experiencia tipo spa infantil.",
    msg: "Hola! Me interesa Spa Party 💆"
  },
  kermes: {
    title: "Fiesta Kermés",
    desc: "Juegos clásicos con estaciones y premios.",
    msg: "Hola! Me interesa Fiesta Kermés 🎪"
  },
  acuatica: {
    title: "Fiesta Acuática",
    desc: "Diversión con agua ideal para verano.",
    msg: "Hola! Me interesa Fiesta Acuática 💦"
  },
  burbujas: {
    title: "Show de Burbujas",
    desc: "Burbujas gigantes y show visual impactante.",
    msg: "Hola! Me interesa Show de Burbujas 🫧"
  },
  jugos: {
    title: "Barra de Jugos",
    desc: "Jugos naturales y licuados en vivo.",
    msg: "Hola! Me interesa Barra de Jugos 🥤"
  },
  gomitas: {
    title: "Stand de Gomitas",
    desc: "Mesa dulce con variedad de golosinas.",
    msg: "Hola! Me interesa Stand de Gomitas 🍬"
  },
  eventos: {
    title: "Eventos Especiales",
    desc: "Babyshower, gender reveal y eventos empresariales.",
    msg: "Hola! Me interesa un evento especial 🎉"
  }
};

// MODAL LOGIC
const modal = document.getElementById("service-modal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-desc");
const wa = document.getElementById("modal-wa");

document.querySelectorAll(".extra-item").forEach(item => {
  item.addEventListener("click", () => {
    const key = item.dataset.service;
    const data = servicesData[key];

    title.textContent = data.title;
    desc.textContent = data.desc;

    wa.href = `https://wa.me/5491122370215?text=${encodeURIComponent(data.msg)}`;

    modal.style.display = "flex";
  });
});

document.querySelector(".close").onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};