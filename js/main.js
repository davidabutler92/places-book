//business logic 
function PlacesLog() {
  this.array = []
  this.currentId = 0
}

PlacesLog.prototype.addLocation = function(place) {
  location.id = this.assignId();
  this.array.push(place);
}

PlacesLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesLog.prototype.findPlace = function(id) {
  for (var i=0; i< this.array.length; i++) {
    if (this.array[i]) {
      if (this.array[i].id === id) {
        return this.array[i];
      }
    }
  };
  return false;
}

PlacesLog.prototype.deletePlace = function(id) {
  for (var i=0; i< this.array.length; i++) {
    if (this.array[i]) {
      if (this.array[i].id == id) {
        delete this.array[i];
        return true;
      }
    }
  };
  return false;
}

function Places(location, landmarks, timeOfYear, notes) {
  this.location = location; 
  this.landmarks = landmarks; 
  this.timOfYear = timeOfYear;
  this.notes = notes; 
}


//UI logic 
var travelLog = new PlacesLog();

function displayLocationDetails(travelLogToDisplay) {
  var arrayList = $("ul#places");
  var htmlForPlaceInfo = "";
  travelLogToDisplay.array.forEach(function(Places) {
  htmlForPlaceInfo += "<li id=" + Places.id + ">" + Places.location + " " + Places.landmarks + " " + Places.timeOfYear + " " + Places.notes + "</li>";
  });
  arrayList.html(htmlForPlaceInfo);
};

$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    // console.log(inputtedLocation);
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTimeOfYear = $("input#new-timeOfYear").val();
    var inputtedNotes = $("input#new-notes").val();
    var newPlaces = new Places(inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);
    travelLog.addLocation(newPlaces);
    displayLocationDetails(travelLog);
    
    
    console.log(travelLog.locations)
  });
});


   
