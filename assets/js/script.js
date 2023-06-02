// Words API key with JSON call
var fetchButton = document.querySelector(".searchButton");


function wordApi(wordUrl) {
  fetch(wordUrl, {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "X-Mashape-Key": "2226cf8c78msh337974c2e3152bap13deb7jsnb24580be881e"
  }
}).then(function (response) {
  return response.json();
  })
  .then(function (data) {
    console.log('Fetch Word API Response \n-------------');
    console.log(data);
    // To get the definitions onto the page
    for (var i = 0; i < data.results.length; i++) {
    var def = data.results[i].definition;
     console.log(def);
    var defineEl = $("<li>");
    var defEl = $("#define1");
    defineEl.text("Definition: " + def);
    defineEl.attr("class", "definition");
    defEl.append(defineEl);
    }
  });
}

//to enter search word into URL for word API
//add word to url for giph
function handleSearchFormSubmit (event) {
  event.preventDefault();
  var searchInputVal = document.querySelector(".searchWord").value;
  var defEl = $("#define1");
  defEl.text("");
  var populateGif = document.getElementById("giphyContainer");
  populateGif.innerHTML = "";
  var wordUrl = "https://wordsapiv1.p.rapidapi.com/words/";
  var gifUrlStart = "https://api.giphy.com/v1/gifs/search?api_key=sHdrKgH0F2FvUch4VPlNpZXnhV4IHZTI&q=";
  var gifUrlEnd = "&limit=50&offset=0&rating=g&lang=en";

  if(!searchInputVal) {
    console.error("You need to enter a word!");
    return;
  }

  wordUrl = wordUrl + searchInputVal;
  gifUrl = gifUrlStart + searchInputVal + gifUrlEnd;

  wordApi(wordUrl);
  gifApi(gifUrl);
};

// GIPHY API key with JSON call
function gifApi(gifUrl) {

  fetch(gifUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Fetch Giphy API Response \n-------------');
      console.log(data);
      
      for (let i = 0; i < data.data.length; i++) {
        var gif = data.data[i].images.downsized.url;
        console.log(gif);
        var populateGif = document.getElementById("giphyContainer");
        var gifElement = document.createElement("img");
        gifElement.innerHTML = gif;
        populateGif.appendChild(gifElement);
        gifElement.src = data.data[i].images.downsized.url;
      }
      
  });
};

//Define button function 
$(function() {
  var defineBtn = $(".searchButton");

  defineBtn.on("click", function() {
    console.log("clicked!")
  })
});


fetchButton.addEventListener("click", handleSearchFormSubmit);
//function to start gifs AFTER defintion
