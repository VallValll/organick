/******/ var __webpack_modules__ = ({

/***/ 123:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(69);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);
// EXTERNAL MODULE: ../node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__(67);
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);
;// CONCATENATED MODULE: ./scripts/modules/actual-year.js
/**
* Модуль "Актуальный год"
*/

const init = () => {
  const year = new Date().getFullYear();
  if (document.querySelector('[data-actual-year]')) {
    document.querySelectorAll('[data-actual-year]').forEach(item => {
      item.textContent = year;
    });
  }
};
/* harmony default export */ const actual_year = ({
  init
});
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(122);
// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(121);
// EXTERNAL MODULE: ../node_modules/ua-parser-js/src/ua-parser.js
var ua_parser = __webpack_require__(66);
var ua_parser_default = /*#__PURE__*/__webpack_require__.n(ua_parser);
;// CONCATENATED MODULE: ./scripts/modules/ua-parser.js



const linuxOS = ['fedora', 'debian', 'gentoo', 'linpus', 'mageia', 'mandriva', 'meego', 'mint', 'pclinuxos', 'redhat', 'sailfish', 'slackware', 'suse', 'tizen', 'ubuntu', 'vectorlinux'];
let parserResult = null;
let classesArray = [];
const addClass = (key, value) => {
  value = value.toString().toLowerCase().replace(/[\s.]/g, '-');
  classesArray.push("is-" + key + "-" + value);
};
const ua_parser_init = () => {
  parserResult = new (ua_parser_default())().getResult();
  if (classesArray.length) {
    document.documentElement.classList.remove(...classesArray);
    classesArray = [];
  }
  if (parserResult.browser.name) {
    addClass('browser', parserResult.browser.name);
  }
  if (parserResult.os.name && linuxOS.indexOf(parserResult.os.name.toLowerCase()) >= 0) {
    addClass('os', 'linux');
  }
  if (parserResult.os.name) {
    addClass('os', parserResult.os.name);
  }
  document.documentElement.classList.add(...classesArray);
};
const resize = ua_parser_init;
/* harmony default export */ const modules_ua_parser = ({
  init: ua_parser_init,
  resize
});
;// CONCATENATED MODULE: ./scripts/modules/vh-fix.js
/**
* Модуль исправления багов на iOs устройствах
* определяет высоту экрана и при любом изменении переопределяет её
* в стилях используйте кастомные стили var(--vh)
*/

const isSupported = () => !(!!window.MSInputMethodContext && !!document.documentMode);
const setProp = () => {
  document.documentElement.style.setProperty('--vh', innerHeight + "px");
};
const vh_fix_resize = () => {
  if (!isSupported()) {
    return;
  }
  setProp();
};
const vh_fix_init = () => {
  if (!isSupported()) {
    return;
  }
  setProp();
  setTimeout(setProp, 1000);
  window.addEventListener('load', setProp);
};
/* harmony default export */ const vh_fix = ({
  init: vh_fix_init,
  resize: vh_fix_resize
});
;// CONCATENATED MODULE: ./data/general.js
/* globals GLOBAL_DOMAIN, GLOBAL_PATH */

const domain = "/";
const baseDir = "/";
/* harmony default export */ const general = ({
  domain,
  baseDir,
  title: '',
  description: '',
  keywords: '',
  image: '',
  link: {
    appleTouchIcon180x180: baseDir + "assets/favicon/apple-touch-icon.png",
    icon32x32: baseDir + "assets/favicon/favicon-32x32.png",
    icon192x192: baseDir + "assets/favicon/android-chrome-192x192.png",
    icon16x16: baseDir + "assets/favicon/favicon-16x16.png",
    // manifest: `${baseDir}site.webmanifest`,
    maskIcon: {
      href: baseDir + "assets/favicon/safari-pinned-tab.svg",
      color: '#69b0c4'
    },
    icon: baseDir + "assets/favicon/favicon.ico"
  },
  meta: {
    msapplicationTileColor: '#2d89ef',
    msapplicationTileImage: baseDir + "assets/favicon/mstile-144x144.png",
    msapplicationConfig: baseDir + "assets/browserconfig.xml",
    themeColor: '#ffffff',
    ogImageType: 'image/jpeg'
    // ogImageHeight: 600, // Размеры изображения шеринга
    // ogImageWidth: 1200, // Размеры изображения шеринга
  }
});
;// CONCATENATED MODULE: ./data/data.js

const data = {
  general: general,
  home: {
    meta: {
      title: 'Home',
      description: 'home description',
      image: general.baseDir + "assets/images/logo.jpg",
      keywords: []
    }
  },
  article: {
    meta: {
      title: 'page article',
      description: 'article description',
      image: general.baseDir + "image/share/share.jpg",
      keywords: []
    }
  },
  about: {
    meta: {
      title: 'About',
      description: 'page about us',
      image: general.baseDir + "assets/images/logo.jpg",
      keywords: []
    }
  },
  shop: {
    meta: {
      title: 'Shop',
      description: 'page shop',
      image: general.baseDir + "image/share/share.jpg",
      keywords: []
    }
  },
  shopSingle: {
    meta: {
      title: 'Shop-Single',
      description: 'page shop-single',
      image: general.baseDir + "image/share/share.jpg",
      keywords: []
    }
  },
  services: {
    meta: {
      title: 'Services',
      description: 'page services',
      image: general.baseDir + "image/share/share.jpg",
      keywords: []
    }
  },
  contacts: {
    meta: {
      title: 'Contacts',
      description: 'page contacts',
      image: general.baseDir + "image/share/share.jpg",
      keywords: []
    }
  },
  products: [{
    category: 'Vegetable',
    section4: true,
    shop: true,
    shopSingle: true,
    img: general.baseDir + "assets/images/home/photo-5.jpg",
    name: 'Calabrese Broccoli',
    price: {
      old: '20.00',
      current: '13.00'
    }
  }, {
    category: 'Fresh',
    section4: true,
    shop: true,
    shopSingle: true,
    img: general.baseDir + "assets/images/home/photo-6.jpg",
    name: 'Fresh Banana Fruites',
    price: {
      old: '20.00',
      current: '14.00'
    }
  }, {
    category: 'Millets',
    section4: true,
    shop: true,
    shopSingle: true,
    img: general.baseDir + "assets/images/home/photo-7.jpg",
    name: 'White Nuts',
    price: {
      old: '20.00',
      current: '15.00'
    }
  }, {
    category: 'Vegetable',
    section4: true,
    shop: true,
    shopSingle: true,
    img: general.baseDir + "assets/images/home/photo-8.jpg",
    name: 'Vegan Red Tomato',
    price: {
      old: '20.00',
      current: '17.00'
    }
  }, {
    category: 'Health',
    section4: true,
    shop: true,
    img: general.baseDir + "assets/images/home/photo-9.jpg",
    name: 'Mung Bean',
    price: {
      old: '20.00',
      current: '11.00'
    }
  }, {
    category: 'Nuts',
    section4: true,
    shop: true,
    img: general.baseDir + "assets/images/home/photo-10.jpg",
    name: 'Brown Hazelnut',
    price: {
      old: '20.00',
      current: '12.00'
    }
  }, {
    category: 'Fresh',
    section4: true,
    shop: true,
    img: general.baseDir + "assets/images/home/photo-11.jpg",
    name: 'Eggs',
    price: {
      old: '20.00',
      current: '17.00'
    }
  }, {
    category: 'Fresh',
    section4: true,
    shop: true,
    img: general.baseDir + "assets/images/home/photo-12.jpg",
    name: 'Zelco Suji Elaichi Rusk',
    price: {
      old: '20.00',
      current: '15.00'
    }
  }, {
    category: 'Vegetable',
    section6: true,
    img: general.baseDir + "assets/images/home/photo-16.jpg",
    name: 'Mung Bean',
    price: {
      old: '20.00',
      current: '11.00'
    }
  }, {
    category: 'Vegetable',
    section6: true,
    img: general.baseDir + "assets/images/home/photo-17.jpg",
    name: 'Brown Hazelnut',
    price: {
      old: '20.00',
      current: '12.00'
    }
  }, {
    category: 'Vegetable',
    section6: true,
    img: general.baseDir + "assets/images/home/photo-18.jpg",
    name: 'Onion',
    price: {
      old: '20.00',
      current: '17.00'
    }
  }, {
    category: 'Vegetable',
    section6: true,
    img: general.baseDir + "assets/images/home/photo-19.jpg",
    name: 'Cabbage',
    price: {
      old: '20.00',
      current: '17.00'
    }
  }, {
    category: 'Health',
    section6: true,
    shop: true,
    img: general.baseDir + "assets/images/shop/section-1-1.jpg",
    name: 'Mung Bean',
    price: {
      old: '20.00',
      current: '11.00'
    }
  }, {
    category: 'Nuts',
    section6: true,
    shop: true,
    img: general.baseDir + "assets/images/shop/section-1-2.jpg",
    name: 'White Hazelnut',
    price: {
      old: '20.00',
      current: '12.00'
    }
  }, {
    category: 'Fresh',
    section6: true,
    shop: true,
    img: general.baseDir + "assets/images/shop/section-1-3.jpg",
    name: 'Fresh Corn',
    price: {
      old: '20.00',
      current: '17.00'
    }
  }, {
    category: 'Fresh',
    section6: true,
    shop: true,
    img: general.baseDir + "assets/images/shop/section-1-4.jpg",
    name: 'Organic Almonds',
    price: {
      old: '20.00',
      current: '15.00'
    }
  }]
};
/* harmony default export */ const data_data = (data);
;// CONCATENATED MODULE: ./scripts/helpers/get-scrollbar-width.js
let scrollDiv;
const getScrollbarWidth = function (ignore) {
  if (ignore === void 0) {
    ignore = false;
  }
  const width = window.innerWidth - document.documentElement.clientWidth;
  if ((width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) && !ignore) {
    return width;
  }
  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }
  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__(129);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__(130);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__(131);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__(132);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__(133);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__(134);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__(135);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__(136);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__(137);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__(138);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__(139);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__(140);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__(141);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__(142);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__(143);
// EXTERNAL MODULE: ../node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__(144);
// EXTERNAL MODULE: ../node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
var bodyScrollLock_esm = __webpack_require__(145);
;// CONCATENATED MODULE: ./scripts/helpers/lock-scroll.js


















let dataScrollLocks;
const lockScroll = (state, $element, name) => {
  if (typeof dataScrollLocks === 'undefined') {
    dataScrollLocks = new Set();
  }
  let scrollLocks = dataScrollLocks;
  if (state) {
    if (typeof name === 'string') {
      scrollLocks.add(name);
    }
    bodyScrollLock.disableBodyScroll($element, {
      reserveScrollBarGap: false
    });
    setTimeout(() => {
      document.documentElement.classList.add('is-lock-scroll');
    }, 0);
  } else {
    if (typeof name === 'string') {
      scrollLocks.delete(name);
    }
    bodyScrollLock.enableBodyScroll($element);
    if (!scrollLocks.size) {
      bodyScrollLock.clearAllBodyScrollLocks();
      document.documentElement.classList.remove('is-lock-scroll');
    }
  }
};
const isScrollLocked = () => {
  return document.documentElement.classList.contains('is-lock-scroll');
};
;// CONCATENATED MODULE: ./scripts/helpers/index.js





const helpers_baseDir = data_data.general.baseDir;
const isDevices = () => innerWidth <= 1024;
const isMobile = () => innerWidth <= 766;
const html = document.querySelector('html');
const clearText = text => text.trim().replace(/\s+/g, ' ');
function isAnimating(state) {
  if (typeof state !== 'undefined') {
    document.documentElement.classList.toggle('is-animating', state);
  }
  return document.documentElement.classList.contains('is-animating');
}
function dataPage(name) {
  if (typeof name !== 'undefined') {
    document.documentElement.setAttribute('data-page', name);
  }
  return document.documentElement.getAttribute('data-page');
}
function throttle(cb, delay) {
  if (delay === void 0) {
    delay = 1000;
  }
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}
function debounce(cb, delay) {
  if (delay === void 0) {
    delay = 1000;
  }
  let timeout;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
function scrollSet(state) {
  if (state) {
    html.classList.add('is-lock-scroll');
  } else {
    html.classList.remove('is-lock-scroll');
  }
}

/**
* Узнать есть доступен ли ховер
* @returns {boolean}
*/
function hasHoverSupport() {
  let hoverSupport;
  if (getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (isDevices()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof html.ontouchstart === 'undefined';
  }
  return hoverSupport;
}
function checkHoverSupport() {
  if (!hasHoverSupport()) {
    html.classList.remove('has-hover');
    html.classList.add('no-hover');
  } else {
    html.classList.add('has-hover');
    html.classList.remove('no-hover');
  }
}

// @demo
// if (!hasHoverSupport()) {
// 	html.removeClass('has-hover').addClass('no-hover');
// } else {
// 	html.removeClass('no-hover').addClass('has-hover');
// }
;// CONCATENATED MODULE: ./scripts/modules/scrollToAnchor.js
// import header from '@components/header/header';

function scrollTo(targetElement) {
  const element = document.querySelector(targetElement);
  // const headerOffset = 0;

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    history.pushState({}, '', targetElement);
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}
const scrollToAnchor_init = () => {
  document.querySelectorAll('.js-to-anchor').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const id = e.currentTarget.getAttribute('href');
      // console.log(id);
      // header.close()

      setTimeout(() => {
        scrollTo(id);
      }, 500);
    });
  });
};
/* harmony default export */ const scrollToAnchor = ({
  init: scrollToAnchor_init
});
;// CONCATENATED MODULE: ./scripts/modules/lazyBlur.js
/* eslint-disable no-underscore-dangle */
/*!
 * lazy-blur.js 0.1.7 - Progressive image loader with SVG blur effect
 * Copyright (c) 2016 Rplus - https://github.com/Rplus/lazy-blur.js
 * License: MIT
 */

// eslint-disable-next-line func-names
let _extends = Object.assign || function (target) {
  for (let i = 1; i < arguments.length; i++) {
    // eslint-disable-next-line prefer-rest-params
    let source = arguments[i];
    for (let key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

// eslint-disable-next-line no-underscore-dangle
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

// eslint-disable-next-line no-redeclare
/* global Image */

let LazyBlur =
/**
	 // * @param  {String}       imgSQuery
	 *         small imgs' className or imgs' DOM array
	 *         default: `.lazy-blur__imgS`
	 *
	 // * @param  {Function}     getImgLSrc
	 *         function for getting imgL source url
	 *         default: `function (imgS) { return imgS.getAttribute('data-src'); }`
	 *
	 // * @param  {String}       eventType
	 *         event of trigger load images
	 *         'click', 'mouseenter', 'scroll' (default)
	 *
	 // * @param  {Number}       scrollThreshold
	 *         distance of scroll threshold (buffer), unit: px
	 *         default: 50
	 *
	 // * @param  {String}       imgLClass
	 *         className of imgL
	 *         default: 'lazy-blur__imgL'
	 *
	 // * @param  {String}       filterSelector
	 *         css selector for SVG filter
	 *         default: `html.svg *:not(.done) > ${opt.imgSQuery}`
	 *
	 // * @param  {Number}       blurSize
	 *         value of svg gaussian blur filter
	 *         default: 20
	 *
	 // * @param  {Function}     onLoad
	 *         after imgL loaded
	 *         default: `addClass('done')` for imgS' parent
	 */

function LazyBlur() {
  // eslint-disable-next-line prefer-rest-params
  let opt = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  _classCallCheck(this, LazyBlur);
  opt.imgSQuery = opt.imgSQuery || '.lazy-blur__imgS';
  opt = _extends({
    imgLClass: 'lazy-blur__imgL',
    filterSelector: "html.svg *:not(.done) > " + opt.imgSQuery,
    getImgLSrc: function getImgLSrc(imgS) {
      return imgS.getAttribute('data-src');
    },
    onLoad: function onLoad(imgS) {
      imgS.parentElement.className += ' done ';
    },
    blurSize: 20,
    scrollThreshold: 50,
    eventType: 'scroll'
  }, opt);
  opt.imgs = [].slice.call(document.querySelectorAll(opt.imgSQuery));

  // skip if no matched img
  if (!opt.imgs.length) {
    return;
  }
  if (typeof opt.onLoad !== 'function') {
    opt.onLoad = false;
  }

  // append svg filter
  let inlineSvg = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;\">\n      <def>\n        <filter id=\"lazy-blur-filter\">\n          <feGaussianBlur stdDeviation=\"" + opt.blurSize + "\"></feGaussianBlur>\n        </filter>\n      </def>\n    </svg>\n    <style>\n      " + opt.filterSelector + " {\n        -webkit-filter: url(\"#lazy-blur-filter\");\n                filter: url(\"#lazy-blur-filter\");\n      }\n    </style>";

  // eslint-disable-next-line func-names
  document.body.appendChild(function () {
    let newEl = document.createElement('div');
    newEl.innerHTML = inlineSvg;
    return newEl;
  }());
  let bindManualEvent = function bindManualEvent(e) {
    // eslint-disable-next-line no-use-before-define
    appendSrcImg(e.target);
  };
  let appendSrcImg = function appendSrcImg(imgS) {
    let imgL = new Image();
    if (opt.onLoad) {
      // eslint-disable-next-line func-names
      imgL.onload = function () {
        opt.onLoad(imgS);
      };
    }
    imgL.className = opt.imgLClass;
    imgL.src = opt.getImgLSrc(imgS);
    imgS.parentNode.insertBefore(imgL, imgS.nextSibling);
    if (opt.eventType !== 'scroll') {
      imgS.removeEventListener(opt.eventType, bindManualEvent);
    }
  };
  let bindScrollEvent = function bindScrollEvent() {
    let getImgPos = function getImgPos() {
      // return if all lazy-blur images loaded
      if (opt.imgsWithPos && !opt.imgsWithPos.length) {
        return;
      }
      opt.imgsWithPos = opt.imgs.map(img => {
        // eslint-disable-next-line no-underscore-dangle
        let _rect = img.getBoundingClientRect();
        // eslint-disable-next-line no-underscore-dangle
        let _offsetY = window.pageYOffset;
        return {
          imgEl: img,
          top: _rect.top + _offsetY,
          bottom: _rect.bottom + _offsetY
        };
      });
    };
    let detectImgsAreInViewport = function detectImgsAreInViewport() {
      // return if all imgs loaded
      if (!opt.imgsWithPos.length) {
        return;
      }

      // eslint-disable-next-line no-underscore-dangle
      let _offsetY = window.pageYOffset;
      // eslint-disable-next-line no-underscore-dangle
      let _vpTop = _offsetY - opt.scrollThreshold;
      // eslint-disable-next-line no-underscore-dangle
      let _vpBottom = _offsetY + window.innerHeight + opt.scrollThreshold;

      // eslint-disable-next-line no-unused-vars
      opt.imgsWithPos = opt.imgsWithPos.filter(imgData => {
        // eslint-disable-next-line max-len
        let isInVp = imgData.bottom < _vpBottom && imgData.bottom > _vpTop || imgData.top > _vpTop && imgData.top < _vpBottom;
        if (isInVp) {
          appendSrcImg(imgData.imgEl);
        }
        return !isInVp;
      });
    };
    getImgPos();
    detectImgsAreInViewport();
    window.addEventListener('scroll', () => {
      detectImgsAreInViewport();
    });
    window.addEventListener('resize', () => {
      getImgPos();
      detectImgsAreInViewport();
    });
  };

  // events for loading img
  // eslint-disable-next-line default-case
  switch (opt.eventType) {
    case 'click':
    case 'mouseenter':
      // eslint-disable-next-line array-callback-return
      opt.imgs.map(img => {
        img.addEventListener(opt.eventType, bindManualEvent);
      });
      break;
    case 'scroll':
      bindScrollEvent();
      break;
  }
};
const lazyBlur_init = () => {
  setTimeout(() => {
    // eslint-disable-next-line no-new
    new LazyBlur({
      filterSelector: '.lazy-blur__imgS'
    });
  }, 100);
};
/* harmony default export */ const lazyBlur = ({
  init: lazyBlur_init
});
// EXTERNAL MODULE: ../node_modules/ninelines-sharing/dist/ninelines-sharing.js
var ninelines_sharing = __webpack_require__(119);
var ninelines_sharing_default = /*#__PURE__*/__webpack_require__.n(ninelines_sharing);
;// CONCATENATED MODULE: ./components/sharing/sharing.js

function sharing_init(container) {
  const page = container ? container : document;
  if (page.querySelector('[data-social]')) {
    const list = page.querySelectorAll('[data-social]');
    Array.prototype.forEach.call(list, item => {
      item.addEventListener('click', e => {
        const social = e.currentTarget.dataset.social;
        const url = location.origin + location.pathname;
        (ninelines_sharing_default())[social](url);
      });
    });
  }
}
/* harmony default export */ const sharing = ({
  init: sharing_init
});
// EXTERNAL MODULE: ../node_modules/swiper/swiper.mjs + 1 modules
var swiper = __webpack_require__(146);
// EXTERNAL MODULE: ../node_modules/swiper/modules/index.mjs + 26 modules
var modules = __webpack_require__(147);
;// CONCATENATED MODULE: ./components/slider/slider.js



function swiperInit(el) {
  const paginationConfig = {
    pagination: {
      el: el.querySelector('.slider__pagination'),
      clickable: true
    }
  };
  return new swiper/* default */.a(el.querySelector('.swiper'), {
    modules: [modules/* Pagination */.b, modules/* Navigation */.a],
    loop: true,
    spaceBetween: 10,
    ...(el.dataset.pagination ? paginationConfig : {}),
    navigation: {
      nextEl: el.querySelector('.slider__button--next'),
      prevEl: el.querySelector('.slider__button--prev')
    },
    breakpoints: {
      1024: {
        spaceBetween: 20
      }
    }
  });
}

// 1. написать вводную ф-ю для свайпера с его конфигурацией и проверкой на наличие

function sliderInit(el) {
  let flagInit = false;
  let swiper = null;
  const onlyDevice = () => {
    return el.dataset.device === 'mobile' ? isMobile() : !isMobile();
  };
  const enabledSwiper = () => {
    swiper = swiperInit(el);
    flagInit = true;
  };
  const disableSwiper = () => {
    swiper.destroy();
    flagInit = false;
  };

  //   2. сделать проверку на десктоп или моб

  if (el.dataset.device) {
    if (onlyDevice()) {
      enabledSwiper();
    }
  } else {
    enabledSwiper();
  }

  // 4. на том или ином экране включать или отключать слайдер
  if (el.dataset.device) {
    window.addEventListener('resize', () => {
      if (onlyDevice() && !flagInit) {
        console.log('mob');
        enabledSwiper();
      } else if (!onlyDevice() && flagInit) {
        console.log('desk');
        disableSwiper();
      }
    });
  }
}
function slider_init() {
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(el => sliderInit(el));
}
/* harmony default export */ const slider = ({
  init: slider_init
});
;// CONCATENATED MODULE: ./components/header/header.js

function header_init() {
  const burger = document.querySelector('.js-burger');
  const header = document.querySelector('.header');
  let isOpen = false;
  let lastScroll = 0;
  let windowHeightOffset = window.innerHeight / 3;
  const close = () => {
    isOpen = false;
    burger.classList.remove('is-active');
    header.classList.remove('is-menu-open');
  };
  const open = () => {
    isOpen = true;
    burger.classList.add('is-active');
    header.classList.add('is-menu-open');
  };
  const burgerHandler = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  };
  const headerScrollHandler = lodash_throttle_default()(() => {
    if (window.scrollY > windowHeightOffset) {
      header.classList.add('is-header-hide');
    } else {
      header.classList.remove('is-header-hide');
    }
    console.log(window.scrollY);
    if (lastScroll > window.scrollY) {
      console.log('up');
      header.classList.add('is-fixed');
    } else {
      console.log('down');
      close();
      header.classList.remove('is-fixed');
    }
    lastScroll = window.scrollY;
  }, 200);
  window.addEventListener('scroll', headerScrollHandler);
  burger.addEventListener('click', burgerHandler);
}
/* harmony default export */ const header = ({
  init: header_init
});
// EXTERNAL MODULE: ../node_modules/aos/dist/aos.js
var aos = __webpack_require__(68);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
// EXTERNAL MODULE: ../node_modules/simple-parallax-js/dist/simpleParallax.min.js
var simpleParallax_min = __webpack_require__(120);
var simpleParallax_min_default = /*#__PURE__*/__webpack_require__.n(simpleParallax_min);
;// CONCATENATED MODULE: ./components/paralax/paralax.js

function paralax_init() {
  document.querySelectorAll('.thumbnail').forEach(el => {
    // eslint-disable-next-line no-new
    new (simpleParallax_min_default())(el, {
      overflow: !!el.dataset.overflow,
      scale: el.dataset.scale ? Number(el.dataset.scale) : 1.2,
      orientation: el.dataset.orientation ? el.dataset.orientation : 'down'
    });
  });
}
/* harmony default export */ const paralax = ({
  init: paralax_init
});
;// CONCATENATED MODULE: ./scripts/main.js








// import lazyLoad from '@scripts/modules/lazy-load';


// import analytics from '@components/analytics/analytics';
// import router from '@components/router/router';
// import home from '../pages/home/home';
// import article from '../pages/article/article';







// eslint-disable-next-line no-underscore-dangle
window._debounce = (lodash_debounce_default());
// eslint-disable-next-line no-underscore-dangle
window._throttle = (lodash_throttle_default());
let resizeWidth = null;
const main_resize = lodash_debounce_default()(() => {
  if (isDevices() && resizeWidth && resizeWidth === innerWidth) {
    return;
  }
  document.body.classList.add('is-resizing');
  modules_ua_parser.resize();
  checkHoverSupport();
  // resize logic

  document.body.classList.remove('is-resizing');
  resizeWidth = innerWidth;
}, 500);

// добавить скрипты для инициализации при переходах
// eslint-disable-next-line no-unused-vars
const scriptsInit = [
// активируем нужные модули которые будут использоваться и которые должны обновлять при переходах между страницами
// lazyLoad.init,
scrollToAnchor.init, lazyBlur.init,
// analytics.init,
sharing.init,
// home.init,
// article.init,
slider.init, header.init, paralax.init];

// добавить скрипты для удаленния данных при уходе
// eslint-disable-next-line no-unused-vars
const scriptsDestroy = (/* unused pure expression or super */ null && ([]));
const main_init = () => {
  modules_ua_parser.init();
  actual_year.init();
  vh_fix.init();
  checkHoverSupport();
  aos_default().init({
    startEvent: 'DOMContentLoaded',
    easing: 'ease',
    duration: 500
  });

  // el.dataset.orientation > string "down"
  // el.dataset.overflow > string "down"

  scriptsInit.forEach(script => script());

  // закоментировать или удалить если SPA поведение не требуется
  // router.init(scriptsInit, scriptsDestroy);

  resizeWidth = innerWidth;
  window.addEventListener('resize', main_resize);
};
document.addEventListener('DOMContentLoaded', main_init);

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/amd options */
/******/ (() => {
/******/ 	__webpack_require__.amdO = {};
/******/ })();
/******/ 
/******/ /* webpack/runtime/chunk loaded */
/******/ (() => {
/******/ 	var deferred = [];
/******/ 	__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 		if(chunkIds) {
/******/ 			priority = priority || 0;
/******/ 			for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 			deferred[i] = [chunkIds, fn, priority];
/******/ 			return;
/******/ 		}
/******/ 		var notFulfilled = Infinity;
/******/ 		for (var i = 0; i < deferred.length; i++) {
/******/ 			var [chunkIds, fn, priority] = deferred[i];
/******/ 			var fulfilled = true;
/******/ 			for (var j = 0; j < chunkIds.length; j++) {
/******/ 				if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 					chunkIds.splice(j--, 1);
/******/ 				} else {
/******/ 					fulfilled = false;
/******/ 					if(priority < notFulfilled) notFulfilled = priority;
/******/ 				}
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferred.splice(i--, 1)
/******/ 				var r = fn();
/******/ 				if (r !== undefined) result = r;
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 		var [chunkIds, moreModules, runtime] = data;
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		return __webpack_require__.O(result);
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module depends on other loaded chunks and execution need to be delayed
/******/ var __webpack_exports__ = __webpack_require__.O(undefined, [1], () => (__webpack_require__(123)))
/******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 
