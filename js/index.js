
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

$(window).keydown(function(e) {
  key = (e.keyCode) ? e.keyCode : e.which;
$('.key.k' + key).addClass('active');
  console.log(key)
});

$(window).keyup(function(e) {
  key = (e.keyCode) ? e.keyCode : e.which;
  $('.key.k' + key).removeClass('active');
});

$(document).keydown(function(objEvent) {
  if (objEvent.keyCode == 9) {  //tab pressed
      objEvent.preventDefault(); // stops its action
  }
})

$(document).keydown(function(objEvent) {
  if (objEvent.keyCode == 18) {  //tab pressed
      objEvent.preventDefault(); // stops its action
  }
})