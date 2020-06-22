$(document).ready(function() {
	$("#getWeatherForecast").click(function(){
		var city = $("#city").val();
		var key =  'eb0748fe5cbe46b0e03ae0aa6a68178b'

		if (city != '') {
			
			$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather',
			dataType: 'json',
			type: 'GET',
			data: {q:city, appid: key, units: 'metric'},

			success: function(data){
				var wf = '';
				$.each(data.weather, function(index, val){
					wf += '<p> <b>' + "</b><img  src=" + val.icon + ".png></p>" + "<br>" + "<br>" + 
					 data.name + "<br>" + "<br>" + data.main.temp + '&deg;c'  +"<br>" + "<br>" + val.main + "<br>" + "<br>" + val.description +
					"<br>" +"<br>" +"Wind speed is currently at " +" "+  data.wind.speed + "m/s" + "<br>" + "Direction:" + data.wind.deg+ '&deg;'
				});
				$("#showWeatherForecast").html(wf);
				 
			}

		});

		} else{
			$("#error").html("Please enter a city");
		}

		
	});
});
