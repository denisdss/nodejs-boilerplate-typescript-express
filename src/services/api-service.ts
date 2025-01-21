import { ApiModel } from "../models/api-model";
import { HttpResponseModel } from "../models/http-response-model";
import * as apiRepository from "../repositories/api-repository";
import * as http from "../utils/http-helper"

export const getDataService = async () => {
  const data = await apiRepository.findData();
  let response: HttpResponseModel | null = null
  if (data.length > 0){
    response = await http.ok(data)
  } else {
    response = await http.noContent()
    
    //Optional: Personal message
    response.body = 'Sorry!'
  }
  return response;
};