document.getElementById('themeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
});

// Set initial theme
document.body.classList.add('light-theme');

