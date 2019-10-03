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

function mapPopup() {
  var popup = document.getElementById('map-popup-wrapper');
  document.getElementById('map-popup-wrapper').className = 'map-popup-wrapper show'
}

function mapPopupClose() {
  var popup = document.getElementById('map-popup-wrapper');
  document.getElementById('map-popup-wrapper').className = 'map-popup-wrapper'
}

function openService(evt, serviceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.className += " active";

}
