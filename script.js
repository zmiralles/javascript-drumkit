function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if (!audio) {
    return;
  }

  audio.currentTime = 0
  audio.play()
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== "transform") {return};
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);







/*

4. Set a remove transition function by property name transform. Then remove class of playing
5. call play sound
6. Call removetransition using for each method, add eventlistener for when something is transitioned.

*/
