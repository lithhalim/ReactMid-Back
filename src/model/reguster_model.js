const {STRING,TEXT,VIRTUAL,ENUM}=require("sequelize")

const database=require("../database/database")

const reguster = database.define('regusters', {
    // Model attributes are defined here
    regusterid:{
      type:STRING,
    },
    firstName: {
      type:STRING,
      allowNull:false
    },
    lastName: {
      type:STRING,
      allowNull:false
    },
    email: {
      type: STRING,
      allowNull: false
    },
    password: {
      type: STRING,
      allowNull: false
    },
    role:{
      type:ENUM('admin','writer','editor','user'),
      defaultValue:"user",
    },
    Image: {
      type: TEXT,
      defaultValue:"https://thumbs.dreamstime.com/z/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-user-icon-vector-male-person-symbol-profile-circle-avatar-sign-115922533.jpg",
    },
    country: {
      type: TEXT,
    },
    refreshtoken: {
      type:TEXT,
    },
    action:{ 
      type: VIRTUAL,
      get(){
        const acl={
          user:['read'],
          writer:['read','create'],
          editor:['read','create','update'],
          admin:['read','create','update']
        }
        return acl[this.role];
      }
    }
  }, {
    timestamps: false
  });




  
  module.exports =reguster