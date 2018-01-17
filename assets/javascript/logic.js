var topics = ["dog", "cat", "beagles", "fish", "hamsters"];

function renderButtons() {
	$(".animal-buttons").empty();
	
  for (var i = 0; i < topics.length; i++) {
	  button = $("<button>");
	  button.addClass("animal");
	  button.attr("data", topics[i]);
    button.text(topics[i]);
    $(".animal-buttons").append(button);
  }
}

renderButtons();

$("#submit-animal").on("click", function(event) {
  event.preventDefault();
  var animal = $("#animal-add").val().trim();
  topics.push(animal);
  renderButtons();
});

$(".animal-buttons").on("click", ".animal", function() {
  var newTopic = $(this).attr("data");
  var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + newTopic + "&api_key=yyoxkLPmDt7TpjPoz9cj2p46gyBI90CW&limit=10";
  $.ajax({
  	url: giphyURL,
  	method: "GET"
  })
  .then(function(response) {
  	console.log(response.data);
  	console.log(giphyURL);
    
    for (var j = 0; j<response.data.length; j++) {
      var giphyStillURL = response.data[j].images.downsized_still.url;
      var image = $("<img>");
      image.attr("src", giphyStillURL);
      image.attr("alt", "giphy image");
      image.attr("class", "gifs")
      image.attr("data-state", "still");
      $("#animal-gifs").prepend(image);
      var giphyAnimateURL = response.data[j].images.downsized.url;
      var rating = response.data[j].rating;
      console.log(rating);
      var p = $("<p>").html("Rating: " + rating);
      $("#animal-gifs").prepend(p);
    };

    $("#animal-gifs").on("click", ".gifs", function() {
    // Set attribute data state to animate and back to still when click on image
    // var gifState = $(this).attr("data-state", "animate");
      var animateGif = $(this).attr("src", giphyAnimateURL);
      console.log(animateGif);
    });
  });
});
