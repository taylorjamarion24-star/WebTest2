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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learn JavaScript</title>

  <style>
    body {
      font-family: Arial;
      background: #f4fff4;
      padding: 20px;
    }
    .box {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    button {
      padding: 10px 15px;
      border: none;
      background: #28a745;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background: #1f7e33;
    }
    pre {
      background: #222;
      color: #0f0;
      padding: 15px;
      border-radius: 10px;
      overflow-x: auto;
    }
  </style>

</head>

<body>

<h1>JavaScript Basics</h1>

<div class="box">
  <h2>JavaScript Example</h2>
  <p>JavaScript makes websites interactive.</p>

  <pre>
<code>
function hello() {
  alert(\"Hello from JavaScript!\");
}
</code>
  </pre>

  <button onclick="hello()">Click Me</button>
</div>

<script>
  function hello() {
    alert("Hello from JavaScript!");
  }
</script>

</body>
</html>

