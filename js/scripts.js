function makeClear() {
  $("#new-place-name").val("");
  $("#new-location").val("");
  $("#new-landmarks").val("");
  $("#new-season").val("");
}

function Place(inputtedName, inputtedLocation, inputtedLandmarks, inputtedSeason) {
  this.placeName = inputtedName;
  this.location = inputtedLocation;
  this.landmarks = inputtedLandmarks;
  this.season = inputtedSeason

}

$(document).ready(function(){
  $("#submit").click(function(e) {
    e.preventDefault();


    var inputtedName = $("#new-place-name").val();
    var inputtedLocation = $("#new-location").val();
    var inputtedLandmarks = $("#new-landmarks").val();
    var inputtedSeason = $("#new-season").val();

    var newPlace = new Place(inputtedName, inputtedLocation, inputtedLandmarks, inputtedSeason);

    // populated the 'List of Places' section with the Place Name ONLY
    $("ul#results-list").append("<li class='list-item'>" + newPlace.placeName + "</li>");

    makeClear();

    $("li.list-item").last().click(function(){
      console.log(newPlace.placeName);
      // populate the "Place Details" section
      $("span.place-name").text(newPlace.placeName);
      $("span.location").text(newPlace.location);
      $("span.landmark").text(newPlace.landmarks);
      $("span.time-of-year").text(newPlace.season);
    })
  })


})
