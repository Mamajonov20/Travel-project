function clock() {
  let now = new Date();
  let Hour = now.getHours();
  let Minut = now.getMinutes().toString().padStart(2, "0");
  let Secunt = now.getSeconds().toString().padStart(2, "0");
  console.log(Hour, Minut, Secunt);
  let watch = `${Hour} : ${Minut} : ${Secunt}`;
  document.getElementById("watch").textContent = watch;
}
clock();
setInterval(clock, 1000);

function toggleSignup() {
  const modal = document.getElementById("signup-modal");
  if (modal.style.display === "block") {
    modal.style.display = "block";
  } else {
    modal.style.display = "block";
  }
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("signup-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
