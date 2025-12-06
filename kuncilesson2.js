// ---- CEK STATUS PERTEMUAN ----
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btnSelesai");

    // Jika sudah selesai sebelumnya
    if (localStorage.getItem("lesson2_done") === "true") {
        btn.textContent = "Pertemuan Sudah Ditandai ✓";
        btn.classList.add("disabled");
        btn.disabled = true;
    }

    // ---- LOGIKA KETIKA TOMBOL DITEKAN ----
    btn.addEventListener("click", function () {

        // Tandai selesai
        localStorage.setItem("lesson2_done", "true");

        // Ubah tampilan tombol
        btn.textContent = "Pertemuan Sudah Ditandai ✓";
        btn.classList.add("disabled");
        btn.disabled = true;

        // Opsional: notifikasi
        alert("Pertemuan 2 berhasil ditandai selesai!");
    });

});
