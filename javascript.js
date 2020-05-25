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

	let searchedCity = $('.searchCity');

	//Function that starts and cleans up value entered in search term.
	$('#cityForm').on('submit', function(event) {
		//Code below prevents the page reloading and messing up the function
		event.preventDefault();
		var searchTerm = $('#search-term').val().trim();
		console.log(searchTerm);
		gettingJSON(searchTerm);

		function gettingJSON(searchTerm) {
			$.getJSON(
				'http://api.openweathermap.org/data/2.5/weather?q=' +
					searchTerm +
					'&units=imperial&APPID=46e6f2e7796e9e6d3d3f2cc4d3f59ec2',
				function(json) {
					// document.write(JSON.stringify(json));
					$('#temperature').text(json.main.temp);
					$('#humidity').text(json.main.humidity);
					$('#windSpeed').text(json.wind.speed);
					$('#cityName').text(searchTerm);
					// $('#uvIndex').text(json.current.uv);
				}
			);

			function gettingJSON(searchTerm) {
				$.getJSON(
					`https://api.weatherapi.com/v1/forecast.json?key=&q=46e6f2e7796e9e6d3d3f2cc4d3f59ec2` +
						searchTerm +
						`&days=6`,
					function(json) {
						var cityName = json.location.name;
						var date = new Date(json.location.localtime).toDateString();
						var uv = json.current.uv;

						$('#temperature1').text(json.current.temp_f);
						$('#humidity1').text(json.current.humidity);
						console.log(searchTerm);
					}
				);
			}
		}
	});
});
