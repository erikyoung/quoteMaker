$(document).ready(function() {

var quote; 
var author;

	function getNewQuote() {
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/', 
			jsonp: 'jsonp', 
			dataType: 'jsonp', 
			data: {
				method: 'getQuote', 
				lang: 'en', 
				format: 'jsonp'
			}, 
			success: function(result) {
				quote = result.quoteText; 
				author = result.quoteAuthor; 
				$('#quote').text(quote); 
				if (author) {
					$('#author').text('said by ' + author); 
				} else {
					$('#author').text('- unknown'); 
				}
			}
		}); 
	} 
	getNewQuote(); 

	$('#new-quote').on('click', function(event) {
		event.preventDefault(); 
		getNewQuote(); 
	});
}); 