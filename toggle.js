// Toggle functionality for boxes
const toggleButtons = document.querySelectorAll('.box-toggle');
toggleButtons.forEach(button => {
  button.addEventListener('click', function() {
    const content = this.closest('.box').querySelector('.box-content');
    
    if (content.classList.contains('show')) {
      content.classList.remove('show');
      content.style.maxHeight = null; // Reset max-height
    } else {
      content.classList.add('show');
      content.style.maxHeight = content.scrollHeight + "px"; // Set max-height
    }
  });
});

// Sliding menu functionality
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
  if (menu.style.right === "0px") {
    menu.style.right = "-250px"; // Hide the menu
  } else {
    menu.style.right = "0px"; // Show the menu
  }
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.style.right = "-250px"; // Hide the menu
  }
});
