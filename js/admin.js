const btnSideBarOpen = document.querySelector('.admin-container-sidebar-btn');

const sidebar = document.querySelector('.sidebar');

const btnSidebarClose = document.querySelector('.sidebar__close');

btnSideBarOpen.onclick = () => {
  sidebar.classList.add('show');
};

btnSidebarClose.onclick = () => {
  sidebar.classList.remove('show');
};
