$(document).ready(function () {

	// Initialize
	createNavbarMenuAnimation();
	createVerdictTypeSwitchAnimation();
	createFooterAnimation();
	createMobileFooterAnimation();
	//	detectScrollToBottomEvent();
	detectWindowResizeEvent();
	detectWindowSizeAction();
	//	closeOpenObjectsEvent();
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

function createFooterAnimation() {
	$('.footer-toggle').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('footer').toggleClass('show');
	})
}

function detectWindowResizeEvent() {
	$(window).resize(function () {
		detectWindowSizeAction();
		createFooterAnimation();
	});
}

function createMobileFooterAnimation() {
	if ($(window).width() <= 910) {
	} else {
	}
}


function detectWindowSizeAction() {
	if ($(window).width() <= 910) {
		$('.footer-box-container').addClass('mobile');
		$('.footer-box').addClass('mobile');
		$('.footer-shift').addClass('mobile');
		$('.mobile.footer-box:nth-child(2)').addClass('focus');

	} else {
		$('.footer-box-container').removeClass('mobile');
		$('.footer-box').removeClass('mobile');
		$('.footer-shift').removeClass('mobile');
		$('.mobile.footer-box:nth-child(2)').removeClass('focus');
	}
}

function closeOpenObjectsEvent() {
	$(document).click(function (event) {
		var clickover = $(event.target);

		/* footer close when click outside */
		if (!clickover.hasClass('footer-toggle') && $('footer').hasClass('show')) {
			if (event.pageY < window.innerHeight - $('footer').height()) {
				$('.footer-toggle').toggleClass('open');
				$('footer').toggleClass('show');
			}
		}

		/* menu list collapse when click outside*/
		if (event.pageY > $('.navbar-menu-list').height() + 44 && $('.navbar-menu.navbar-toggle').hasClass('open') && event.target !== $('.navbar-menu.navbar-toggle').get(0)) {
			$('.navbar-menu-list').slideToggle();
			$('.navbar-toggle').removeClass('open');
			if ($('.type-switch-item-list').is(':visible')) {
				$('.type-switch-item-list').slideToggle();
			}
		}

	});
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