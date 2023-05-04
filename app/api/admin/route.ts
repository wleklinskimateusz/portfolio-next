import { serverEnv } from "@/services/serverEnv";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  return redirect(serverEnv.STRAPI_URL + "/admin");
}
