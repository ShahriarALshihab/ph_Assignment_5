document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('backdrop-blur-md', 'bg-opacity-10');
      } else {
        navbar.classList.remove('backdrop-blur-md', 'bg-opacity-10'); 
      }
    });
  });

