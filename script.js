function transitionTo(url, delay = 420) {
  const page = document.querySelector(".page");
  if (page) {
    page.classList.remove("enter");
    page.classList.add("exit");
    setTimeout(() => {
      window.location.href = url;
    }, delay);
    return;
  }

  window.location.href = url;
}

function initPageTransition() {
  const page = document.querySelector(".page");
  if (!page) return;

  requestAnimationFrame(() => {
    page.classList.add("enter");
  });
}

function startExperience() {
  transitionTo("q1.html");
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  if (music) {
    music.play();
  }
}

function goBatman() {
  transitionTo("batman.html");
}

function goWrong() {
  alert("Ouch 😭 okay... that hurt. I deserve that one.");
  transitionTo("final.html");
}

function nextQuestion() {
  transitionTo("q2.html");
}

function missYes() {
  document.getElementById("response").innerText =
    "That makes two of us ❤️ I really missed you too, Faith.";

  setTimeout(() => {
    transitionTo("final.html");
  }, 1000);
}

function missNo() {
  document.getElementById("response").innerText =
    "Hmm… I don’t believe you 😅 but I’ll accept it for now.";

  setTimeout(() => {
    transitionTo("final.html");
  }, 1000);
}

function forgive() {
  document.getElementById("finalResponse").innerText =
    "You just made me the happiest guy alive ❤️ I promise—no more disappearing acts.";
}

function moveButton(btn) {
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}

document.addEventListener("DOMContentLoaded", initPageTransition);
