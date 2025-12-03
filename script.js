document.addEventListener("DOMContentLoaded", () => {
  // Year footer
  const year = new Date().getFullYear();
  if (document.getElementById("year")) {
    document.getElementById("year").textContent = year;
  }
  if (document.getElementById("year2")) {
    document.getElementById("year2").textContent = year;
  }

  // Toggle panel
  const toggleBtn = document.getElementById("toggleBtn");
  const demoPanel = document.getElementById("demoPanel");
  if (toggleBtn && demoPanel) {
    toggleBtn.addEventListener("click", () => {
      demoPanel.classList.toggle("hidden");
      toggleBtn.textContent = demoPanel.classList.contains("hidden")
        ? "Show Demo"
        : "Hide Demo";
    });
  }

  // Fully working accent color picker
  const accentPicker = document.getElementById("accent");
  if (accentPicker) {
    accentPicker.addEventListener("change", (e) => {
      const color = e.target.value;

      // Updates the global CSS variable
      document.documentElement.style.setProperty("--accent", color);
      document.documentElement.style.setProperty("--accent-2", color);

      // Small UI feedback blink
      document.body.style.transition = "background 0.3s";
      document.body.style.backgroundColor = "#e7f4ff";
      setTimeout(() => {
        document.body.style.backgroundColor = "var(--bg)";
      }, 200);
    });
  }
});
<script>
  function toggle(id) {
    const box = document.getElementById(id);
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }
</script>

