module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    eventName: DataTypes.STRING,
    eventDescription: DataTypes.STRING,
    eventType: DataTypes.STRING,
    //eventAuthor: DataTypes.STRING,
    eventLocation: DataTypes.STRING,
    //eventComments: DataTypes.STRING
    User_ID: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    postalCode: { type: DataTypes.STRING, allowNull: false, defaultValue: "L5M6E7" }
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
