const timer = setInterval(() => {
  const d = new Date();
  document.querySelector("p").innerText = d.toLocaleTimeString();
}, 1000);

document.querySelector("button").addEventListener("click", () => {
  clearInterval(timer);
});