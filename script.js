// Vertical menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu li a');
  
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Navigerar till:', this.textContent.trim());
      
      // Stäng menyn efter klick
      const menuCheckbox = document.getElementById('menu-open');
      menuCheckbox.checked = false;
      
      // Här kan du lägga till navigation logik
      // Till exempel: window.location.href = this.getAttribute('href');
    });
  });
});

// Prevent the logo link from navigating (avoids opening folder when using file://)
document.addEventListener('DOMContentLoaded', function() {
  const logoLink = document.querySelector('.logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', function(e) {
      e.preventDefault();
      // do nothing — logo is non-navigable in this demo
    });
  }
});
