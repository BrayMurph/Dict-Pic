// Words API key with JSON call
var fetchButton = document.querySelector(".searchButton");

function wordApi(wordUrl) {
  fetch(wordUrl, {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "X-Mashape-Key": "1ca162c33fmsha588cae174d0a24p1028f3jsnc1881d0ea824"
  }
}).then(function (response) {
  return response.json();
  })
  .then(function (data) {
    console.log('Fetch Word API Response \n-------------');
    console.log(data);
  });
}

function handleSearchFormSubmit (event) {
  event.preventDefault();

  var searchInputVal = document.querySelector(".searchWord").value;
  var wordUrl = "https://wordsapiv1.p.rapidapi.com/words/";

  
  if(!searchInputVal) {
    console.error("You need to enter a word!");
    return;
  }

  wordUrl = wordUrl + searchInputVal;

  wordApi(wordUrl);

}

fetchButton.addEventListener("click", handleSearchFormSubmit);


// GIPHY API key with JSON call
  var giphyUrl = "https://api.giphy.com/v1/gifs/search?api_key=sHdrKgH0F2FvUch4VPlNpZXnhV4IHZTI&q=Soup&limit=25&offset=0&rating=g&lang=en";

  fetch(giphyUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Fetch Giphy API Response \n-------------');
      console.log(data);
  });

//add word to url for giph

function loadGiphys() {
  var giphyPlace = new XMLHttpRequest();
  giphyPlace.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("gifs").src = data.results[0].picture.large
    }
  };
  giphyPlace.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=sHdrKgH0F2FvUch4VPlNpZXnhV4IHZTI&q=Soup&limit=25&offset=0&rating=g&lang=en", true);
  giphyPlace.send();
}

//Define button function 
$(function() {
  var defineBtn = $(".searchButton");

  defineBtn.on("click", function() {
    console.log("clicked!")
  })
});

//function to start gifs AFTER defintion
