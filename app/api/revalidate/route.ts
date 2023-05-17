import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");
  if (!tag) return new Response("No tag provided", { status: 400 });
  revalidateTag(tag);
  return new Response("Revalidated", { status: 200 });
}
