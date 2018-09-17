var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExamples
    ) {
      res.json(dbExamples);
    });
  });
  // Get all Users
  // app.get("/api/Users", function(req, res) {
  //   db.Users.findAll({}).then(function(dbUsers) {
  //     res.json(dbUsers);
  //   });
  // });
  // // Create a new User
  // app.post("/api/Users", function(req, res) {
  //   db.Users.create(req.body).then(function(dbUsers) {
  //     res.json(dbUsers);
  //   });
  // });
  // // Delete a User by id
  // app.delete("/api/Users/:id", function(req, res) {
  //   db.Users.destroy({ where: { id: req.params.id } }).then(function(dbUsers) {
  //     res.json(dbUsers);
  //   });
  // });

  //Get all Events
  app.get("/api/Events", function(req, res) {
    db.Events.findAll({}).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });
  // Create a new Event
  app.post("/api/Events", function(req, res) {
    db.Events.create(req.body).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });
  // Delete an Event by id
  app.delete("/api/Events/:id", function(req, res) {
    db.Events.destroy({ where: { id: req.params.id } }).then(function(
      dbEvents
    ) {
      res.json(dbEvents);
    });
  });

  //Get all Posts
  app.get("/api/Posts", function(req, res) {
    db.Posts.findAll({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
  // Create a new Event
  app.post("/api/Posts", function(req, res) {
    db.Posts.create(req.body).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
  // Delete an Event by id
  app.delete("/api/Posts/:id", function(req, res) {
    db.Posts.destroy({ where: { id: req.params.id } }).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });


};