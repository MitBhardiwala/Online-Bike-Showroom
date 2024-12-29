import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://aryantambekar2021:123456782023@cluster0.ukmdp9c.mongodb.net/";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((err) => 
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
