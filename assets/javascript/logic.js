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
     console.log(topics);
   });

   $("button").on("click", function(event) {
   	var newTopic = $(this).text();
   	console.log(newTopic + " newtopic");
   	var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + newTopic + "&api_key=yyoxkLPmDt7TpjPoz9cj2p46gyBI90CW&limit=10";
     $.ajax({
  	   url: giphyURL,
  	   method: "GET"
    })
    .then(function(response) {
  	console.log(response.data);
  	console.log(giphyURL);
  	var giphyAnimateURL = response.data["0"].images.downsized.url;
  	console.log(giphyAnimateURL);
  	var image = $("<img>");
  	image.attr("src", giphyAnimateURL);
  	image.attr("alt", "giphy image");
  	$("#animal-gifs").prepend(image);
    });
  });









