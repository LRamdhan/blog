import ValidationError from "@/exception/ValidationError";
import apiResponse from "./apiResponse";
import { type NextRequest } from 'next/server'

type ApiHandler = (req: NextRequest) => Promise<Response>

const apiErrorHandler = (apiHandler: ApiHandler) => {
  return async (req: NextRequest) => {
    try {
      return await apiHandler(req);
    } catch(error) {
      console.log('Error : ' + error);
      if (error instanceof ValidationError) {
        return apiResponse.badRequest(error.message);
      } else {
        return apiResponse.error();
      }
    }
  };
}

export default apiErrorHandler;