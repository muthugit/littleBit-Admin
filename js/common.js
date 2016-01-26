Parse.initialize("oQ0OXIziUqnCHigLHX9onk1x9dZ6CKul2wbJCiv4",
		"3udbN0b2m3rckSZKZTNfK5mSXtzOmtujwjGsajgH");



$(document).ready(
		function() {
			var previousScroll = 0;
			$(window).scroll(
					function() {
						var currentScroll = $(this).scrollTop();
						if (currentScroll > 0
								&& currentScroll < $(document).height()
										- $(window).height()) {
							if (currentScroll > previousScroll) {
								$(".is-visible").fadeOut(500);
							} else {
								$(".is-visible").fadeIn(500);
							}
							previousScroll = currentScroll;
						} else if (currentScroll <= 10) {
							$(".is-visible").show(300);
						}

					});
		});

function showInlineNews() {
	console.log("FF");
	$('.card-reveal').show();
}

function hideInlineNews() {
	console.log("FF");
	$('.card-reveal').hide();
}

$.fn.preload = function() {
	this.each(function() {
		$('<img/>')[0].src = this;
	});
}
