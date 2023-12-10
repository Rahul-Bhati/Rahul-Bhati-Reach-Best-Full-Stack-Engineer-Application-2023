import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
     try {
          await connect(process.env.MONGODB_URL);
     } catch (error) {
          console.log(error);
          throw new Error("Can't connect to Mongodb database!")
     }
}

async function disconnectToDatabase() {
     try {
          await disconnect();
     } catch (error) {
          console.log(error);
          throw new Error("Can't connect to Mongodb database!")
     }
}

export {connectToDatabase, disconnectToDatabase} ;