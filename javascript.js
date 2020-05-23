
// Creating variables to be able store local storage.
var storedCity = '';
var searchTerm = [];
var days = 6;


//Function to get current date and time=============================
$(document).ready(function() {
	//getting the current day and added a new format
	$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
	//target tbody to manipulate the table rows ... and more
	var tbody = $('#calendar-content');

	$('#cityForm').on('submit', function(event) {
		//Code below prevents the page reloading
		event.preventDefault();
		var searchTerm = $('#search-term').val().trim();
		console.log(searchTerm);
		gettingJSON(searchTerm);
	});
});
// END OF current day function to get present date=============================================================

function gettingJSON(searchTerm) {
	$.getJSON(
		'http://api.openweathermap.org/data/2.5/weather?q=' +
			searchTerm +
			'&units=imperial&APPID=46e6f2e7796e9e6d3d3f2cc4d3f59ec2',
		function(json) {
			// document.write(JSON.stringify(json));
			console.log(json);
			$('#temperature').text(json.main.temp);
			$('#humidity').text(json.main.humidity);
			$('#windSpeed').text(json.wind.speed);
			$('#cityName').text(searchTerm);
		}
	);
}

// $('#cityForm').on('submit', function(event) {
// 	//Code below prevents the page reloading
// 	event.preventDefault();
// 	var searchTerm = $('#search-term').val().trim();
// 	console.log(searchTerm);
// 	gettingJSON(searchTerm);
// });

// function gettingJSON(fiveDayForecast) {
// 	$.getJSON(
// 		'http://api.openweathermap.org/data/2.5/forecast?q=' +
// 			searchTerm +
// 			'&units=imperial&APPID=46e6f2e7796e9e6d3d3f2cc4d3f59ec2',
// 		function(json) {
// 			console.log(json);
// 		}
// 	);
// }