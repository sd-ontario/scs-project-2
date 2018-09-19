module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    User_ID: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    eventName: DataTypes.STRING,
    eventDescription: DataTypes.STRING,
    eventType: DataTypes.STRING,
    //eventAuthor: DataTypes.STRING,
    eventLocation: DataTypes.STRING,
    //eventComments: DataTypes.STRING
    postalCode: { type: DataTypes.STRING, allowNull: false, defaultValue: "L4E5B3" }
  });
/*
  Events.associate = function(models) {
    Events.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };
*/

  return Events;

};
