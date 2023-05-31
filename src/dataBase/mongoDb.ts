import mongoose from "mongoose";

const MongoDb = {
  async Connect(): Promise<void> {
    const url = process.env.MONGODB_URL as string;
    const username = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASSWORD;

    mongoose.set("strictQuery", true);

    mongoose.connect(url, { auth: { password, username } }, (error) => {
      if (error) return console.error(error.message);

      console.log(`connectado ao banco de dados`);
    });
  },
};

export { MongoDb };
