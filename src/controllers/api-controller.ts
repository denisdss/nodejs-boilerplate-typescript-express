import { Request, Response } from "express";
import * as service from "../services/api-service";

export const getData = async (req: Request, res: Response) => {
  const httpResponse = await service.getDataService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};