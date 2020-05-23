/* Using the NYT activity as a reference */

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

// 	// Grab text the user typed into the search input, add to the queryParams object
// 	queryParams.q = $('#search-term').val().trim();

// 	// If the user provides a startYear, include it in the queryParams object
// 	var startYear = $('#start-year').val().trim();

// 	if (parseInt(startYear)) {
// 		queryParams.begin_date = startYear + '0101';
// 	}

// 	// If the user provides an endYear, include it in the queryParams object
// 	var endYear = $('#end-year').val().trim();

// 	if (parseInt(endYear)) {
// 		queryParams.end_date = endYear + '0101';
// 	}

// 	// Logging the URL so we have access to it for troubleshooting
// 	console.log('---------------\nURL: ' + queryURL + '\n---------------');
// 	console.log(queryURL + $.param(queryParams));
// 	return queryURL + $.param(queryParams);
// }

// /**
// 	 * takes API data (JSON/object) and turns it into elements on the page
// 	 * @param {object} NYTData - object containing NYT API data
// 	 */
// function updatePage(NYTData) {
// 	// Get from the form the number of results to display
// 	// API doesn't have a "limit" parameter, so we have to do this ourselves
// 	var numArticles = $('#article-count').val();

// 	// Log the NYTData to console, where it will show up as an object
// 	console.log(NYTData);
// 	console.log('------------------------------------');

// 	// Loop through and build elements for the defined number of articles
// 	for (var i = 0; i < numArticles; i++) {
// 		// Get specific article info for current index
// 		var article = NYTData.response.docs[i];

// 		// Increase the articleCount (track article # - starting at 1)
// 		var articleCount = i + 1;

// 		// Create the  list group to contain the articles and add the article content for each
// 		var $articleList = $('<ul>');
// 		$articleList.addClass('list-group');

// 		// Add the newly created element to the DOM
// 		$('#article-section').append($articleList);

// 		// If the article has a headline, log and append to $articleList
// 		var headline = article.headline;
// 		var $articleListItem = $("<li class='list-group-item articleHeadline'>");

// 		if (headline && headline.main) {
// 			console.log(headline.main);
// 			$articleListItem.append(
// 				"<span class='label label-primary'>" +
// 					articleCount +
// 					'</span>' +
// 					'<strong> ' +
// 					headline.main +
// 					'</strong>'
// 			);
// 		}

// 		// If the article has a byline, log and append to $articleList
// 		var byline = article.byline;

// 		if (byline && byline.original) {
// 			console.log(byline.original);
// 			$articleListItem.append('<h5>' + byline.original + '</h5>');
// 		}

// 		// Log section, and append to document if exists
// 		var section = article.section_name;
// 		console.log(article.section_name);
// 		if (section) {
// 			$articleListItem.append('<h5>Section: ' + section + '</h5>');
// 		}

// 		// Log published date, and append to document if exists
// 		var pubDate = article.pub_date;
// 		console.log(article.pub_date);
// 		if (pubDate) {
// 			$articleListItem.append('<h5>' + article.pub_date + '</h5>');
// 		}

// 		// Append and log url
// 		$articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + '</a>');
// 		console.log(article.web_url);

// 		// Append the article
// 		$articleList.append($articleListItem);
// 	}
// }

// // Function to empty out the articles
// function clear() {
// 	$('#article-section').empty();
// }

// // CLICK HANDLERS
// // ==========================================================

// // .on("click") function associated with the Search Button
// $('#run-search').on('click', function(event) {
// 	// This line allows us to take advantage of the HTML "submit" property
// 	// This way we can hit enter on the keyboard and it registers the search
// 	// (in addition to clicks). Prevents the page from reloading on form submit.
// 	event.preventDefault();

// 	// Empty the region associated with the articles
// 	clear();

// 	// Build the query URL for the ajax request to the NYT API
// 	var queryURL = buildQueryURL();

// 	// Make the AJAX request to the API - GETs the JSON data at the queryURL.
// 	// The data then gets passed as an argument to the updatePage function
// 	$.ajax({
// 		url: queryURL,
// 		method: 'GET'
// 	}).then(updatePage);
// });

// // //  .on("click") function associated with the clear button
// // $('#clear-all').on('click', clear);
