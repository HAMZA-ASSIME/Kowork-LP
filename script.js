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

// social media links
document.querySelector('.yt_text').addEventListener('click',function(){
    window.open('https://www.youtube.com/@kowork1683', '_blank');
});
document.querySelector('.in_text').addEventListener('click',function(){
    window.open('https://www.linkedin.com/company/koworkafrica', '_blank');
});
document.querySelector('.insta_text').addEventListener('click',function(){
    window.open('https://www.instagram.com/kowork_africa', '_blank');
});
document.querySelector('.fb_text').addEventListener('click',function(){
    window.open('https://web.facebook.com/KoworkAfrica/?_rdc=1&_rdr', '_blank');
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