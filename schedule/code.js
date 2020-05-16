
function dropDown() {
  let dropFilter = document.getElementById('filter-drop');
  let tag = document.getElementById('tags');
  if (dropFilter.className === 'filter-btn') {
    dropFilter.className += ' close';
  } else {
    dropFilter.className = 'filter-btn';
  }

  if (tag.className === 'tracks-levels') {
    tag.className += ' show';
  } else {
    tag.className = 'tracks-levels';
  }
}

var modal = document.getElementById('modal-pop');
var coffee = document.getElementById('coffee');
var disappear = document.getElementById('disappear');

coffee.onclick = function () {
  modal.style.display = 'grid';
}

disappear.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

window.onscroll = function() {hang()};

var stick = document.getElementById('stick');

var stickyoffset = stick.offsetTop;

function hang() {
  if (window.pageYOffset > stickyoffset) {
    stick.classList.add('sticky');
  } else {
    stick.classList.remove('sticky');
  }
}
