$(document).ready(function () {

	footerCurrent = 2;
	// Initialize
	createNavbarMenuAnimation();
	createVerdictTypeSwitchAnimation();
	createFooterAnimation();
	createMobileFooterAnimation(footerCurrent);
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
		createFooterAnimation(footerCurrent);
	});
}

function createMobileFooterAnimation(current) {
	if ($(window).width() <= 910) {
		if (current === 1) {

		} else if (current === 2) {
			var secondBoxTrans = $('.mobile.footer-box-container').outerWidth() / 2 - 150;
			$('.mobile.footer-box:nth-child(2)').css("transform", "translateX(" + secondBoxTrans + "px)");
			var firstBoxTrans = secondBoxTrans - 260;
			$('.mobile.footer-box:nth-child(1)').css("transform", "translateX(" + firstBoxTrans + "px)");
			var thirdBoxTrans = secondBoxTrans + 200;
			$('.mobile.footer-box:nth-child(3)').css("transform", "translateX(" + thirdBoxTrans + "px)");
		} else {

		}
	} else {
		$('.footer-box:nth-child(1)').css("transform", "");
		$('.footer-box:nth-child(2)').css("transform", "");
		$('.footer-box:nth-child(3)').css("transform", "");
	}
}


function detectWindowSizeAction() {
	if ($(window).width() <= 910) {
		$('.footer-box-container').addClass('mobile');
		$('.footer-box').addClass('mobile');


		var secondBoxTrans = $('.mobile.footer-box-container').outerWidth() / 2 - 167;
		var firstBoxTrans = secondBoxTrans - 260;
		var thirdBoxTrans = secondBoxTrans + 210;

		$('.mobile.footer-box:nth-child(1)').css("transform", "translateX(" + firstBoxTrans + "px)");
		$('.mobile.footer-box:nth-child(1)').css("opacity", 0.1);
		$('.mobile.footer-box:nth-child(2)').css("transform", "translateX(" + secondBoxTrans + "px)");
		$('.mobile.footer-box:nth-child(3)').css("transform", "translateX(" + thirdBoxTrans + "px)");
		$('.mobile.footer-box:nth-child(3)').css("opacity", 0.1);

	} else {
		$('.footer-box-container').removeClass('mobile');
		$('.footer-box').removeClass('mobile');

		$('.footer-box:nth-child(1)').css("transform", "");
		$('.footer-box:nth-child(2)').css("transform", "");
		$('.footer-box:nth-child(3)').css("transform", "");

		$('.footer-box:nth-child(1)').css("opacity", 1);
		$('.footer-box:nth-child(3)').css("opacity", 1);


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
