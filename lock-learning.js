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
