const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      // con esto evitamos el (node: 34300) deprecationwarning
      useFindAndModify: false
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