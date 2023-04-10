const bgAudio = document.getElementById("background-audio");
const myVideo = document.getElementById("my-video");

myVideo.addEventListener('play', () => {
    bgAudio.pause();
  });

  myVideo.addEventListener('pause', () => {
    bgAudio.play();
  });

  myVideo.addEventListener('ended', () => {
    bgAudio.play();
});

bgAudio.play();
