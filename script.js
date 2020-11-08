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


if (JSON.parse(localStorage.getItem("searchHistory")) === null) {
    
}else{
    console.log("searchHistory loaded into searchHistoryArr");
    renderSearchHistory();
}

// returns an alert of the user does not enter a valid city
searchBtn.on("click", function(error) {
    error.preventDefault();
    if (searchInput.val() === "") {
        alert("please enter a valid city");
        return;
    }
    getWeather(searchInput.val());
});
