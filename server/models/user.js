'use strict';
const  { makeHash } = require(`../helpers/bcrypt`)

module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class User extends Model {}

  User.init ({
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          msg : `re-check your email formatting`
        }
      },
      unique : {
        msg : `Email has already been registered`
      }
    },
    password: DataTypes.STRING
  },
  {
    sequelize,
    modelName : `User`,
    hooks : {
      beforeValidate : ( data, options) => {
        if(!data.email || !data.password){
          return Promise.reject(new Error("One or more of the field(s) is/are empty"));
        };
      },
      afterValidate : (data, options) => {
        data.password = makeHash(data.password)
      } 
    }
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};