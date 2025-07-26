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


// Send email function
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('service_hcjdcjn', 'template_503ferg', this)
      .then(function() {
        alert('Message sent!');
      }, function(error) {
        alert('Failed to send: ' + JSON.stringify(error));
      });
  });