'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile.init({
    user_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    fullname: DataTypes.STRING,
    umur: DataTypes.INTEGER,
    tgl_lahir: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Profile',
  });

  Profile.belongsTo('user')
  
  return Profile;
};