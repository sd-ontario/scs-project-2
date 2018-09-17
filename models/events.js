module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    eventName: DataTypes.STRING,
    eventDescription: DataTypes.STRING,
    eventType: DataTypes.STRING,
    //eventAuthor: DataTypes.STRING,
    eventLocation: DataTypes.STRING,
    //eventComments: DataTypes.STRING
  });

  Events.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Events.belongsTo(models.Users, {
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
  return Events;
};
