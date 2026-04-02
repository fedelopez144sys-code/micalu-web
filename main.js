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
    category: "Animaciones",
    badge: "🎭 Clásico",
    icon: "🎉",
    cardClass: "card-purple",
    desc: "Juegos, música y coordinación completa para que los chicos se diviertan sin parar.",
    includes: [
      "Bienvenida a cargo de animadores profesionales",
      "Juegos interactivos y dinámicas temáticas",
      "Concursos con premios sorpresa",
      "Coordinación del momento de la torta",
      "Sonido básico incluido"
    ],
    duration: "⏱ 60 – 90 minutos",
    msg: "Hola! Me interesa Animación Clásica 🎉"
  },
  tematica: {
    title: "Animación Temática",
    category: "Animaciones",
    badge: "🌈 Personalizamos todo",
    icon: "🎭",
    cardClass: "card-mint",
    desc: "Juegos, música, concursos y dinámicas adaptadas a la temática de tu fiesta. Los chicos no paran de reír.",
    includes: [
      "Bienvenida animada con personaje o temática elegida",
      "Juegos interactivos y coreografías",
      "Concursos con premios sorpresa",
      "Coordinación del momento de la torta",
      "Sonido e iluminación básica incluida"
    ],
    duration: "⏱ 90 – 120 minutos",
    msg: "Hola! Me interesa Animación Temática 🎭"
  },
  combo: {
    title: "Combo Completo",
    category: "Animaciones",
    badge: "💜 Mejor precio",
    icon: "🎊",
    cardClass: "card-purple",
    desc: "La experiencia completa para que no te falte nada. La fiesta perfecta, de principio a fin, sin que tengas que coordinar nada.",
    includes: [
      "Animación temática completa (2 hs)",
      "Maquillaje artístico para todos los invitados",
      "Taller de Tote Bags como souvenir",
      "2 animadores profesionales incluidos",
      "Coordinación total del evento",
      "Sonido e iluminación incluida"
    ],
    duration: "⏱ 2,5 – 3 horas de pura magia",
    msg: "Hola! Me interesa Combo Completo 🎊"
  },
  maquillaje: {
    title: "Maquillaje Artístico",
    category: "Talleres y Experiencias Creativas",
    badge: "⭐ Más pedido",
    icon: "🎨",
    cardClass: "card-pink",
    desc: "Convertí a cada niño en su personaje favorito. Diseños seguros, coloridos y que duran toda la fiesta.",
    includes: [
      "Maquillaje profesional cara completa o media cara",
      "Diseños temáticos: superhéroes, princesas, animales y más",
      "Productos hipoalergénicos y seguros para niños",
      "Hasta 20 niños por sesión",
      "Momento fotográfico incluido 📸"
    ],
    duration: "⏱ 45 – 60 minutos",
    msg: "Hola! Me interesa Maquillaje Artístico 🎨"
  },
  tote: {
    title: "Taller de Tote Bags",
    category: "Talleres y Experiencias Creativas",
    badge: "🎁 ¡Se llevan el recuerdo!",
    icon: "👜",
    cardClass: "card-yellow",
    desc: "Los chicos se van con su obra de arte bajo el brazo. Un taller creativo que entretiene, enseña y regala un recuerdo único.",
    includes: [
      "Una tote bag por niño para pintar y decorar",
      "Pinturas textiles no tóxicas y sellos temáticos",
      "Animadores guiando el taller paso a paso",
      "Se seca al instante, se llevan a casa",
      "Ideal para toda la mesa de invitados"
    ],
    duration: "⏱ 40 – 50 minutos",
    msg: "Hola! Me interesa Taller de Tote Bags 👜"
  },
  glitter: {
    title: "Glitter Bar",
    category: "Talleres y Experiencias Creativas",
    badge: "✨ Brillo extra",
    icon: "💖",
    cardClass: "card-mint",
    desc: "Brillos, colores y diversión para todas las edades.",
    includes: ["Barra libre de glitter seguro, stickers y accesorios"],
    duration: "⏱ 30 – 45 minutos",
    msg: "Hola! Me interesa Glitter Bar ✨"
  },
  peinados: {
    title: "Stand de Peinados",
    category: "Talleres y Experiencias Creativas",
    badge: "💇 Look divertido",
    icon: "💇",
    cardClass: "card-yellow",
    desc: "Peinados creativos y temáticos para completar el look.",
    includes: ["Peinados rápidos por animadores expertos", "Accesorios temáticos para cada estilo"],
    duration: "⏱ 30 – 40 minutos",
    msg: "Hola! Me interesa Stand de Peinados 💇"
  },
  slime: {
    title: "Slime Party",
    category: "Talleres y Experiencias Creativas",
    badge: "🧪 Para manitos creativas",
    icon: "🧪",
    cardClass: "card-mint",
    desc: "Cada chico crea su propio slime y se lo lleva.",
    includes: ["Materiales hipoalergénicos", "Asistencia paso a paso", "Souvenir personalizado"],
    duration: "⏱ 35 – 50 minutos",
    msg: "Hola! Me interesa Slime Party 🧪"
  },
  spa: {
    title: "Spa Party",
    category: "Talleres y Experiencias Creativas",
    badge: "💆 Relajación divertida",
    icon: "💆",
    cardClass: "card-purple",
    desc: "Relax, juegos tranquilos y experiencia tipo spa infantil.",
    includes: ["Masajes suaves para manos", "Mascarillas faciales seguras", "Zona de relax con música"],
    duration: "⏱ 45 – 55 minutos",
    msg: "Hola! Me interesa Spa Party 💆"
  },
  kermes: {
    title: "Fiesta Kermés",
    category: "Experiencias Extra",
    badge: "🎪 Tradición divertida",
    icon: "🎪",
    cardClass: "card-yellow",
    desc: "Juegos clásicos con estaciones y premios.",
    includes: ["Tiro al blanco", "Carrera de sacos", "Puestos de premios"],
    duration: "⏱ 60 – 80 minutos",
    msg: "Hola! Me interesa Fiesta Kermés 🎪"
  },
  acuatica: {
    title: "Fiesta Acuática",
    category: "Experiencias Extra",
    badge: "💦 Verano perfecto",
    icon: "💦",
    cardClass: "card-mint",
    desc: "Diversión con agua ideal para verano.",
    includes: ["Juegos con agua", "Circuito acuático", "Toallas y control de seguridad"],
    duration: "⏱ 60 – 90 minutos",
    msg: "Hola! Me interesa Fiesta Acuática 💦"
  },
  burbujas: {
    title: "Show de Burbujas",
    category: "Experiencias Extra",
    badge: "🫧 Magia XXL",
    icon: "🫧",
    cardClass: "card-purple",
    desc: "Burbujas gigantes y show visual impactante.",
    includes: ["Técnica profesional de burbujas", "Sorpresas con humo y luces"],
    duration: "⏱ 20 – 30 minutos",
    msg: "Hola! Me interesa Show de Burbujas 🫧"
  },
  jugos: {
    title: "Barra de Jugos",
    category: "Experiencias Extra",
    badge: "🥤 Salud y sabor",
    icon: "🥤",
    cardClass: "card-yellow",
    desc: "Jugos naturales y licuados en vivo.",
    includes: ["Variedad de frutos frescos", "Personalización al momento"],
    duration: "⏱ 30 – 40 minutos",
    msg: "Hola! Me interesa Barra de Jugos 🥤"
  },
  gomitas: {
    title: "Stand de Gomitas",
    category: "Experiencias Extra",
    badge: "🍬 Dulce sorpresa",
    icon: "🍬",
    cardClass: "card-pink",
    desc: "Mesa dulce con variedad de golosinas.",
    includes: ["Selección de gomitas y chocolates", "Bolsitas para llevar"],
    duration: "⏱ 30 – 45 minutos",
    msg: "Hola! Me interesa Stand de Gomitas 🍬"
  },
  eventos: {
    title: "Eventos Especiales",
    category: "Experiencias Extra",
    badge: "🏢 Multi-formato",
    icon: "🏢",
    cardClass: "card-purple",
    desc: "Babyshower, gender reveal y eventos empresariales.",
    includes: ["Planificación personalizada", "Atención integral en el evento"],
    duration: "⏱ A consultar",
    msg: "Hola! Me interesa un evento especial 🎉"
  }
};

const categoryOrder = [
  { name: "Animaciones", description: "Servicios que animan y coordinan cada momento para que la fiesta sea inolvidable." },
  { name: "Talleres y Experiencias Creativas", description: "Actividades prácticas y artísticas para que los chicos creen, compartan y se lleven un recuerdo único." },
  { name: "Experiencias Extra", description: "Complementos para sumar diversión con estaciones temáticas y propuestas originales." },
];

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;
  container.innerHTML = "";

  categoryOrder.forEach((group) => {
    const keys = Object.keys(servicesData).filter((key) => servicesData[key].category === group.name);
    if (!keys.length) return;

    const groupEl = document.createElement("div");
    groupEl.className = "service-group";
    groupEl.innerHTML = `
      <h3 class="group-title">${group.name}</h3>
      <p class="group-description">${group.description}</p>
    `;

    const grid = document.createElement("div");
    grid.className = "services-grid";

    keys.forEach((key) => {
      const service = servicesData[key];
      const card = document.createElement("div");
      card.className = `service-card ${service.cardClass || "card-purple"} fade-in`;
      card.tabIndex = 0;
      card.innerHTML = `
        <div class="card-badge">${service.badge || ""}</div>
        <div class="card-icon">${service.icon || "✨"}</div>
        <h3>${service.title}</h3>
        <div class="service-details">
          <p class="desc">${service.desc}</p>
          ${service.includes ? `<ul class="includes-list">${service.includes.map((i) => `<li>${i}</li>`).join("")}</ul>` : ""}
          ${service.duration ? `<span class="card-duration">${service.duration}</span>` : ""}
          <a class="btn-wa-sm" href="https://wa.me/5491122370215?text=${encodeURIComponent(service.msg)}" target="_blank">Consultar por WhatsApp</a>
        </div>
      `;

      grid.appendChild(card);
      observer.observe(card);
    });

    groupEl.appendChild(grid);
    container.appendChild(groupEl);
  });
}

renderServices();

// Add click to expand functionality
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});

// MODAL LOGIC
const modal = document.getElementById("service-modal");
const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-desc");
const wa = document.getElementById("modal-wa");

document.querySelectorAll(".extra-item").forEach(item => {
  item.addEventListener("click", () => {
    const key = item.dataset.service;
    const data = servicesData[key];

    if (!data) {
      title.textContent = "Servicio";
      desc.textContent = "Estamos preparando los detalles de este servicio. Contactanos para más información.";
      wa.href = "https://wa.me/5491122370215";
      modal.style.display = "flex";
      return;
    }

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