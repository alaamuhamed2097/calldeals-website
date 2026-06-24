import { NextRequest, NextResponse } from "next/server";

/**
 * Same-origin proxy for contact-form submissions. The browser POSTs here, and
 * this handler forwards to the Dashboard API server-side — which sidesteps the
 * API's restrictive CORS policy and the self-signed dev cert (the global
 * `fetch`/undici honours `NODE_TLS_REJECT_UNAUTHORIZED`).
 *
 * Backend contract: POST `${API_BASE}/api/ContactRequest` with a `ContactRequest`
 * DTO. All string fields are required (min length 2; phone 7–20). `sourceType`
 * is the ContactRequestSourceType enum (Home=0 … SolutionDetail=4, Other=5).
 */
const API_BASE = (process.env.API_BASE_URL ?? "http://localhost:5050").replace(/\/+$/, "");

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const payload = {
    firstName: str(body.firstName),
    lastName: str(body.lastName),
    email: str(body.email),
    phone: str(body.phone),
    company: str(body.company),
    jobTitle: str(body.jobTitle),
    message: str(body.message),
    sourceType: typeof body.sourceType === "number" ? body.sourceType : 5,
    industryId: body.industryId ?? null,
    solutionId: body.solutionId ?? null,
  };

  let res: Response;
  try {
    res = await fetch(`${API_BASE}/api/ContactRequest`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "We couldn't reach the server. Please try again shortly." },
      { status: 502 }
    );
  }

  const data = await res.json().catch(() => null);
  return NextResponse.json(data ?? { success: res.ok }, { status: res.ok ? 200 : res.status });
}
