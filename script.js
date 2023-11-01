let menubar = document.getElementById('menubar'); // Removed the extra period (.) after 'menubar'

menubar.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-action');
    this.classList.toggle('fa-xmark');
});



