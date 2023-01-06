// ===== TOGGLE UNTUK BACKGROUND PADA NAVBAR
$(window).scroll(function() {
  $('.navbar').toggleClass('scroll', $(this).scrollTop()>60);
})


// ===== ANIMASI UNTUK AOS ANIMATION
const contentTitle = document.querySelectorAll('.content-title')
contentTitle.forEach((title) => {
  title.dataset.aos = 'fade-right';
});

const skillTitle = document.querySelectorAll('.skill-item')
skillTitle.forEach((skillTitle, i) => {
  skillTitle.dataset.aos = 'fade-right';
  skillTitle.dataset.aosAnchor = '.skills-title';
  skillTitle.dataset.aosDelay = i * 500;
});

const progressBar = document.querySelectorAll('.progress-bar')
progressBar.forEach((progressBar, i) => {
  progressBar.dataset.aos = 'fade-right';
  progressBar.dataset.aosAnchor = '.skills-title';
  progressBar.dataset.aosDelay = i * 700;
});

AOS.init({
  once: true
});