var topics = ["dog", "cat", "beagles", "fish", "hamsters"];

// q: = query string (search term)
// rating = "";

function renderButtons(button) {
	$(".animal-buttons").empty();

	for (var i = 0; i < topics.length; i++) {
	  var button = $("<button>");
	  button.addClass("animal");
	  button.attr("data", topics[i]);
    buttons.text(topics[i]);
    $(".animal-buttons").append(button);

    }
   }

$("#submit-animal").on("click", function(event) {
  event.preventDefault();
  var animal = $("#animal-add").val().trim();
  topics.push(animal);
  console.log(topics);
  var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=yyoxkLPmDt7TpjPoz9cj2p46gyBI90CW&limit=10";
  $.ajax({
  	url: giphyURL,
  	method: "GET"
  })
  .then(function(response) {
  	console.log(response.data);
  	console.log(giphyURL);
  });


});








