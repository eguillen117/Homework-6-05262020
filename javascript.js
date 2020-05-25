// Creating variables to be able store local storage and References
var ForecastURL = 'http://api.weatherapi.com/v1/forecast.json?key=46e6f2e7796e9e6d3d3f2cc4d3f59ec2&q=';
var apiUvIndex = 'http://api.openweathermap.org/data/2.5/uvi?';
var ForecastDay1 = 1;
var ForecastDay2 = 2;
var ForecastDay3 = 3;
var ForecastDay4 = 4;
var ForecastDay5 = 5;

//START OF FUNCTIONS=================================
$(document).ready(function() {
	console.log('Start of function');
	//getting the current day and added a new format
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
	//======= Present date and time display========

	// variable selectors
	var searchCity = $('.searchCity');

	var searchButton = $('.run-search');
	let weatherArea = $('.weatherArea');
	let forecastArea = $('.cardArea');

	//USER ENTERS BUTTON - Function that starts and cleans up value entered in search term.
	$('#cityForm').on('submit', function(event) {
		//Code below prevents the page reloading and messing up the function
		event.preventDefault();
		var searchCity = $('#searchCity').val().trim();
		console.log(searchCity);
		gettingJSON(searchCity);
		// Function below is to get present day forecast - Missing UV Index -
		function gettingJSON(searchCity) {
			$.getJSON(
				'http://api.openweathermap.org/data/2.5/weather?q=' +
					searchCity +
					'&units=imperial&APPID=46e6f2e7796e9e6d3d3f2cc4d3f59ec2',
				function(json) {
					// document.write(JSON.stringify(json));
					$('#temperature').text(json.main.temp);
					$('#humidity').text(json.main.humidity);
					$('#windSpeed').text(json.wind.speed);
					$('#cityName').text(searchCity);
					console.log(json);
				}
			);
			// Function to get 5 day forecast
			$.ajax({
				url:
					'https://api.openweathermap.org/data/2.5/forecast?q=' +
					searchCity +
					'&appid=46e6f2e7796e9e6d3d3f2cc4d3f59ec2',
				method: 'GET',
				dataType: 'jsonp'
				// Jquery to get response and data
			}).then(function(response) {
				console.log(response);

				var forecastData = '';

				//Function to display for the 5 days of forecast
				for (var i in response.list) {
					if (i > 0 && response.list[i].dt_txt.indexOf('12:00') > -1) {
						
						// foreCast va
						var forecastTempC = (response.list[i].main.temp - 273.15).toFixed(2);

						var forecastArray = [
							"<div class = 'col-sm-2 day'>",
							"<p class = 'forecastDay'>",

							response.list[i].dt_txt.split(' ')[0],
							'</p>',
							"<img src = 'http://openweathermap.org/img/wn/" +
								response.list[i].weather[0].icon +
								"@2x.png'>", 
							'<p> Temp: ',

							forecastTempC,
							' °F </p>',
							'<p> Humidity: ',

							response.list[i].main.humidity,
							'%</p>',
							'<p> Wind Speed: ',

							response.list[i].wind.speed, //NOT response.list[i].main.wind.speed,
							' mph</p>',
							'</div>'
						];
						// Add forecast Data to forecastArray
						forecastData += forecastArray.join('');
					}
				}
				// Display forecast data in forecastArea
				$(forecastArea).html(forecastData);
				$(searchCity).val('');
			});
		}
	});
});

// THIS Function below does not work I am tyring to do 5 day forecast
// 			function gettingJSON(searchTerm) {
// 				$.getJSON(
// 					`https://api.weatherapi.com/v1/forecast.json?key=&q=46e6f2e7796e9e6d3d3f2cc4d3f59ec2` +
// 						searchTerm +
// 						`&days=6`,
// 					function(json) {
// 						var cityName = json.location.name;
// 						var date = new Date(json.location.localtime).toDateString();
// 						var uv = json.current.uv;

// 						$('#temperature1').text(json.current.temp_f);
// 						$('#humidity1').text(json.current.humidity);
// 						console.log(searchTerm);
// 					}
// 				);
// 			}
// 		}
