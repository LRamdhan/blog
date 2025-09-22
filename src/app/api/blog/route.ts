import ValidationError from "@/exception/ValidationError";
import apiErrorHandler from "@/lib/apiErrorHandler";
import apiResponse from "@/lib/apiResponse";
import { type NextRequest } from 'next/server'

const getBlog = async (req: NextRequest) => {
  // validation
  const searchParams = req.nextUrl.searchParams;
  const page: string | null = searchParams.get('page');
  if(!page) {
    throw new ValidationError('Page query should exist');
  }  

  // response
  return apiResponse.success('sip', {
    data: 'jadi ya begitulah'
  }, 201);
}

export const GET = apiErrorHandler(getBlog);