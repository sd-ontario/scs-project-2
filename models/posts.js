module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define("Posts", {
    postTitle: DataTypes.STRING,
    postBody: DataTypes.STRING,
    User_ID: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    postalCode: { type: DataTypes.STRING, allowNull: false, defaultValue: "L4E5B3" }
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
