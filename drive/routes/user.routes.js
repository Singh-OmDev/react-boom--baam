const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

router.get('/register', (req, res) => {
  res.render('register');
});

router.post(
  '/register',

  // ✅ Validation rules
  body('email').trim().isEmail().withMessage("Invalid email"),
  body('password').trim().isLength({ min: 5 }).withMessage("Password must be at least 5 characters"),
  body('username').trim().isLength({ min: 3 }).withMessage("Username must be at least 3 characters"),

  // ✅ Controller function
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid data'
      });
    }

    console.log(req.body);

    res.send("User registered successfully ✅");
  }
);

module.exports = router;
