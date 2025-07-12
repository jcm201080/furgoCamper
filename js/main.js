// === MODAL DE IMAGEN ===
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const images = document.querySelectorAll(".gallery img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// === TRADUCCIONES ===
const traducciones = {
  es: {
    titulo: "¡Alquila nuestra Camper!",
    subtitulo: "Explora sin límites desde solo 50€/día",
    btn_reservar: "Reservar ahora",
    descripcion_titulo: "Descripción y características",
    cama_titulo: "🛏️ Cama doble",
    cama_texto: "Colchón cómodo para 2 personas, sábanas incluidas.",
    cocina_titulo: "🍳 Cocina equipada",
    cocina_texto: "Fogón, fregadero, nevera portátil y utensilios.",
    ducha_titulo: "🚿 Ducha portátil",
    ducha_texto: "Incluye ducha solar para exteriores.",
    energia_titulo: "🔌 Energía solar",
    energia_texto: "Panel solar para recargar móviles y luces LED.",
    nav_inicio: "Inicio",
    nav_fotos: "Fotos",
    nav_descripcion: "Descripción",
    nav_contacto: "Contacto",
    contacto_titulo: "Contacto y reservas",
    direccion_texto: "📍 Dirección: Sevilla",
    telefono_texto: "📞 Teléfono: +34 635 48 70 63",
    btn_enviar: "Enviar"
  },
  en: {
    titulo: "Rent our Camper!",
    subtitulo: "Explore freely from just €50/day",
    btn_reservar: "Book now",
    descripcion_titulo: "Description and Features",
    cama_titulo: "🛏️ Double bed",
    cama_texto: "Comfortable mattress for 2 people, sheets included.",
    cocina_titulo: "🍳 Equipped kitchen",
    cocina_texto: "Stove, sink, portable fridge and utensils.",
    ducha_titulo: "🚿 Portable shower",
    ducha_texto: "Includes solar outdoor shower.",
    energia_titulo: "🔌 Solar power",
    energia_texto: "Solar panel to charge phones and LED lights.",
    nav_inicio: "Home",
    nav_fotos: "Photos",
    nav_descripcion: "Description",
    nav_contacto: "Contact",
    contacto_titulo: "Contact & Booking",
    direccion_texto: "📍 Location: Seville",
    telefono_texto: "📞 Phone: +34 635 48 70 63",
    btn_enviar: "Send"
  },
  fr: {
    titulo: "Louez notre Camper !",
    subtitulo: "Explorez sans limites dès 50€/jour",
    btn_reservar: "Réservez maintenant",
    descripcion_titulo: "Description et caractéristiques",
    cama_titulo: "🛏️ Lit double",
    cama_texto: "Matelas confortable pour 2 personnes, draps inclus.",
    cocina_titulo: "🍳 Cuisine équipée",
    cocina_texto: "Réchaud, évier, frigo portable et ustensiles.",
    ducha_titulo: "🚿 Douche portable",
    ducha_texto: "Comprend une douche solaire pour l'extérieur.",
    energia_titulo: "🔌 Énergie solaire",
    energia_texto: "Panneau solaire pour recharger téléphones et lampes LED.",
    nav_inicio: "Accueil",
    nav_fotos: "Photos",
    nav_descripcion: "Description",
    nav_contacto: "Contact",
    contacto_titulo: "Contact et Réservations",
    direccion_texto: "📍 Adresse : Séville",
    telefono_texto: "📞 Téléphone : +34 635 48 70 63",
    btn_enviar: "Envoyer"
  }
};

// === CAMBIO DE IDIOMA ===
function cambiarIdioma(idioma) {
  const textos = traducciones[idioma];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (textos[key]) {
      el.innerText = textos[key];
    }
  });

  // Guardamos idioma en localStorage
  localStorage.setItem("idioma", idioma);

  // Resaltar bandera activa
  document.querySelectorAll(".lang-selector a").forEach(a => {
    a.classList.remove("activo");
  });
  document.querySelector(`.lang-selector a[data-lang="${idioma}"]`)?.classList.add("activo");
}

// === DETECCIÓN DE CLIC EN BANDERAS ===
document.querySelectorAll(".lang-selector a").forEach(enlace => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    const lang = e.target.getAttribute("data-lang");
    cambiarIdioma(lang);
  });
});

// === APLICAR IDIOMA AL CARGAR LA PÁGINA ===
document.addEventListener("DOMContentLoaded", () => {
  const idiomaGuardado = localStorage.getItem("idioma") || "es";
  cambiarIdioma(idiomaGuardado);
});

//Agradecimineto despues del formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        message.style.display = "block";
        message.scrollIntoView({ behavior: "smooth" });

      } else {
        alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
      }
    });
  }
});
