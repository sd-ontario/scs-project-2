module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    eventName: DataTypes.STRING,
    eventDescription: DataTypes.STRING,
    eventType: DataTypes.STRING,
    //eventAuthor: DataTypes.STRING,
    eventLocation: DataTypes.STRING,
    //eventComments: DataTypes.STRING
  });

  // Events.associate = function(models) {
  //   Events.belongsTo(models.Users, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Events;
};
