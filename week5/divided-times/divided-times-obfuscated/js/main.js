$(function(){

		$('#secondary-nav-container section').hide();

		$('#primary-nav a').click(function(event){

			var target = $(this).attr('href');
			console.log('the target is: ' + target);

			event.preventDefault();
		

			if ( $(this).hasClass('is-active') ) {
				console.log('condition is true');
				$(target).slideUp();
				$(this).removeClass('is-active');
			} else {
				$('#primary-nav a').removeClass('is-active');
				$(this).addClass('is-active');
				$('#secondary-nav-container section').slideUp();
				$('#secondary-nav-container').show();
				$(target).slideDown();
	
			}

		});

		
		


		//attr()
		//slideDown()
		//slideUp()
		//parent()
		//siblings()
		//show()
		//hide()

});
