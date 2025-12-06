/* ===============================
   LOAD PROGRESS
=============================== */
let materiDibaca = localStorage.getItem("lesson3_materi") === "true";
let videoSelesai = localStorage.getItem("lesson3_video") === "true";

const quizButton = document.querySelector(".link-quiz");

/* ===============================
   UPDATE QUIZ BUTTON
=============================== */
function updateQuizButton() {
  if (materiDibaca && videoSelesai) {
    quizButton.style.opacity = "1";
    quizButton.style.pointerEvents = "auto";
    quizButton.innerText = "Mulai Quiz →";
  } else {
    quizButton.style.opacity = "0.5";
    quizButton.style.pointerEvents = "none";
    quizButton.innerText = "Selesaikan materi & video dahulu";
  }
}
updateQuizButton();

/* ===============================
   SCROLL DETECTION
=============================== */
window.addEventListener("scroll", () => {
  const contentHeight = document.body.scrollHeight;
  const scrollPos = window.innerHeight + window.scrollY;

  if (scrollPos >= contentHeight - 20) {
    materiDibaca = true;
    localStorage.setItem("lesson3_materi", "true");
    updateQuizButton();
  }
});

/* ===============================
   YOUTUBE VIDEO DONE
=============================== */
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("videoAI3", {
    events: {
      onStateChange: function (event) {
        if (event.data === YT.PlayerState.ENDED) {
          videoSelesai = true;
          localStorage.setItem("lesson3_video", "true");
          updateQuizButton();
        }
      }
    }
  });
}

/* ===============================
   DEV PANEL SHORTCUT (CTRL+ALT+D)
=============================== */
document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.altKey && e.key === "d") {
    const panel = document.getElementById("devPanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  }
});

/* ===============================
   RESET PROGRESS (DEV)
=============================== */
document.getElementById("btnResetDev").addEventListener("click", function() {
  if (confirm("Yakin reset progress pertemuan 3?")) {
    localStorage.removeItem("lesson3_materi");
    localStorage.removeItem("lesson3_video");
    localStorage.removeItem("lesson3_done");

    location.reload();
  }
});
