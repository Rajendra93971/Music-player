let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playPause = document.getElementById("play-pause");
let actionIcon = document.getElementById("action");

song.addEventListener("loadedmetadata", () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

playPause.addEventListener("click", () => {
  if (actionIcon.classList.contains("fa-play")) {
    song.play();
    actionIcon.classList.remove("fa-play");
    actionIcon.classList.add("ri-pause-circle-fill");
  } else {
    song.pause();
    actionIcon.classList.remove("ri-pause-circle-fill");
    actionIcon.classList.add("fa-play");
  }
});

// if (song.play()) {
// 	setInterval(() => {
// 		progress.value = song.currentTime;
// 	}, 500);
// }
song.onplaying = function () {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
};
progress.addEventListener("change", () => {
  song.play();
  song.currentTime = progress.value;
  actionIcon.classList.add("ri-pause-circle-fill");
  actionIcon.classList.remove("fa-play");
});

// progress.onchange = function () {
// 	song.play();
// 	song.currentTime = progress.value;
// 	ctrlIcon.classList.add("fa-pause");
// 	ctrlIcon.classList.remove("fa-play");
// };
