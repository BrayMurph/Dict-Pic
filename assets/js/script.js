// Words API key with JSON call
var wordApiRequest = "https://wordsapiv1.p.rapidapi.com/words/soliloquy";

fetch(wordApiRequest, {
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

//unirest.get("https://wordsapiv1.p.mashape.com/words/soliloquy")
//.header("X-Mashape-Key", "1ca162c33fmsha588cae174d0a24p1028f3jsnc1881d0ea824")

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