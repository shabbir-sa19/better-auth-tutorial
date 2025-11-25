import { useParams, useSearchParams } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = useSearchParams();
  const id = params.get("_id");
}
