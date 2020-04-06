//business logic 
function Places(location, landmarks, timeOfYear, notes) {
  this.location = location; 
  this.landmarks = landmarks; 
  this.timOfYear = timeOfYear;
  this.notes = notes; 
}

// Places.prototype.addPlace = function(Places) {
//   this.Places.push(place);
// //}


//UI logic 

$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedTimeOfYear = $("input#timeOfYear").val();
    var inputtedNotes = $("input#notes").val();
   
    var newPlace = new Places(inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);
    console.log(newPlace);
    $("ul#places").append("<li><span class='list-place'>" + newPlace.location + "</span><li/>");
    
  });
});
//console.log(newPlace);