// list of element variables including open weather api key
var apiKey = "6d2d9229c4237c0213d63e723601dc2c";
var searchBtn = $(".searchBtn");
var searchInput = $(".searchInput");
var cityNameEl = $(".city");
var currentDateEl = $(".currentDate");
var weatherIconEl = $(".weatherIcon");
var searchHistoryEl = $(".historyItems");
var tempEl = $(".temp");
var humidityEl = $(".humidity");
var windSpeedEl = $(".windSpeed");
var uvIndexEl = $(".uvIndex");
var cardRow = $(".card-row");

//creates current date 'dd/mm/yyy'
var newDate = new Date();
var dd = String(newDate.getDate()).padStart(2, '0');
var mm = String(newDate.getMonth() + 1).padStart(2, '0');
var yyyy = newdate.getFullYear();
var newDate = mm + '-' + dd + '-' + yyyy;
