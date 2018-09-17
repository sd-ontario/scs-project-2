//Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var eventStore = [];
var strictBounds;
var markerLat;
var markerLng;
var eventLocation;
var address;
// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};
// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);
      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);
      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");
      $li.append($button);
      return $li;
    });
    $exampleList.empty();
    $exampleList.append($examples);
  });
};
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };
  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }
  API.saveExample(example).then(function() {
    refreshExamples();
  });
  $exampleText.val("");
  $exampleDescription.val("");
};
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");
  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};
// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
//CODE FOR EVENTS PART OF DASHBOARD
// Get references to page elements
var $eventName = $("#event-name");
var $eventDescription = $("#event-description");
var $eventType = $("#event-type");
var $eventLocation = $("#event-location");
var $submitEvt = $("#submit-event");
var $eventsList = $("#events-list");
// The API object contains methods for each kind of request we'll make
var API2 = {
  saveEvents: function(Events) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/Events",
      data: JSON.stringify(Events)
    });
  },
  getEvents: function() {
    return $.ajax({
      url: "api/Events",
      type: "GET"
    });
  },
  deleteEvents: function(id) {
    return $.ajax({
      url: "api/Events/" + id,
      type: "DELETE"
    });
  }
};
// refreshEvents gets new events from the db and repopulates the list
var refreshEvents = function() {
  API2.getEvents().then(function(data) {
    var $events = data.map(function(Events) {
      var $pOne = $("<p class='currentEvtName'>").text("Event: " + Events.eventName);
      eventNameStore = Events.eventName;
      var $pTwo = $("<p>").text("Type: " + Events.eventType);
      var $pThree = $("<p>").text("Description: " + Events.eventDescription);
      var $pFour = $("<p>").text("Location: " + Events.eventLocation);
      //.attr("href", "/Events/" + Events.id);
      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": Events.id
        })
        .append($pOne, $pTwo, $pThree, $pFour);
      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");
      $li.append($button);
      return $li;
    });
    $eventsList.empty();
    $eventsList.append($events);
  });
};
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmitEvents = function(event) {
  event.preventDefault();
  var eventList = {
    eventName: $eventName.val().trim(),
    eventDescription: $eventDescription.val().trim(),
    eventLocation: $eventLocation.val().trim(),
    eventType: $eventType.val().trim()
  };
  eventStore = eventList.eventName;
  console.log(eventStore);
  if (
    !(eventList.eventName && eventList.eventLocation && eventList.eventType)
  ) {
    alert("Please complete all fields.");
    return;
  }
  API2.saveEvents(eventList).then(function() {
    refreshEvents();
  });
  $eventName.val("");
  $eventType.val("");
  $eventDescription.val("");
  $eventLocation.val("");
  addEventModal.style.display = "none";
};
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClickEvents = function() {
  var idToDelete2 = $(this)
    .parent()
    .attr("data-id");
  API2.deleteEvents(idToDelete2).then(function() {
    refreshEvents();
  });
};
// Add event listeners to the submit and delete buttons
$submitEvt.on("click", handleFormSubmitEvents);
$eventsList.on("click", ".delete", handleDeleteBtnClickEvents);
// New Events Form Modal
var addEventModal = document.getElementById("addEventModal");
// Get the button that opens the modal
var addEventBtn = document.getElementById("addEventBtn");
// Get the <span> element that closes the modal
var addEventSpan = document.getElementById("addEventClose");
// When the user clicks the button, open the modal
addEventBtn.onclick = function() {
  addEventModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
addEventSpan.onclick = function() {
  addEventModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === addEventModal) {
    addEventModal.style.display = "none";
  }
};
//All Events Modal
var allEventsModal = document.getElementById("allEventsModal");
// Get the button that opens the modal
var allEventsBtn = document.getElementById("allEventsBtn");
// Get the <span> element that closes the modal
var allEventsSpan = document.getElementById("allEventsClose");
// When the user clicks the button, open the modal
allEventsBtn.onclick = function() {
  allEventsModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
allEventsSpan.onclick = function() {
  allEventsModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === allEventsModal) {
    allEventsModal.style.display = "none";
  }
};
function initialize() {
  myMap();
  initAutocomplete();
}
let lat = -25.363882;
let long = 121.044922;
function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(lat, long);
  var mapOptions = {center: myCenter, zoom: 5};
  console.log(google.maps);
  var map = new google.maps.Map(mapCanvas, mapOptions);
    $submitEvt.on("click",function(){
      getLatitudeLongitude(showResult, address);
      eventLocation = {lat: Number(markerLat), lng: Number(markerLng)};
      placeMarker(map, eventLocation);
      });
  map.setOptions({draggable: false, scrollwheel: false, disableDoubleClickZoom: true});
  console.log(map)
  var minZoomLevel = 5;
  google.maps.event.addListener(map, 'zoom_changed', function() {
    if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);
  });
    };
function showResult(result) {
  markerLat = result.geometry.location.lat();
  console.log(markerLat);
  markerLng = result.geometry.location.lng();
  console.log(markerLng);
}
function getLatitudeLongitude(callback, address) {
  // If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
  address = document.getElementById('event-location').value || 'Toronto, ON'
  // Initialize the Geocoder
  geocoder = new google.maps.Geocoder();
  if (geocoder) {
      geocoder.geocode({
          'address': address
      }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
              callback(results[0]);
          }
      });
  }
}
function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: this.eventStore
  });
  infowindow.open(map,marker);
}
var input = document.getElementById('event-location');
function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical cities
  //When a user selects a city, populate the search bar with that result
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(input),
      {types: ['(cities)']}
  );
  };
  // Allow user to submit when pressing enter
  input.addEventListener("keyup", function(event) {
      console.log(autocomplete);
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("submit-event").click();
      }
  });
  // Do not allow user to enter anything but a letter in the text-field
  $(document).ready(function() {
      $(input).keypress(function(key) {
          if(key.charCode > 65 || key.charCode < 90 && key.charCode > 97 || key.charCode < 122 && key.charCode == 32){ return true;
          } else {return false;
          }
      });
  });
  $(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
});
/*** Code for POSTS in DASHBOARD ***/
// Get references to page elements
var $postTitle = $("#post-title");
var $postBody = $("#post-body");
var $submitPost = $("#submit-post");
var $postList = $("#post-list");
// The API object contains methods for each kind of request we'll make
var API3 = {
  savePosts: function(Posts) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/Posts",
      data: JSON.stringify(Posts)
    });
  },
  getPosts: function() {
    return $.ajax({
      url: "api/Posts",
      type: "GET"
    });
  },
  deletePosts: function(id) {
    return $.ajax({
      url: "api/Posts/" + id,
      type: "DELETE"
    });
  }
};
// refreshPosts gets new posts from the db and repopulates the list
var refreshPosts = function() {
  API3.getPosts().then(function(data) {
    var $posts = data.map(function(Posts) {
      var $titleP = $("<p>").text("Title: " + Posts.postTitle);
      var $bodyP = $("<p>").text("Body: " + Posts.postBody);
      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": Posts.id
        })
        .append($titleP, $bodyP);
      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");
      $li.append($button);
      return $li;
    });
    $postList.empty();
    $postList.append($posts);
  });
};
var handleFormSubmitPosts = function(posts) {
  posts.preventDefault();
  var postList = {
    postTitle: $postTitle.val().trim(),
    postBody: $postBody.val().trim()
  };
  if (
    !(postList.postTitle && postList.postBody)
  ) {
    alert("You must enter a title and message. Thank you.");
    return;
  }
  API3.savePosts(postList).then(function() {
    refreshPosts();
  });
  $postTitle.val("");
  $postBody.val("");
  postModal.style.display = "none";
};
var handleDeleteBtnClickPosts = function() {
  var idToDelete3 = $(this)
    .parent()
    .attr("data-id");
  API3.deletePosts(idToDelete3).then(function() {
    refreshPosts();
  });
};
// Add event listeners to the submit and delete buttons
$submitPost.on("click", handleFormSubmitPosts);
//deleting a post
$postList.on("click", ".delete", handleDeleteBtnClickPosts);
//New Post Modal
var postModal = document.getElementById("postModal");
var postBtn = document.getElementById("postBtn");
var postClose = document.getElementById("postClose");
postBtn.onclick = function() {
  postModal.style.display = "block";
};
postClose.onclick = function() {
  postModal.style.display = "none";
};
window.onclick = function(post) {
  if (post.target === postModal) {
    postModal.style.display = "none";
  }
};


