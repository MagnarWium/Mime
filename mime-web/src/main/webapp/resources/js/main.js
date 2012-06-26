SFK = {};

SFK.getPlayerPage = function() {
	var url = "player.html";
	$.ajax({
		url : url,
		type : "GET",
		success : function(data) {
			$("#content").html(data);
		}
	});
};

SFK.getContent = function(url) {
	$.ajax({
		url : url,
		type : "GET",
		success : function(data) {
			$("#content").html(data);
		}
	});
};

SFK.updatePlayer = function(url) {
	
	
	var player = $('#playerForm').serializeArray();
	//var jsonPlayer = JSON.stringify(data);

	var request = $.ajax({
		url : url,
		type : "POST",
		data : player,
		dataType : "json",
		contentType : "application/json; charset=utf-8"
	});

	request.done(function() {
		alert("spiller er lagt til");
	});
};



SFK.addPlayer = function() {
	var name = $("#playerName").val();
	var zombie = false;
	var player = {
		name : name,
		zombie : zombie
	};
	player = JSON.stringify(player);

	var url = "player.json";

	var request = $.ajax({
		url : url,
		type : "POST",
		data : player,
		dataType : "json",
		contentType : "application/json; charset=utf-8"
	});

	request.done(function() {
		alert("spiller er lagt til");
	});
};


SFK.bite = function() {
	var name = $("#playerName").val();
	var zombie = false;
	var player = {
		name : name,
		zombie : zombie
	};
	player = JSON.stringify(player);

	var url = "player.json";

	var request = $.ajax({
		url : url,
		type : "POST",
		data : player,
		dataType : "json",
		contentType : "application/json; charset=utf-8"
	});

	request.done(function() {
		alert("spiller er lagt til");
	});
};


SFK.createMarker = function  (point, html) {
	var marker = new GMarker(point);
	GEvent.addListener(marker, "click", function() {
		marker.openInfoWindowHtml(html);
	});
	return marker;
}


SFK.updateMap = function() {
	var url = "player.json";
	$.ajax({
		url : url,
		type : "GET",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			var map = new GMap2(document.getElementById("map"));
			map.addControl(new GLargeMapControl());
			map.addControl(new GMapTypeControl());
			map.setCenter(new GLatLng(59.89410361691014, 10.728492736816406), 8);
			jQuery.each(data.players, function(i, val) {
				var name = val.name;
				var lat = val.lastKnownPostion.lat;
				var log = val.lastKnownPostion.log;
				var point = new GLatLng(lat, log);
				var marker = SFK.createMarker(
						point,
						'<div style="width:240px">'+name+'<\/div>');
				map.addOverlay(marker);
				
			});

		}
	});
}

$(document).ready(function() {
	GUnload();
	SFK.updateMap();
});
