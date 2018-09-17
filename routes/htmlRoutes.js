const path = require("path");
const router = require('express');
var db = require("../models");
var authController = require("../controllers/authController");


module.exports = function(app) {
  // Load index page
  app.get("/", authController.landingpage);
  app.get("/signup", authController.signup);
  app.get("/signin", authController.signin);


  app.get("/dashboard", function(req, res) {
    db.Events.findAll({}).then(function(dbEvents) {
      res.render("dashboard", {
        Events: dbEvents
      });
    });
  });

/* Waiting for sign-up/profile page */
//var renderEvents = function(req, res, next) {
//     db.Events.findAll({}).then(function(dbEvents) {
//       res.render("dashboard", {
//         Events: dbEvents
//       });
//     });
//     next()
//   };
// var renderBlog = function renderBlog(req, res) {
//   var query = {};
//   if (req.query.author_id) {
//     query.AuthorId = req.query.author_id;
//   }
//   db.Users.findAll({
//     where: query,
//     include: [db.Author]
//   }).then(function (posts) {
//     res.render('dashboard', { posts: posts })
//   });
// }  
//   app.get("/dashboard", [renderEvents, renderBlog])

  
  // app.get("/dashboard/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbDash) {
  //     res.render("dashboard", {
  //       example: dbDash
  //     });
  //   });
  // });

    app.get("/authors", function(req, res) {
    db.Events.findAll({}).then(function(dbCms) {
      res.render("authors", {
        events: dbCms
      });
    });
  });

  app.get("/events/:id", function(req, res) {
    db.Events.findOne({ where: { id: req.params.id } }).then(function(dbDash) {
      res.render("events", {
        event: dbDash
      });
    });
  });
  
  
  
  
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};