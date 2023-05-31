import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongooseConnectMock = async () => {
  const mongod = await MongoMemoryServer.create();
  const uri = await mongod.getUri();

  mongoose.set("strictQuery", true);

  mongoose.connect(uri, { dbName: "DatabaseTest" });
};

const mongooseCloseDataBase = async () => {
  const mongod = await MongoMemoryServer.create();

  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

export { mongooseConnectMock, mongooseCloseDataBase };
