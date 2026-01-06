import "dotenv/config";
import connectDB from "./config/connect";
import express from "express";
import router from "./routes/carRoute";
import notFound from "./middlewares/notFound";

const app = express();

app.use("/api/v1/cars", router);
app.use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    console.log("Database connected...");
    app.listen(port, () => {
      console.log("Server started on port: " + port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
