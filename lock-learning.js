// Ambil card pertemuan
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

// Cek status progress dari localStorage
const done1 = localStorage.getItem("lesson1_done");
const done2 = localStorage.getItem("lesson2_done");

// -------------------------
// LOGIKA PENGUNCIAN
// -------------------------

// Jika pertemuan 1 belum selesai → kunci pertemuan 2 & 3
if (!done1) {
  p2.classList.add("locked");
  p3.classList.add("locked");
}

// Jika pertemuan 1 selesai, tapi pertemuan 2 belum selesai → kunci pertemuan 3
if (done1 && !done2) {
  p3.classList.add("locked");
}
// === OPEN DEVELOPER PANEL (CTRL + ALT + D) ===
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.altKey && e.key === 'd') {
        const panel = document.getElementById("devPanel");
        panel.style.display = (panel.style.display === "none") ? "block" : "none";
    }
});

// === RESET PROGRESS BUTTON ===
document.addEventListener("DOMContentLoaded", function() {
    const btnReset = document.getElementById("btnResetDev");

    if (btnReset) {
        btnReset.addEventListener("click", function() {
            if (confirm("Reset semua progres siswa?")) {

                localStorage.removeItem("lesson1_done");
                localStorage.removeItem("lesson2_done");
                localStorage.removeItem("lesson3_done");

                alert("Progres berhasil direset!");
                location.reload();
            }
        });
    }
});

