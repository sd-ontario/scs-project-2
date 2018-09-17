module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define("Posts", {
    postTitle: DataTypes.STRING,
    postBody: DataTypes.STRING,
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to a user
    // A Post can't be created without a user due to the foreign key constraint
    Post.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  // Events.associate = function(models) {
  //   Events.belongsTo(models.Users, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Posts;
};
