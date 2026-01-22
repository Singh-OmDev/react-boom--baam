const mongoose = require('mongoose');
const { minLength, stringFormat, lowercase } = require('zod');


 const  userSchema = new mongoose.Schema({
      username: {


         type: String,

          required: true,
           trim: true, 
            lowercase: true,
             unique: true,

              minLength:[3,'username must be at least 3 character long']
      },

      email: {

         type: String,

          required: true,
          trim:true,
           lowercase:true,
           unique:true,
           minLength:[13,'email must be at least 13 characters long']
      },

      
    password: {

         type: String,

          required: true,
          trim:true,
    
           minLength:[5 ,'password  must be at least 13 characters long']
      },



 })