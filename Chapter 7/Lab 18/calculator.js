function updateScore() {
	let inputs = document.getElementsByTagName('input');

  for (let input of inputs) {
    if (input.getAttribute('type') === 'radio') {
      input.addEventListener('change', handleClick)
    }
  }
}

function handleClick() {
  console.log('gamer')
}