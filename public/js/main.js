// SIDEBAR TOGGLE ANIMATION
const sidebar = document.querySelector('#sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
  if (sidebar.style.left == '-300px') {
    sidebarToggle.innerHTML = '<';
    sidebar.style.left = '0px';
  } else {
    sidebarToggle.innerHTML = '>';
    sidebar.style.left = '-300px';
  }
});
