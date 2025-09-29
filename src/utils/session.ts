import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { SessionValue } from "./typeUtils";

export async function getSession(): Promise<SessionValue> {
  return await getServerSession(authOption);
}