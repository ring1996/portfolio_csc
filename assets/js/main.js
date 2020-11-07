const button = document.querySelector('#js-buttonHamburger');
const target = document.querySelector('body');
const globalNav = document.querySelector('#global-nav');
const globalItems = document.querySelectorAll('#global-nav a');
const classHamburger = 'is-activeHamburger';
const classScroll = 'is-scrollHeader';

function openNav() {
  button.setAttribute('aria-expanded', true);
  globalNav.setAttribute('aria-hidden', false);
}

function closeNav() {
  button.setAttribute('aria-expanded', false);
  globalNav.setAttribute('aria-hidden', true);
}

function addTabIndex() {
  globalItems.forEach(globalItem => {
    globalItem.setAttribute('tabIndex', 0);
  });
}

function removeTabIndex() {
  globalItems.forEach(globalItem => {
    globalItem.setAttribute('tabIndex', -1);
  });
}

/* nav */
// ハンバーガーボタンをクリックした時
button.addEventListener('click', function() {
  target.classList.toggle(classHamburger);
  if(this.getAttribute('aria-expanded') === 'false') {
    openNav();
    addTabIndex();
  } else {
    closeNav();
    removeTabIndex();
  }
});

// ハンバーガーメニューをクリックした時
globalItems.forEach(globalItem => {
  globalItem.addEventListener('click', function() {
    if(window.innerWidth <= 1024) {
      target.classList.remove(classHamburger);
      closeNav();
      removeTabIndex();
    }
  });
})

// 画面が読み込まれた時
window.addEventListener('load', function() {
  if(window.innerWidth >= 1024) {
    target.classList.remove(classHamburger);
    openNav();
    addTabIndex();
  } else {
    if(!target.classList.contains(classHamburger)) {
      closeNav();
    }
    removeTabIndex();
  }
});

// 画面がリサイズされた時
window.addEventListener('resize', function() {
  if(window.innerWidth >= 1024) {
    target.classList.remove(classHamburger);
    openNav();
    addTabIndex();
  } else {
    if(!target.classList.contains(classHamburger)) {
      closeNav();
    }
    removeTabIndex();
  }
});

/* header */
// 画面がスクロールされた時
window.addEventListener('scroll', function() {
  let scrollY = window.pageYOffset;
  if(window.innerWidth >= 1024) {
    if(window.innerHeight <= scrollY) {
      target.classList.add(classScroll);
    } else {
      target.classList.remove(classScroll);
    }
  }
});

/* scroll */
$(function() {
  $('a[href^="#"]').on('click', function() {
    const id = $(this).attr('href');
    const headerHeight = $('.l-header').innerHeight();
    const target = $(id).offset();
    $('html, body').animate({
      scrollTop: target.top - headerHeight
    }, 500);
    return false;
  });
});