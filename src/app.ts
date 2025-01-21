import express from "express";
import router from "./routes";
import cors from "cors";
import { HttpMethod } from "./utils/http-methods";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/", router);

  const corsOptions = {
    origin: [
      "http://*", 
      "https://*"
      ],
    methods: [
      HttpMethod.GET, 
      HttpMethod.POST, 
      HttpMethod.PATCH, 
      HttpMethod.DELETE
    ],
  };

  app.use(cors(corsOptions));

  return app;
}

export default createApp;