
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
  document.getElementById("modalImage").src = "";
}
// Smooth scroll for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('active');
});


function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imageSrc;
  modal.classList.remove("hidden");
}

   // Toggle mute for the video
// Toggle mute/unmute
function toggleMute(videoId, event) {
  event.stopPropagation(); // prevent modal from opening
  const video = document.getElementById(videoId);
  const btn = event.currentTarget;
  video.muted = !video.muted;
  btn.textContent = video.muted ? "🔊" : "🔇";
}

// Open modal
function openVideo(src) {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  modal.classList.add('active');
  modalVideo.src = src;
  modalVideo.play();
}

// Close modal
function closeVideo() {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  modal.classList.remove('active');
  modalVideo.pause();
  modalVideo.src = "";
}

// Close modal on click outside
window.addEventListener('click', function(e) {
  const modal = document.getElementById('videoModal');
  if (e.target === modal) {
    closeVideo();
  }
});


    function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = src;
    modal.classList.remove("hidden");

    // Close modal when clicking outside the image
    modal.onclick = function (event) {
      if (event.target === modal) {
        closeModal();
      }
    };
  }

  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.add("hidden");
    document.getElementById("modalImage").src = "";
  }

    const video = document.getElementById('mainVideo');

  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function toggleMute() {
    video.muted = !video.muted;
  }
  document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.service-image');
  const modal = document.createElement('div');
  modal.classList.add('image-modal');
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img src="" alt="Full View" />
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.close');

  images.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    modalImg.src = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeBtn.click();
    }
  });
});

  


