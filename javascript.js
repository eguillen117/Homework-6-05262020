//Creating Var
var apiUvIndex = 





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

//How do I create UV Index API?
//I need - LAT, LONG, AND then also use this API?
//By geographic coordinates
// API call:
// http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}
// Parameters:
// appid - personal API key

// ==========

//=== Start of 5 day forecast code=================
//SAMPLE API TO CALL 5 DAY FORECAST api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml

// lat, lon - coordinates of the location of your interest (latitude/longitude)

// Examples of API calls:
// api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37

//CREATE A NEW FUNCTION FOR THE 5 DAY. SEPERATE URL
//OPEN WEATHER API ON THE DOCUMENTATION THEY HAVE ANOTHER ONE FOR FORECAST.

// function buildQueryURL() {
// 	// queryURL is the url we'll use to query the API
// 	var queryURL = 'pro.openweathermap.org/data/2.5/forecast/hourly?id={London}&appid=46e6f2e7796e9e6d3d3f2cc4d3f59ec2';

// 	// Begin building an object to contain our API call's query parameters
// 	// Set the API key
// 	var queryParams = { 'api-key': 'R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M' };

// 	//ext the user typed into the search input, add to the queryParams object
// 	queryParams.q = $('#search-term').val().trim();
