// Choices
const filter = document.querySelector('#filter');
const choicesGallery = new Choices(filter, {
  searchEnabled: false,
  itemSelectText: '',
  choices:[{
    value: 'Живопись',
  },
  {
    value: 'Рисунок',
  },
  {
    value: 'Скульптура',
  }]
});

// Swiper
gallerySwiper = new Swiper('.section-gallery__swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  hideOnClick: true,
  slidesPerView:3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  slidesPerColumnFill: "row",
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 35,
      slidesPerColumn: 1,
    },

    501: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },

    636: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },

    1521: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },
  }
});

projectsSwiper = new Swiper('.section-projects__swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  hideOnClick: true,
  spaceBetween: 50,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.section-projects__swiper-btn-next',
  prevEl: '.section-projects__swiper-btn-prev',
  },

  autoHeright: false,

  slidesPerView: 3,

  initialSlide: 0,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 34,
      slidesPerGroup: 1,
    },

    501: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    981: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});

// Tooltip
tippy('#oneTooltip', {
    content: 'Пример современных тенденций - современная методология разработки',
    delay: [150, 150],
    trigger: 'click',
  });
  tippy('#twoTooltip', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    delay: [150, 150],
    trigger: 'click',
  });
  tippy('#threeTooltip', {
    content: 'В стремлении повысить качество',
    delay: [150, 150],
    trigger: 'click',
  });

// Inputmask and validate
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.section-contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },

  messages: {
    name: {
      required: 'Обязательное поле для заполнения',
      minLength: 'Количество символов не может быть менее 2',
      maxLength: 'Количество символов не может быть более 30'
    },
    tel: {
      required: 'Обязательное поле для заполнения',
      function: 'Недопустимый формат'
    },
  },

  colorWrong: '#D11616',
});

// Map
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.75846806898367,37.60108849999989],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 15,
  });

  var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-location.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

// Accessibility
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.choices').setAttribute('aria-label', "Выбрать галерею");
  document.querySelector('.swiper-button-next').setAttribute('aria-label', "Следующий слайд");
  document.querySelector('.swiper-button-prev').setAttribute('aria-label', "Предыдущий слайд");
  document.querySelector('.section-editions__swiper-btn-next').setAttribute('aria-label', "Следующий слайд");
  document.querySelector('.section-editions__swiper-btn-prev').setAttribute('aria-label', "Предыдущий слайд");
  document.querySelector('.section-projects__swiper-btn-next').setAttribute('aria-label', "Следующий слайд");
  document.querySelector('.section-projects__swiper-btn-prev').setAttribute('aria-label', "Предыдущий слайд");
});


// Media mobile
function swipers() {
  if (window.matchMedia("(max-width: 750px)").matches) {
    document.querySelector('.section-events__list').classList.add('swiper-wrapper');
    document.querySelectorAll('.section-events__item').forEach((event) => event.classList.add('swiper-slide'));
    document.querySelector('.section-editions__swiper-container').classList.remove('swiper-container');
    document.querySelector('.section-editions__list').classList.remove('swiper-wrapper');
    document.querySelectorAll('.section-editions__item').forEach((edition) => edition.classList.remove('swiper-slide'));
  } else {
    document.querySelector('.section-events__list').classList.remove('swiper-wrapper');
    document.querySelectorAll('.section-events__item').forEach((event) => event.classList.remove('swiper-slide'));
    document.querySelector('.section-editions__swiper-container').classList.add('swiper-container');
    document.querySelector('.section-editions__list').classList.add('swiper-wrapper');
    document.querySelectorAll('.section-editions__item').forEach((edition) => edition.classList.add('swiper-slide'));
  }
}

window.addEventListener("resize", swipers); 
window.addEventListener("load", swipers);

let eventsSwiper = null;
let editionsSwiper = null;
let mediaQuerySize = 750;

function editionsSwiperInit () {
  if (!editionsSwiper) {
    editionsSwiper = new Swiper('.section-editions__swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      hideOnClick: true,
      spaceBetween: 50,
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      autoHeright: false,
    
      slidesPerView: 3,
    
      initialSlide: 0,
    
      breakpoints: {
        750: {
          slidesPerView: 2,
          spaceBetween: 34,
          slidesPerGroup: 2,
          },
    
        981: {
          slidesPerView: 2,
          spaceBetween: 49,
          slidesPerGroup: 2,
        },
    
        1370: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      }
    });
  }
}

function eventsSwiperInit () {
  if (!eventsSwiper) {
    eventsSwiper = new Swiper('.section-events__swiper-container', {
      direction: 'horizontal',
      hideOnClick: true,
      spaceBetween: 100,

      pagination: {
        el: '.section-events__swiper-pagination',
        type: 'bullets',
      },
    });
  }
}

function eventsSwiperDestroy () {
  if (eventsSwiper) {
    eventsSwiper.destroy();
    eventsSwiper = null;
  }
}

function editionsSwiperDestroy () {
  if (editionsSwiper) {
    editionsSwiper.destroy();
    editionsSwiper = null;
  }
}

$(window).on('load resize', function () {
  // Берём текущую ширину экрана
  var windowWidth = $(this).innerWidth();
  
  // Если ширина экрана меньше или равна mediaQuerySize(750)
  if (windowWidth <= mediaQuerySize) {
    // Инициализировать слайдер если он ещё не был инициализирован
    eventsSwiperInit();
    editionsSwiperDestroy();
  } else {
    // Уничтожить слайдер если он был инициализирован
    eventsSwiperDestroy();
    editionsSwiperInit();
  }
});

function choicesMobile() {
  if (window.matchMedia('(max-width: 500px)').matches) {
    choicesGallery.clearChoices();
    choicesGallery.setValue([
      { value: 'Техника'},
      { value: 'Направление'},
      { value: 'Автор'},
    ]);
  }
}

window.addEventListener("resize", choicesMobile); 
window.addEventListener("load", choicesMobile);