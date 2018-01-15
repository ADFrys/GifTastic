var topics = ["dog", "cat", "beagles", "fish", "hamsters"];

// q: = query string (search term)
// rating = "";

$("#submit-animal").on("click", function() {
  event.preventDefault();
  var animal = $("#animal-add").val();
  var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=yyoxkLPmDt7TpjPoz9cj2p46gyBI90CW&limit=10";
  $.ajax({
  	url: giphyURL,
  	method: "GET"
  })
  .then(function(response) {
  	console.log(response.data.);
  	console.log(giphyURL);


  });


});








