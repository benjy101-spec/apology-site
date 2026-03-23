function startExperience() {
  window.location.href = "q1.html";
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}

// New functions for q1
function goBatman() {
  window.location.href = "batman.html";
}

function goWrong() {
  alert("Ouch 😭 okay... that hurt. I deserve that one.");
  window.location.href = "final.html";
}

function nextQuestion() {
  window.location.href = "q2.html";
}

function missYes() {
  document.getElementById("response").innerText =
    "That makes two of us ❤️ I really missed you too, Faith.";

  setTimeout(() => {
    window.location.href = "final.html";
  }, 2000);
}

function missNo() {
  document.getElementById("response").innerText =
    "Hmm… I don’t believe you 😅 but I’ll accept it for now.";

  setTimeout(() => {
    window.location.href = "final.html";
  }, 2000);
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