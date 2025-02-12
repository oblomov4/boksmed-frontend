const swiperOne = new Swiper('.swiperOne', {
  // Optional parameters
  loop: true,
  effect: 'fade',

  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

const swiperTwo = new Swiper('.swiperTwo', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 12,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.new__next',
    prevEl: '.new__prev',
  },
});

//Медецинское оборудование
const equipmentBoxs = document.querySelectorAll('.equipment__box');
const showEquipment = document.getElementById('show-equipment');

if (showEquipment) {
  equipmentBoxs.forEach((elem, index) => {
    if (index >= 5) {
      elem.classList.add('hidden');
    }
  });

  showEquipment.onclick = (e) => {
    if (showEquipment.textContent.trim() == 'скрыть') {
      // alert('скрыть');
      equipmentBoxs.forEach((elem, index) => {
        if (index >= 5) {
          elem.classList.remove('show');
          elem.classList.add('hidden');
        }
      });
      showEquipment.textContent = 'показать все медицинское оборудование';
      showEquipment.classList.remove('rotate-0');
    } else {
      equipmentBoxs.forEach((elem) => {
        if (elem.classList.contains('hidden')) {
          elem.classList.remove('hidden');
          elem.classList.add('show');
        }
      });
      showEquipment.textContent = 'скрыть';
      showEquipment.classList.add('rotate-0');
    }
  };
}
