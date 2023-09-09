var audio;

document.querySelector("#play").addEventListener("click", function () {
  if (audio == undefined) {
    playAudio();
  } else {
    audio.pause();
    playAudio();
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  if (audio) {
    audio.pause();
  }
});

function playAudio(text) {
  text = "audio/bewaja_bewaja.mp3";
  audio = new Audio(text);
  audio.play();
}

