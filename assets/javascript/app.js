var cars = ["nissan gtr", "porsche 911", "ferarri 488", "porsche cayman", "mercedes amg", "bmw m3", "corvette"];

$("button").on("click", function () {
  console.log("working");
  var car = $(this).attr("data-person");
  
  // URL to search Giphy
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    car + "&api_key=28KM0qQYRTi5pNeEdbXKzeY5NHkIlVTq&limit=10";

  // AJAX GET request
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function (response) {

      var results = response.data;

      // Looping over every result item
      //for (var i = 0; i < results.length; i++) {
        console.log("running")
        // Only taking action if the photo has an appropriate rating
        // Creating a div with the class "item"
        var gifDiv = $("<div class='item'>");

        // Storing the result item's rating
        //var rating = results[i].rating;

        // Creating a paragraph tag with the result item's rating
        //var p = $("<p>").text("Rating: " + rating);

        // Creating an image tag
        var personImage = $("<img>");
        var userInput = $("#input");
      for (var i = 0; i < results.length; i++) {
          var carsDiv = $("<div class=\"cars-form\">");
  
          var rating = results[i].rating;
  
          //var p = $("<p>").text("Rating: " + rating);
  
          var animated = results[i].images.fixed_height.url;
          var still = results[i].images.fixed_height_still.url;
  
          var carsImage = $("<img>");
          carsImage.attr("src", animated);
          carsImage.attr("data-still", still);
          //carsImage.attr("data-animate", animate);
          carsImage.attr("data-state", "still");
          carsImage.addClass("carsImage");
  
          carsDiv.append("<p>");
          carsDiv.append(carsImage);
  
          $("#cars").append(carsDiv);
        }  
        // Giving the image tag an src attribute of a property pulled off the
        // result item
        //carsImage.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        gifDiv.append("<p>");
        gifDiv.append(personImage);

        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#gifs-appear-here").prepend(gifDiv);
        
        $(".gif").on("click", function () {
          // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
          var state = $(this).attr("data-state");
          // If the clicked image's state is still, update its src attribute to what its data-animate value is.
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });
      //}    
    })      
    //done(function(response) {
      //var results = response.data;
      
      //for (var i = 0; i < results.length; i++) {
        //  var carsDiv = $("<div class=\"cars-item\">");
  
        //  var rating = results[i].rating;
  
        //  var p = $("<p>").text("Rating: " + rating);
  
        //  var animated = results[i].images.fixed_height.url;
        //  var still = results[i].images.fixed_height_still.url;
  
        //  var carsImage = $("<img>");
        //  carsImage.attr("src", animated);
        //  carsImage.attr("data-still", still);
        //  carsImage.attr("data-animate", animate);
        //  carsImage.attr("data-state", "still");
        //  carsImage.addClass("carsImage");
  
        //  carsDiv.append(p);
        //  carsDiv.append(carsImage);
  
        //  $("#cars").append(carsDiv);
      //}   
    //})

  $("#add-cars").on("click", function(event) {
    event.preventDefault();
    var newCars = $("input").eq(0).val();

    if (newCars.length > 2) {
      cars.push(newCars);
    }
    //populateButtons(cars, "#cars-button", "#cars-buttons")
  });

//populateButtons(cars, "#cars-button", "#cars-buttons");
});
          
