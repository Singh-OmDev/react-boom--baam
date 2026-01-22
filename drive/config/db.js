const mongoose = require('mongoose');

function connectToDB() {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => {
      console.log('Connected to DB ✅');
    })
    .catch((err) => {
      console.error('DB connection failed ❌', err);
    });
}

module.exports = connectToDB;
