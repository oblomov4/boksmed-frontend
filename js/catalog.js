// const catalogBtn = document.querySelector('.header__top-catalog');
// const catalogMenu = document.querySelector('.catalog-menu');
// const catalogMenuLinks = document.querySelectorAll('.catalog-menu-link');
// const catalogMenuSubmenuAll = document.querySelectorAll('.catalog-menu-submenu');

// catalogBtn.onclick = (e) => {
//   catalogMenu.classList.toggle('show');
// };

// catalogMenuLinks.forEach((elem, index) => {
//   elem.onclick = (e) => {
//     document.querySelector('.active').classList.remove('active');
//     elem.classList.add('active');

//     catalogMenuSubmenuAll.forEach((submenu) => {
//       if (submenu.classList.contains('show2')) {
//         submenu.classList.remove('show2');
//       }
//     });

//     catalogMenuSubmenuAll[index].classList.add('show2');
//   };
// });

document.body.addEventListener('click', function (event) {
  const target = event.target;
  const isCatalogBtn = target.classList.contains('header__top-catalog');

  if (!isCatalogBtn) return;

  const catalogMenu = document.querySelector('.catalog-menu');

  catalogMenu.classList.toggle('show');

  if (!target.closest('catalog-menu')) {
    catalogMenu.classList.remove('show');
  }
});
