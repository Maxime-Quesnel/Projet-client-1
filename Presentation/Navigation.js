const burgerbtn = document.querySelector('.burger-btn');
const toggleMenu = document.querySelector('.toggle-menu');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.a-nav');
let isVisible = false;

burgerbtn.addEventListener('click', () => {
  burgerbtn.classList.toggle('open');

  if (burgerbtn.classList.contains('open') && !isVisible) {
    toggleMenu.style.display = 'block';
    gsap.to('.bars-1', {
      duration: 0.75,
      y: 5,
      x: 5,
      rotate: 50
    });

    gsap.to('.bars-2', {
      duration: 1,
      rotate: -50,
      ease: 'elastic'
    });

    gsap.to('.bars-3', {
      duration: 0.75,
      y: -6,
      x: -2,
      rotate: 50
    });
    isVisible = true;
  } else {
    gsap.to('.bars-1', {
      duration: 0.75,
      y: 0,
      x: 0,
      rotate: 0
    });
    gsap.to('.bars-2', {
      duration: 1,
      rotate: 0,
      ease: 'elastic'
    });
    gsap.to('.bars-3', {
      duration: 0.75,
      y: 0,
      x: 0,
      rotate: 0
    });
    toggleMenu.style.display = 'none';
    isVisible = false;
  }
});

window.onscroll = function() {
  if (window.pageYOffset > 70) {
    navbar.classList.add('scrolled');
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = '#000';
    }
  } else {
    navbar.classList.remove('scrolled');
    for (let c = 0; c < links.length; c++) {
      links[c].style.color = '#fff';
    }
  }
};
