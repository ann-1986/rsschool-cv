window.onload = function() {
  const links = document.querySelectorAll('nav a');

  for (let link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
};
