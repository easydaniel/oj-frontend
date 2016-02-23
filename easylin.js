window.onload = function () {
	const button = document.querySelectorAll('button').item(1);
	button.addEventListener('click', function() {
		button.classList.toggle('clicked');
		document.getElementsByName(this.dataset.trigger)[0].classList.toggle('hide');
	});
	button.addEventListener('transitionend', function() {
		if (button.classList.contains('clicked')) {
		 button.classList.toggle('clicked');
		}
	}, false);

}
