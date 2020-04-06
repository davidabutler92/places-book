//business logic 
function PlacesLog() {
  this.locations = []
  this.currentId = 0
}

PlacesLog.prototype.addLocation = function(place) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}






function Places(location, landmarks, timeOfYear, notes) {
  this.location = location; 
  this.landmarks = landmarks; 
  this.timOfYear = timeOfYear;
  this.notes = notes; 
}







// //UI logic 
// $(document).ready(function() {
//   $("form#new-places").submit(function(event) {
//     event.preventDefault();

//     var inputtedLocation = $("input#new-location").val();
//     var inputtedLandmark = $("input#new-landmark").val();
//     var inputtedTimeOfYear = $("input#new-timeOfYear").val();
//     var inputtedNotes = $("input#new-notes").val();
   
//     var newPlace = new Places(inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);
//     console.log(newPlace);
//     $("ul#places").append("<li><span class='list-place'>" + newPlace.location + "</span><li/>");

//     $(".list-places").last().click(function() {
//       $("#show-places").show();
//       $("#show-place h2").text(newPlace.location);
//       $(".location").text(newPlace.location);
//       $(".landmark").text(newPLace.landmarks);
//       $(".timeOfYear").text(newPlace.timeOfYear);
//       $(".notes").text(newPlace.notes);
//     });
//     $("input#new-location").va("");
//     $("input#new-landmark").val("");
//     $("input#new-timeOfYear").val("");
//     $("input#new-notes").val("");
//   });
// });
// //console.log(newPlace);