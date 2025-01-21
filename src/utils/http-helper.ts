import { HttpResponseModel } from "../models/http-response-model";
import { StatusCode } from "../utils/status-code";

export const ok = async (data: any): Promise<HttpResponseModel> => {
  return {
    statusCode: StatusCode.OK,
    body: data,
  };
};

export const created = async (): Promise<HttpResponseModel> => {
  return {
    statusCode: StatusCode.Created,
    body: {
      message: "successful",
    },
  };
};

export const noContent = async (): Promise<HttpResponseModel> => {
  return {
    statusCode: StatusCode.NoContent,
    body: null,
  };
};

export const badRequest = async (): Promise<HttpResponseModel> => {
  return {
    statusCode: StatusCode.BadRequest,
    body: null,
  };
};
