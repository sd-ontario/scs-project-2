module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      userName: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      address: DataTypes.STRING
    });
  
    // Events.associate = function(models) {
    //   Events.belongsTo(models.Users, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    return Users;
  };
  