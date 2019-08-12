// SIDEBAR TOGGLE ANIMATION
const sidebar = document.querySelector('#sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

function toggleSidebar() {
  if (sidebar.style.left == '-300px') {
    sidebarToggle.innerHTML = '<';
    sidebar.style.left = '0px';
    sidebarToggle.style.left = '299px';
  } else {
    sidebarToggle.innerHTML = '>';
    sidebar.style.left = '-300px';
    sidebarToggle.style.left = '-1px';
  }
}

sidebarToggle.addEventListener('click', () => {
  toggleSidebar();
});
