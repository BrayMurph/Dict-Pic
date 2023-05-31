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

//to enter search word into URL for word API
//add word to url for giph
function handleSearchFormSubmit (event) {
  event.preventDefault();

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

var giphyContainer = document.getElementById('giphyContainer');
// GIPHY API key with JSON call
function gifApi(gifUrl) {

  fetch(gifUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Fetch Giphy API Response \n-------------');
      console.log(data);
      
      //trying to log first
      var gif = data.embed_url;
      console.log(gif);

    //You should be able to find a giph/img url somewhere in the returned response which 
    //you can use javascript to set as the source to an image in your html.
      //for (var i = 0; i < data.length; i++) {
        //var gif = document.createElement('h3');
        //gif.textContent = data[i].embed_url;
        //issueContainer.append(gif);
      //}
  });
};
//fetchButton.addEventListener("click", gifApi);

//function loadGiphys() {
  //var figure = document.createElement("figure");
  //var img = document.createElement("img");
  //var caption = document.createElement("figurecaption");

  //img.src = content.data[0].embed_url;
  //img.alt = content.data[0].title;
      
  //caption.textContent = content.data[0].title;
      //figure.appendChild(img);
      //figure.appendChild(caption);
  //let populate = document .querySelector(".gifs");
      //populate.insertAdjacentElement("afterbegin", figure);
//};
//fetchButton.addEventListener("click", loadGiphys);

// populate gif to webpage
//function loadGiphys() {
  //var giphyPlace = new XMLHttpRequest();
  //giphyPlace.onreadystatechange = function() {
    //if (this.readyState == 4 && this.status == 200) {
      //var data = JSON.parse(this.responseText);
      //document.getElementById("gifs").src = data[0].picture.large
    //}
  //};
  //giphyPlace.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=sHdrKgH0F2FvUch4VPlNpZXnhV4IHZTI&q=Soup&limit=25&offset=0&rating=g&lang=en", true);
  //giphyPlace.send();
//}
//fetchButton.addEventListener("click", loadGiphys);



//Define button function 
$(function() {
  var defineBtn = $(".searchButton");

  defineBtn.on("click", function() {
    console.log("clicked!")
  })
});

//function to start gifs AFTER defintion
