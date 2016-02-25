$(document).ready(function () {

	// Initialize
	createNavbarMenuAnimation();
	createVerdictTypeSwitchAnimation();
	createFooterAnimation();
	createMobileFooterAnimation();
	detectScrollToBottomEvent();
	detectWindowResizeEvent();
	detectWindowSizeAction();
	showFormAction();

});

function createNavbarMenuAnimation() {
	$('.navbar-toggle').click(function (e) {
		e.preventDefault();
		$('.navbar-menu-list').slideToggle();
		$(this).toggleClass('open');
		if ($('.type-switch-item-list').is(':visible')) {
			$('.type-switch-item-list').slideToggle();
		}
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
	if ($(window).width() > 910) {
		$(window).scroll(function () {
			if ($(window).scrollTop() + $(window).height() == $(document).height()) {
				$('footer').addClass('show');
				$('.footer-toggle').addClass('open');
			} else {
				$('footer').removeClass('show');
				$('.footer-toggle').removeClass('open');
			}
		});
	}
}

function createFooterAnimation() {
	$('.footer-toggle').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('footer').toggleClass('show');
	})
}

function initializeFooterShift() {
	$('.footer-shift').removeClass('left right');
	$('.footer-shift').addClass('mobile center');
	$('.mobile.footer-box:nth-child(2)').addClass('focus');
	$('.mobile.footer-box:nth-child(1)').removeClass('focus');
	$('.mobile.footer-box:nth-child(3)').removeClass('focus');
}

function detectWindowResizeEvent() {
	$(window).resize(function () {
		detectWindowSizeAction();
	});
}

function createMobileFooterAnimation() {

	initializeFooterShift();

	$('.footer-shift.mobile').on('swipeleft', function (e) {
		if ($('.footer-shift').hasClass('mobile')) {
			if ($('.mobile.footer-box:nth-child(2)').hasClass('focus')) {
				$('.mobile.footer-box:nth-child(2)').removeClass('focus');
				$('.mobile.footer-box:nth-child(1)').removeClass('focus');
				$('.mobile.footer-box:nth-child(3)').addClass('focus');
				$('.footer-shift').removeClass('center').addClass('left');
			} else if ($('.mobile.footer-box:nth-child(1)').hasClass('focus')) {
				$('.mobile.footer-box:nth-child(1)').removeClass('focus');
				$('.mobile.footer-box:nth-child(3)').removeClass('focus');
				$('.mobile.footer-box:nth-child(2)').addClass('focus');
				$('.footer-shift').removeClass('right').addClass('center');
			}
		}
	});

	$('.footer-shift.mobile').on('swiperight', function (e) {
		if ($('.footer-shift').hasClass('mobile')) {
			if ($('.mobile.footer-box:nth-child(2)').hasClass('focus')) {
				$('.mobile.footer-box:nth-child(2)').removeClass('focus');
				$('.mobile.footer-box:nth-child(3)').removeClass('focus');
				$('.mobile.footer-box:nth-child(1)').addClass('focus');
				$('.footer-shift').removeClass('center').addClass('right');
			} else if ($('.mobile.footer-box:nth-child(3)').hasClass('focus')) {
				$('.mobile.footer-box:nth-child(3)').removeClass('focus');
				$('.mobile.footer-box:nth-child(1)').removeClass('focus');
				$('.mobile.footer-box:nth-child(2)').addClass('focus');
				$('.footer-shift').removeClass('left').addClass('center');
			}
		}
	});

}


function detectWindowSizeAction() {
	if ($(window).width() <= 910) {
		$('.footer-box-container').addClass('mobile');
		$('.footer-box').addClass('mobile');
		$('.footer-shift').addClass('mobile center');
		$('.mobile.footer-box:nth-child(2)').addClass('focus');
	} else {
		$('.footer-box-container').removeClass('mobile');
		$('.footer-box').removeClass('mobile');
		$('.footer-shift.mobile').removeClass('mobile left center right');
		$('.mobile.footer-box:nth-child(1)').removeClass('focus');
		$('.mobile.footer-box:nth-child(2)').removeClass('focus');
		$('.mobile.footer-box:nth-child(3)').removeClass('focus');
	}
}

function showFormAction() {
	$('.tryform').click(function (e) {
		e.preventDefault();
		$('#card').toggleClass('active');

		// close nav bar
		$('.navbar-menu-list').slideToggle();
		$('.navbar-toggle').removeClass('open');
		if ($('.type-switch-item-list').is(':visible')) {
			$('.type-switch-item-list').slideToggle();
		}
	});

	$('.sign-up').on('click', function (e) {
		e.preventDefault();
		$('.info-state').addClass('right');
		$('.form-input').addClass('slide');
		$('.sign-in').toggleClass('active');
		$('.sign-up').toggleClass('active');

	});
	$('.sign-in').on('click', function (e) {
		e.preventDefault();
		$('.info-state').removeClass('right');
		$('.form-input').removeClass('slide');
		$('.sign-in').toggleClass('active');
		$('.sign-up').toggleClass('active');
	});
}
