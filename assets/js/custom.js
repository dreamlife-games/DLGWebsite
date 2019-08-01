	/* ----------------------------------------------------------- */
	/*  8. Kontakt Formular
	/* ----------------------------------------------------------- */ 
	$(document).ready(function(){ 
		$('#characterLeft').text('1000/1000 Zeichen verbleibend');
		$('#message').keydown(function () {
			var max = 1000;
			var len = $(this).val().length;
			if (len >= max) {
				$('#characterLeft').text('Du hast das Limit an Zeichen erreicht!');
				$('#characterLeft').addClass('red');         
			} 
			else {
				var ch = max - len;
				$('#characterLeft').text(ch + '/' + max + ' Zeichen verbleibend');
				$('#characterLeft').removeClass('red');            
			}
		});    
	});