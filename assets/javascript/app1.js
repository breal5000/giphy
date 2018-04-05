$(document).ready(function() {
    var cars = ["nissan gtr", "porsche 911", "ferarri 488", "porsche cayman", "mercedes amg", "bmw m3", "corvette"];

    function populateButtons(carArray, addClasses, areaToAddTo){
        $(areaToAddTo).empty();
        console.log("working");
        for (var i = 0; i < carArray.length; i++) {
            var a = $("<button>");
            a.addClass(addClasses);
            a.attr("data-type", carArray[i]);
            a.text(carArray[i]);
            $(areaToAddTo).append(a);
        }
    }

    $(document).on("click", ".cars-button", function() {
        $("#cars").empty();
        $(".cars-button").removeClass("active");
        $(this).addClass("active");
        console.log("still works");
        
        var type = $(this).attr("data-type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        car + "&api_key=28KM0qQYRTi5pNeEdbXKzeY5NHkIlVTq&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
        .done(function(response) {
        var results = response.data;
        
        for (var i = 0; i < results.length; i++) {
            var carsDiv = $("<div class=\"cars-item\">");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;

            var carsImage = $("<img>");
            carsImage.attr("src", animated);
            carsImage.attr("data-still", still);
            carsImage.attr("data-animate", animate);
            carsImage.attr("data-state", "still");
            carsImage.addClass("carsImage");

            carsDiv.append(p);
            carsDiv.append(carsImage);

            $("#cars").append(carsDiv);
        }   
        
        });
    });
  
    $(document).on("click", ".cars-image", function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("dta-state", "still");
    }
    });

    newFunction(cars, populateButtons);

});
function newFunction(cars, populateButtons) {
    $("#add-cars").on("click", function (event) {
        event.preventDefault();
        var newCars = $("input").eq(0).val();
        if (newCars.length > 2) {
            cars.push(newCars);
        }
        populateButtons(cars, "cars-button", "#cars-buttons");
    });
    populateButtons(cars, "cars-button", "cars-buttons");
}

