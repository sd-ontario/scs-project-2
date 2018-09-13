// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

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
      var $a = $("<a>")
        .text(Events.eventName + Events.eventDescription + Events.eventLocation + Events.eventType)
        .attr("href", "/Events/" + Events.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": Events.id
        })
        .append($a);

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

  if (!(eventList.eventName && eventList.eventLocation && eventList.eventType)) {
    alert("You must enter an example text and description!");
    return;
  }

  API2.saveEvents(eventList).then(function() {
    refreshEvents();
  });

  $eventName.val("");
  $eventType.val("");
  $eventDescription.val("");
  $eventLocation.val("");
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
