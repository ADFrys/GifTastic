var topics = ["puppy", "cat", "fish", "bird", "beagle", "hamsters"];

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
      var image = $("<img>");
      image.attr("alt", "giphy image");
      image.attr("data-still", response.data[j].images.downsized_still.url);
      image.attr("data-animate", response.data[j].images.downsized.url);
      image.attr("src", response.data[j].images.downsized_still.url);
      image.attr("data-state", "still")
      image.attr("class", "gifs")
      $("#animal-gifs").prepend(image);
      var rating = response.data[j].rating;
      console.log(rating);
      var p = $("<p>").html("Rating: " + rating);
      $("#animal-gifs").prepend(p);
    };
  });
});

$("body").on("click", ".gifs", function() {
  var imageState = $(this).attr("data-state");

  if (imageState === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  }
  else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  } 
});
