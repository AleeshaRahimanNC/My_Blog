const USER = require('../models/usersModel').users
const mongoose = require('mongoose')

const getUserData = (userId) =>{
   
 return USER.find({_id:userId},{password:0})
 

}
module.exports = getUserData