import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex : true
    });

    console.log(`mongodb connected - ${conn.connection.host}`.blue.underline.bold)
  } catch(error) {
      console.error(`error occured:${error.message}`.red.underline);
      process.exit(1);
  }
};


export default connectDB;