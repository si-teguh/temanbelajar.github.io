// ======================================
// 1. LOAD STATUS PROGRESS
// ======================================
let materiDibaca = localStorage.getItem("lesson2_materi") === "true";
let videoSelesai = localStorage.getItem("lesson2_video") === "true";
let lessonDone = localStorage.getItem("lesson2_done") === "true";

const quizButton = document.querySelector(".link-quiz");
const btnSelesai = document.getElementById("btnSelesai");


// ======================================
// 2. UPDATE TOMBOL QUIZ
// ======================================
function updateQuizButton() {
    if (!quizButton) return;

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


// ======================================
// 3. UPDATE TOMBOL SELESAI
// ======================================
function updateFinishButton() {
    if (!btnSelesai) return;

    if (lessonDone) {
        btnSelesai.disabled = true;
        btnSelesai.innerText = "Pertemuan Telah Ditandai";
    } else {
        btnSelesai.disabled = false;
        btnSelesai.innerText = "Selesai & Tandai Pertemuan";
    }
}


// Panggil saat halaman dibuka
updateQuizButton();
updateFinishButton();


// ======================================
// 4. DETEKSI SCROLL BACA MATERI
// ======================================
window.addEventListener("scroll", () => {
    const totalHeight = document.body.scrollHeight;
    const currentPos = window.innerHeight + window.scrollY;

    if (currentPos >= totalHeight - 50) {
        materiDibaca = true;
        localStorage.setItem("lesson2_materi", "true");
        updateQuizButton();
    }
});


// ======================================
// 5. DETEKSI VIDEO SELESAI (YouTube API)
// ======================================
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("videoAI2", {
        events: {
            onStateChange: function (event) {
                if (event.data === YT.PlayerState.ENDED) {
                    videoSelesai = true;
                    localStorage.setItem("lesson2_video", "true");
                    updateQuizButton();
                }
            }
        }
    });
}


// ======================================
// 6. TOMBOL SELESAI
// ======================================
if (btnSelesai) {
    btnSelesai.addEventListener("click", function () {
        lessonDone = true;
        localStorage.setItem("lesson2_done", "true");
        updateFinishButton();

        alert("Pertemuan 2 telah ditandai selesai!");
    });
}


// ======================================
// 7. PANEL DEV (RESET PROGRESS)
// ======================================
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.altKey && e.key === "d") {
        const panel = document.getElementById("devPanel");
        if (panel) {
            panel.style.display = panel.style.display === "none" ? "block" : "none";
        }
    }
});

// Tombol reset
document.addEventListener("DOMContentLoaded", function () {
    const btnReset = document.getElementById("btnResetDev");

    if (btnReset) {
        btnReset.addEventListener("click", function () {
            if (confirm("Yakin reset semua progres siswa pertemuan 2?")) {
                localStorage.removeItem("lesson2_materi");
                localStorage.removeItem("lesson2_video");
                localStorage.removeItem("lesson2_done");

                alert("Progress pertemuan 2 berhasil direset!");
                location.reload();
            }
        });
    }
});
