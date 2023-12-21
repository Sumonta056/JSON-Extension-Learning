const AudioData = {
  Audios: [
    "audio/bewaja_bewaja.mp3",
    "audio/Thoda Thoda.mp3",
    "audio/Tumse Mohabbat Hai.mp3",
    "audio/Tenu Leke.mp3",
    "audio/Poran Jai Jolia Re.mp3",
    "audio/Tooh.mp3",
    "audio/Ranjha.mp3",
    "audio/Chand Sifarish.mp3",
    "audio/Hey Shona.mp3",
    "audio/Falak Tak.mp3",
    "audio/Maula Mere Maula.mp3",
    "audio/Sarki Chunnariya Re Zara Zara.mp3",
    "audio/Tu aake dekh le.mp3",
    "audio/Paglu.mp3",
    "audio/Mohombi.mp3",
    "audio/Kya Baat Ay.mp3",
    "audio/Copines.mp3",
    "audio/Kiya Kiya.mp3",
  ],
};

var audio;

document.querySelector("#play").addEventListener("click", function () {
  if (audio == undefined) {
    playAudio();

    document.getElementById("greeting").style.display = "block";
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

function playAudio() {
  const Audios = AudioData.Audios;
  const randomIndex = Math.floor(Math.random() * Audios.length);
  const randomAudio = Audios[randomIndex];

  console.log(randomAudio);

  text = randomAudio;
  audio = new Audio(text);
  audio.play();
}
