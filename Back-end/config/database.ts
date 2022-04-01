import config from "config";
import { ConnectionOptions, connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = config.get("mongoURI");
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(mongoURI, options);
    console.log("MongoDB Connected...");

  } catch (err) {
    console.error((err as Error).message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
