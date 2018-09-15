module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define("Posts", {
    postTitle: DataTypes.STRING,
    postBody: DataTypes.STRING,
  });

  // Events.associate = function(models) {
  //   Events.belongsTo(models.Users, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Posts;
};
