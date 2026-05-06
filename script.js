function sendWhatsApp() {
  const phone = "919876543210"; // apna number daalo
  const message = "Hello, I need carpentry services";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
