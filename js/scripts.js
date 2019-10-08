document.addEventListener('DOMContentLoaded', function () {
  var searchField = document.getElementById('search-field');
  var searchForm = document.querySelector('.search-form');
  if (searchField && searchForm) {
    searchField.addEventListener('focus', function () {
      searchForm.classList.add('active');
    });
    searchField.addEventListener('blur', function () {
      if (searchForm.elements.search.value === '') {
        searchForm.classList.remove('active');
      }
    });
  }
});

function openService(evt, serviceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  document.getElementById(serviceName).style.display = 'block';
  evt.currentTarget.className += ' active';
};

Array.prototype.forEach.call(document.querySelectorAll('.buy'), function (el) {
  el.addEventListener('click', function (evt) {
    evt.preventDefault();
    cartModal.classList.add('modal-show');
  });
});

var cartModal = document.querySelector('.modal-cart');
var cartClose = cartModal.querySelector('.modal-close');

cartClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartModal.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartModal.classList.contains('modal-show')) {
      cartModal.classList.remove('modal-show');
    }
  }
});

if (document.body.contains(document.querySelector('.feedback-link'))) {
var feedbackLink = document.querySelector('.feedback-link');
var feedbackPopup = document.querySelector('.write-modal');
var close = feedbackPopup.querySelector('.modal-close');
  feedbackLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-show');
  });

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedbackPopup.classList.contains('modal-show')) {
        feedbackPopup.classList.remove('modal-show');
      }
    }
  });
};

if (document.body.contains(document.querySelector('.map-link'))) {
var mapLink = document.querySelector('.map-link');
var mapPopup = document.querySelector('.map-popup');
var mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains('modal-show')) {
      mapPopup.classList.remove('modal-show');
    }
  }
});
};
