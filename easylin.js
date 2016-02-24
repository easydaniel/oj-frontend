$(document).ready(function () {
	// Initialize
	createNavbarMenuAnimation();
	createVerdictTypeSwitchAnimation();
	detectScrollToBottomEvent();
});

function createNavbarMenuAnimation() {
	$('.navbar-toggle').click(function (e) {
		e.preventDefault();
		$('.navbar-menu-list').slideToggle();
		$(this).toggleClass('open');
	});
}

function createVerdictTypeSwitchAnimation() {
	$('.type-switch-toggle').click(function (e) {
		e.preventDefault();
		$('.type-switch-item-list').slideToggle();
	});
	$('.type-switch-item').click(function (e) {
		e.preventDefault();
		$('.type-switch-toggle').html($(this).text());
		$('.type-switch-item-list').slideToggle();
	});

	$('.type-button-switch-toggle').click(function (e) {
		e.preventDefault();
		$('.type-button-switch-item-list').slideToggle();
	});
	$('.type-button-switch-item').click(function (e) {
		e.preventDefault();
		$('.type-button-switch-toggle').html($(this).text());
		$('.type-button-switch-item-list').slideToggle();
	});
}

function detectScrollToBottomEvent() {
	$(window).scroll(function () {
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			$('footer').addClass('show');
			$('.footer-toggle').addClass('show');
		} else {
			$('footer').removeClass('show');
			$('.footer-toggle').removeClass('show');
		}
	});
	$('.footer-toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('footer').toggleClass('show');
	})
}
