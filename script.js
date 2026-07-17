function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue} 74% 66%)`;
}

function applyNextWave(element) {
  element.style.setProperty("--wave-a", randomColor());
  element.style.setProperty("--wave-b", randomColor());
  element.style.setProperty("--wave-c", randomColor());
  element.style.setProperty("--wave-d", randomColor());
}

const attuneWord = document.querySelector(".attune-word");

if (attuneWord) {
  applyNextWave(attuneWord);
  window.setInterval(() => applyNextWave(attuneWord), 900);
}
