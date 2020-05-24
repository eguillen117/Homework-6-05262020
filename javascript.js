// Creating variables to be able store local storage.
var storedCity = '';
var searchTerm = [];
var ForecastURL = 'http://api.weatherapi.com/v1/forecast.json?key=46e6f2e7796e9e6d3d3f2cc4d3f59ec2&q=';
var apiUvIndex = 'http://api.openweathermap.org/data/2.5/uvi?';
var day1 = 1;
var day2 = 2;
var day3 = 3;
var day4 = 4;
var day5 = 5;

//Function to get current date and time=============================
$(document).ready(function() {
	//getting the current day and added a new format
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
	//target tbody to manipulate the table rows ... and more
	var tbody = $('#calendar-content');
});

//Function that starts and cleans up value entered in search term.
$('#cityForm').on('submit', function(event) {
	//Code below prevents the page reloading
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
			}
		);
	}

	$.getJSON(
		'https://api.weatherapi.com/v1/forecast.json?key=46e6f2e7796e9e6d3d3f2cc4d3f59ec2&q=' + searchTerm + '&days=6'
	);
});

// $('#cityForm').on('submit', function(event) {
// 	//Code below prevents the page reloading
// 	event.preventDefault();
// 	var searchTerm = $('#search-term').val().trim();
// 	console.log(searchTerm);
// 	gettingJSON(searchTerm);
// });
// END OF current day function to get present date=============================================================

// function gettingJSON(searchTerm) {
// 	$.getJSON(
// 		'http://api.openweathermap.org/data/2.5/weather?q=' +
// 			searchTerm +
// 			'&units=imperial&APPID=46e6f2e7796e9e6d3d3f2cc4d3f59ec2',
// 		function(json) {
// 			// document.write(JSON.stringify(json));
// 			$('#temperature1').text(json.main.temp);
// 			$('#humidity1').text(json.main.humidity);
// 		}
// 	);
// }

// // Start of function to post 5 days
// function fiveDayForecast(searchTerm) {
// 	$.getJSON(
// // function (json) {
// 	var cityName = json.location.name;
// 	var cityName = json.location.name;
// 	var date = new Date(json.location.localtime).toDateString();
// 	var iconUrl = 'https:' + json.forecast.forecastday[0].day.condition.icon;
// 	var uv = json.current.uv;

// // I AM GOING TO ATTEMPT TO DO DAY BY DAY FOR THE 5 DAY FORECAST
// $('#cityForm').on('submit', function (event) {
// 	//Code below prevents the page reloading
// 	event.preventDefault();
// 	var searchTerm = $('#search-term').val().trim();

// 	function gettingJSON(searchTerm) {
// 		$.getJSON(
// 			'https://api.weatherapi.com/v1/forecast.json?key=46e6f2e7796e9e6d3d3f2cc4d3f59ec2&q=' +
// 			searchTerm + '&days=6',
// 			function (json) {
// 				// document.write(JSON.stringify(json));
// 				$('#temperature1').text(json.main.temp);
// 				$('#humidity1').text(json.main.humidity);

// 			}
// 		);
// 	}

// 	function Day2(searchTerm) {
// 		$.getJSON(
// 			'https://api.weatherapi.com/v1/forecast.json?key=46e6f2e7796e9e6d3d3f2cc4d3f59ec2&q=' +
// 			searchTerm +
// 			'&days=6',

// 			function (json) {
// 				// document.write(JSON.stringify(json));
// 				$('#temperature2').text(json.main.temp);
// 				$('#humidity2').text(json.main.humidity);

// 			}
// 		);
// 	};

// };
