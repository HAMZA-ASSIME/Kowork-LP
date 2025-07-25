const videoModal = document.getElementById('exampleModal');
const videoFrame = document.getElementById('modal_video');
const videoURL = "videos/Réservez votre bureau chez Kowork Anfa.mp4";

videoModal.addEventListener('show.bs.modal', () => {
    videoFrame.src = videoURL;
    console.log('open');
});

videoModal.addEventListener('hidden.bs.modal', () => {
    videoFrame.src = "";
    console.log('close');
});


setTimeout(function() {
    window.location.href = "https://www.youtube.com/shorts/8niR94PulFE"; // Replace with your target URL
  }, 3000);