const swiperOne = new Swiper('.swiperOne', {
  // Optional parameters
  loop: true,
  effect: 'fade',

  // autoplay: {
  //   delay: 5000,
  // },

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

  breakpoints: {
    110: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    835: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1210: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

//Медецинское оборудование index
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

// about
const aboutBoxs = document.querySelectorAll('.about__box');
const aboutBtn = document.getElementById('about');
const modalWrapper = document.querySelectorAll('.about__modal-wrapper');

if (aboutBtn) {
  aboutBoxs.forEach((elem, index) => {
    if (index >= 6) {
      elem.classList.add('hidden');
    }
  });

  aboutBtn.onclick = (e) => {
    if (aboutBtn.textContent.trim() == 'скрыть') {
      // alert('скрыть');
      aboutBoxs.forEach((elem, index) => {
        if (index >= 6) {
          elem.classList.remove('show');
          elem.classList.add('hidden');
        }
      });
      aboutBtn.textContent = 'показать еще';
      aboutBtn.classList.remove('rotate-0');
    } else {
      aboutBoxs.forEach((elem) => {
        if (elem.classList.contains('hidden')) {
          elem.classList.remove('hidden');
          elem.classList.add('show');
        }
      });
      aboutBtn.textContent = 'скрыть';
      aboutBtn.classList.add('rotate-0');
    }
  };

  aboutBoxs.forEach((elem, index) => {
    elem.onclick = (e) => {
      const aboutBox = elem;
      aboutBox.classList.add('about__box-none-hover');

      const find = modalWrapper[index];
      find.classList.add('active');

      document.body.style.overflowY = 'hidden';

      const pelena = document.createElement('div');
      pelena.classList.add('pelena');
      document.body.append(pelena);

      const modalExit = find.querySelector('.about__modal-btn');

      modalExit.onclick = (e) => {
        aboutBox.classList.remove('about__box-none-hover');

        find.classList.remove('active');

        document.body.style.overflowY = '';

        pelena.remove();
      };
    };
  });
}

// chat

const btnChat = document.getElementById('btn-chat');
const chat = document.querySelector('.chat');

if (btnChat) {
  btnChat.onclick = (e) => {
    chat.classList.add('active');

    const chatExit = document.getElementById('chat-exit');

    chatExit.onclick = () => {
      chat.classList.remove('active');
    };
  };
}

const collapsibleSectionHeaders = document.querySelectorAll('.collapsible-section__header');
