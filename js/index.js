const btn = document.getElementById("wishBtn");
btn.addEventListener("click", () => {
  document.getElementById("msg").classList.add("show");
  startConfetti();

  // Animate toy with "singing" effect
  const toy = document.getElementById("singingToy");
  toy.style.filter = "drop-shadow(0 0 15px yellow)";
  setTimeout(() => {
    toy.style.filter = "";
  }, 4000);
});

// 🎉 Confetti Effect
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 8 + 4,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    speed: Math.random() * 3 + 2,
  };
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    ctx.fillStyle = c.color;
    ctx.fillRect(c.x, c.y, c.size, c.size);
    c.y += c.speed;
    if (c.y > canvas.height) confetti[i] = createConfetti();
  });
  requestAnimationFrame(drawConfetti);
}

function startConfetti() {
  confetti = Array.from({ length: 150 }, createConfetti);
  drawConfetti();
}
