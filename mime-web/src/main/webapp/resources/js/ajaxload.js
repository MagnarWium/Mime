$(document).ready(function() {
	
	$('div[ajax-load]').each(function(index) {
		
		//var htmlData = ""; 
	//	$(this).load($(this).attr('ajax-load'));
		
		var url =  $(this).attr('ajax-load');
		var htmlElement = $(this);
		$.ajax({
			  url: url,
			  success: function( data ) {
				  htmlElement.append(no.stensberg.telesherpaweb.admin.init($(data))); 
				  
			  }
			});
	});
	
	
	    
});