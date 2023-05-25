// Words API key with JSON call
unirest.get("https://wordsapiv1.p.mashape.com/words/soliloquy")
.header("X-Mashape-Key", "1ca162c33fmsha588cae174d0a24p1028f3jsnc1881d0ea824")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

// GIPHY API key with JSON call
var giphyUrl = "https://api.giphy.com/v1/gifs/search?api_key=sHdrKgH0F2FvUch4VPlNpZXnhV4IHZTI&q=Soup&limit=25&offset=0&rating=g&lang=en";

fetch(giphyUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });


//Define button function 
$(function() {
  var defineBtn = $(".searchButton");

  defineBtn.on("click", function () {
    //call unirest API for defintion
    //convert to text in html document
  })
});

//function to start gifs AFTER defintion
