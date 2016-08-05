$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
  			{'left': '1880px'},
  			500,
 			function() {
    			$(this).hide();
    			$(this).css('left', '520px');
  			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
		// Begin Test Section for Flipped Ryu
	$('.ryu1').mouseenter(function() {
		$('.ryu-standing-still1').hide();
		$('.ryu-ready-position1').show();
	})
	.mouseleave(function() {
		$('.ryu-standing-still1').show();
		$('.ryu-ready-position1').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready-position1').hide();
		$('.ryu-throwing-hadouken1').show();
		$('.hadouken1').finish().show().animate(
  			{'right': '1880px'},
  			500,
 			function() {
    			$(this).hide();
    			$(this).css('right', '520px');
  			});
	})
	.mouseup(function() {
		$('.ryu-throwing-hadouken1').hide();
		$('.ryu-ready-position1').show();
			// End Test Section
	});
	$('body').keydown(function(e) {
		console.log(e);
		if(e.which == 88){
			$('.ryu-throwing-hadouken1').hide();
			$('.ryu-ready-position1').hide();
			$('.ryu-standing-still1').hide();
			$('.ryu-cool1').show();
			$('.ryu-throwing').hide();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();


		}
	
	});
	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
});




	

