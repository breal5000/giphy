 var cars = ["nissan gtr", "porsche 911", "ferarri 488", "porsche cayman", "mercedes amg", "bmw m3", "chevrolet corvette"];

 $("button").on("click", function() {
    console.log("working");
    var car = $(this).attr("data-person");

    // Constructing a URL to search Giphy
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      car + "&api_key=28KM0qQYRTi5pNeEdbXKzeY5NHkIlVTq";

    // Performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function(response) {
    
        var results = response.data;

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {
          console.log("running")
          // Only taking action if the photo has an appropriate rating
            // Creating a div with the class "item"
            var gifDiv = $("<div class='item'>");

            // Storing the result item's rating
            var rating = results[i].rating;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);

            // Creating an image tag
            var personImage = $("<img>");
            var userInput = $("#input");
            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            personImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            gifDiv.append(p);
            gifDiv.append(personImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gifs-appear-here").prepend(gifDiv);
          
        }
      });
  //});
  // user input text
  $(".form-control").on("click", function (searchTerm) {
  console.log("last function")
  var searchTerm = $( this ).val().trim();
  car.push(searchTerm[i]);
  })
});