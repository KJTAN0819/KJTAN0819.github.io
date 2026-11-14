const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Show a clean initials fallback until assets/hafiz-photo.jpg is added.
const portrait = document.getElementById("hafizPhoto");
const fallback = document.getElementById("photoFallback");
portrait?.addEventListener("error", () => {
  portrait.style.display = "none";
  fallback.style.display = "flex";
});
portrait?.addEventListener("load", () => {
  fallback.style.display = "none";
});

document.getElementById("contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const topic = document.getElementById("visitorTopic").value;
  const message = document.getElementById("visitorMessage").value.trim();
  const consent = document.getElementById("consent").checked;

  if (!name || !topic || !message || !consent) return;

  const text = [
    "Assalamualaikum Hafiz, saya ingin membuat pertanyaan umum.",
    "",
    `Nama: ${name}`,
    `Topik: ${topic}`,
    `Pertanyaan: ${message}`,
    "",
    "Saya tidak menyertakan maklumat peribadi atau dokumen sulit."
  ].join("\n");

  const whatsappUrl = `https://wa.me/601161198979?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
