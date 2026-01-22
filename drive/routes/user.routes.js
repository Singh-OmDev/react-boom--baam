const express = require('express');
const router = express.Router();
 const bcrypt  = require('bcrypt');
 const jwt = require ('jsonwebtoken');


const userModel = require('../models/user.model');
const { body, validationResult } = require('express-validator');


router.get('/register', (req, res) => {
  res.render('register');
});

router.post(
  '/register',


  body('email').trim().isEmail().withMessage("Invalid email"),
  body('password').trim().isLength({ min: 5 }).withMessage("Password must be at least 5 characters"),
  body('username').trim().isLength({ min: 3 }).withMessage("Username must be at least 3 characters"),

  
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid data'
      });
    }

    try {
      const { email, username, password } = req.body;


       const hashPassword = await bcrypt.hash(password, 10)

      const newUser = await userModel.create({
        email,
        username,
         password:hashPassword
        
      });

      console.log(req.body);

      return res.status(201).json({
        message: "User registered successfully ✅",
        user: newUser
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Server error ❌"
      });
    }
  }
);

 router.get('/login', (req, res)=> {
     res.render('login')
 })

 router.post ('/login',
    body('username'.trim().isLength({min:3})),
    body('password'.trim().isLength({min:5})),
    async(req,res)=> {
         const errors = validationResult(req);

         if (!errors.isEmpty()){
             return res.status(400).json({
                error:errors.array(),
                message:'invalid data'
             })
         }

          const {username , password} = req.body;
           const user = await userModel.findOne({

             username:username
           })

            if (!user){

                  return res.status (400).json({

                     message:'username or password is incorrect'
                  })
            }

            if (!isMatch){

                 return res.status(400).json({
                    message: 'username or password is incorrect'
                 })
            }


            const  token = jwt.sign ({


                 userId :user._id,
                  email:user.email,
                   username:user.username
            },

                 process.env.JWT_SECRET,


        )


         res.cookie('token', token)
                   res.send('logged in');


    }
 )

module.exports = router;
