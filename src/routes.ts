import { Router } from "express";
import * as Controller from "./controllers";

const router = Router();

router.get("/getApiData", Controller.api.getData);


export default router;