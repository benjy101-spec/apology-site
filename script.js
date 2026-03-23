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

function initEnvelopeIntro() {
  const overlay = document.getElementById("introOverlay");
  const envelope = document.getElementById("envelope");
  const page = document.querySelector(".page");
  const music = document.getElementById("bgMusic");

  if (!overlay || !envelope || !page) {
    initPageTransition();
    return;
  }

  const openIntro = () => {
    if (envelope.classList.contains("open")) return;

    envelope.classList.add("open");

    if (music) {
      music.volume = 0.6;
      music.play().catch(() => {});
    }

    setTimeout(() => {
      overlay.classList.add("hidden");
      page.classList.add("enter");
      page.classList.remove("pre-intro");
    }, 700);
  };

  overlay.addEventListener("click", openIntro);
  overlay.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openIntro();
    }
  });
}

document.addEventListener("DOMContentLoaded", initEnvelopeIntro);
