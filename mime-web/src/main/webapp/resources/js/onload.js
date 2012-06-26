no.stensberg.telesherpaweb.admin.onload.init = function ($htmlData) {
	
	var temp = $htmlData.find('a');
	alert(temp);
	
	$htmlData.find('a').click(function () 
		{
					$.ajax({
				  url: $(this).attr('data-ajax-link'),
					  success: function( data ) {
						  no.stensberg.telesherpaweb.admin.init($(data)); 
						  $('#content').append($(data));
					  }
					});
					return false; 
			}
		
		); 
	return $htmlData;
};