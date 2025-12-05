const nextLesson = document.getElementById("nextLesson");

if (materiDibaca && videoSelesai) {
  nextLesson.style.pointerEvents = "auto";
  nextLesson.style.opacity = "1";
} else {
  nextLesson.style.pointerEvents = "none";
  nextLesson.style.opacity = "0.4";
}
