document.addEventListener("DOMContentLoaded", () => {
  // Open big image modal
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      const modal = document.getElementById("modal");
      const modalImg = document.getElementById("modalImg");
      modalImg.src = img.src;
      modal.style.display = "flex";
    });
  });

  // Close modal
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });
});

