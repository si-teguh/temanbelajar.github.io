// -------------------------
// 1. CEK STATUS PROGRESS
// -------------------------
let materiDibaca = localStorage.getItem("lesson1_materi") === "true";
let videoSelesai = localStorage.getItem("lesson1_video") === "true";

// Button quiz
const quizButton = document.querySelector(".link-quiz");

// Atur tombol quiz berdasarkan progress
function updateQuizButton() {
  if (materiDibaca && videoSelesai) {
    quizButton.style.pointerEvents = "auto";
    quizButton.style.opacity = "1";
    quizButton.innerText = "Mulai Quiz →";
  } else {
    quizButton.style.pointerEvents = "none";
    quizButton.style.opacity = "0.5";
    quizButton.innerText = "Selesaikan Materi & Video untuk Mulai Quiz";
  }
}

updateQuizButton();

// -------------------------
// 2. DETEKSI SCROLL SAMPAI BAWAH
// -------------------------
window.addEventListener("scroll", () => {
  const contentHeight = document.body.scrollHeight;
  const scrollPos = window.innerHeight + window.scrollY;

  if (scrollPos >= contentHeight - 20) {
    materiDibaca = true;
    localStorage.setItem("lesson1_materi", "true");
    updateQuizButton();
  }
});

// -------------------------
// 3. DETEKSI VIDEO SELESAI
// -------------------------
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("videoAI", {
    events: {
      onStateChange: function (event) {
        if (event.data === YT.PlayerState.ENDED) {
          videoSelesai = true;
          localStorage.setItem("lesson1_video", "true");
          updateQuizButton();
        }
      }
    }
  });
}
