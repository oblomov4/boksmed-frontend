const catalogBtn = document.querySelector('.header__top-catalog');
const catalogMenu = document.querySelector('.catalog-menu');
const catalogMenuLinks = document.querySelectorAll('.catalog-menu-link');
const catalogMenuSubmenuAll = document.querySelectorAll('.catalog-menu-submenu');

catalogBtn.onclick = (e) => {
  catalogMenu.classList.toggle('show');
};

catalogMenuLinks.forEach((elem, index) => {
  elem.onclick = (e) => {
    document.querySelector('.active').classList.remove('active');
    elem.classList.add('active');

    catalogMenuSubmenuAll.forEach((submenu) => {
      if (submenu.classList.contains('show2')) {
        submenu.classList.remove('show2');
      }
    });

    catalogMenuSubmenuAll[index].classList.add('show2');
  };
});

document.body.addEventListener('click', (e) => {
  if (!e.target.closest('.catalog-menu') && !e.target.closest('.header__top-catalog')) {
    catalogMenu.classList.remove('show');
  } else return;
});
