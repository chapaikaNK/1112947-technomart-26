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

Array.prototype.forEach.call(document.querySelectorAll('.buy'), function (el) {
  el.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartModal.classList.add("modal-show");
  });
});

var cartModal = document.querySelector(".modal-cart");
var cartClose = cartModal.querySelector(".modal-close");

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartModal.classList.contains("modal-show")) {
      cartModal.classList.remove("modal-show");
    }
  }
});
