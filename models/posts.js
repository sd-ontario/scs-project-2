module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define("Posts", {
    postTitle: DataTypes.STRING,
    postBody: DataTypes.STRING,
    User_ID: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }, //hard-coded right now - waiting for passport.js user session id
    postalCode: { type: DataTypes.STRING, allowNull: false, defaultValue: "L4E5B3" } //hard-coded right now - waiting for passport.js user session id
  });
/*
  Posts.associate = function(models) {
    Posts.belongsTo(models.user, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  */

  return Posts;
};
