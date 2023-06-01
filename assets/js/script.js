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
    var define = document.getElementById("define");
    var heading = document.createElement("h1");
    heading.innerHTML = def;
    define.appendChild(heading);
    }
  });
}


//to enter search word into URL for word API
//add word to url for giph
function handleSearchFormSubmit (event) {
  event.preventDefault();
  //var definite = "/definitions"
  var searchInputVal = document.querySelector(".searchWord").value;
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


fetchButton.addEventListener("click", handleSearchFormSubmit);

//var giphyContainer = document.getElementById('giphyContainer');
// GIPHY API key with JSON call
function gifApi(gifUrl) {

  fetch(gifUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Fetch Giphy API Response \n-------------');
      console.log(data);
      //for (var i = 0; i < data.length; i++) {
        //var gif = document.createElement('h3');
        //gif.textContent = data[i].embed_url;
        //issueContainer.append(gif);
      //}
  });
};

//fetchButton.addEventListener("click", gifApi);

//Define button function 
$(function() {
  var defineBtn = $(".searchButton");

  defineBtn.on("click", function() {
    console.log("clicked!")
  })
});

//function to start gifs AFTER defintion
