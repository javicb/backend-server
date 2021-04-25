const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb+srv://MEAN_USER:5cHPmt7_5bT*_.H@cluster0.ukavo.mongodb.net/dbHospital', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('BBDD online');
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de conectar con la BBDD');
  }
}

module.exports = {
  dbConnection
}