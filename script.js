// Event flip card (dari kode lama)
document.querySelectorAll(".profile-card").forEach((card) => {
  card.addEventListener("click", function () {
    this.querySelector(".card-inner").classList.toggle("is-flipped");
  });
});

// Navigasi aktif (dari kode lama)
document.querySelectorAll(".nav-menu li").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".nav-menu li").forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tombolFakta = document.getElementById("faktaBtn");

  tombolFakta.addEventListener("click", function () {
    alert("Fakta menarik: Saya pernah ngoding seharian cuma buat nyari error yang ternyata cuma salah titik koma!");
  });
});


